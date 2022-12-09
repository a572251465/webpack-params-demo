const fs = require("fs");
const path = require("path");
const MagicString = require("magic-string");
const Module = require("../Module")


class Bundle {
  constructor(options) {
    // 入口文件数据
    this.entryPath = path.resolve(options.entry.replace(/\.js$/, '') + '.js')
    // 表示所有的模块
    this.modules = {}
  }

  build(filename) {
    // 表示请求模块
    const entryModule = this.fetchModule(this.entryPath);
    // 将模块内容展开，例如：
    /**

     import {age} from './msg'
     console.log(age)

     =>

     const age = 10;
     console.log(age);


     */
    this.statements = entryModule.expandAllStatements();
    const {code} = this.generate();
    fs.writeFileSync(filename, code);
  }

  // 请求模块
  fetchModule(importee, importer) {
    let route;

    if (!importer) {
      route = importee
    } else {
      if (path.isAbsolute(importee)) {
        route = importee
      } else {
        route = path.resolve(path.dirname(importer), importee.replace(/\.js$/, '') + '.js');
      }
    }

    if (route) {
      const code = fs.readFileSync(route, "utf-8");
      const module = new Module({
        code,
        path: route,
        bundle: this
      })
      return module;
    }
  }

  generate() {
    const magicString = new MagicString.Bundle()
    this.statements.forEach(statement => {
      const source = statement._source.clone();

      // 如果是导出的话 直接删除
      if (statement.type === "ExportNamedDeclaration") {
        source.remove(statement.start, statement.declaration.start);
      }

      magicString.addSource({
        content: source,
        separator: "\n"
      })
    })
    return {code: magicString.toString()}
  }
}

module.exports = Bundle