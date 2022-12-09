const MagicString = require('magic-string');
const { parse } = require('acorn');
const {hasOwnProperty} = require("../lib/utils")
const analyse = require("../ast/analyse")

class Module {
  constructor({code, path, bundle}) {
    this.code = new MagicString(code, {filename: path});
    this.path = path;
    this.bundle = bundle;

    // 通过acorn 解析成为ast语法树
    this.ast = parse(code, {
      ecmaVersion: 8,
      sourceType: "module"
    })

    // 存放本地模块的导入信息
    this.imports = {};
    // 本模块的导出信息
    this.exports = {};
    // 存放本模块的定义变量的语句
    this.definitions = {};

    // 开始分析ast 语法树
    analyse(this.ast, this.code, this)
  }

  expandAllStatements() {
    const allStatement = []

    this.ast.body.map(statement => {

      // 导入的语句 默认全部过滤掉
      if (statement.type === "ImportDeclaration") return;

      allStatement.push(...this.expandStatement(statement));
    })

    return allStatement;
  }

  expandStatement(statement) {
    statement._included = true;
    const result = []
    result.push(statement);
    return result;
  }
}

module.exports = Module