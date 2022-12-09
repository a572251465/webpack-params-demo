function analyse(ast, code, module) {
  // 1. 第一次循环 找到导入以及导出的变量
  ast.body.forEach(statement => {

    // 给每个statement(语句)上 定义this  以及源代码
    Object.defineProperties(statement, {
      _module: {value: module},
      _source: {value: code.snip(statement.start, statement.end)},
      // 此节点上定义的变量
      _defines: {value: {}},
      // 此节点读取了哪些变量
      _dependsOn: {value: {}}
    })

    // import {age} from './msg'
    if (statement.type === "ImportDeclaration") {
      // 表示导入来自哪个文件
      const source = statement.source.value;

      // 分析别名
      statement.specifiers.forEach((specifier) => {
        // 导入的变量名
        let importName = specifier.imported.name;
        // 本地的变量名
        let localName = specifier.local.name;
        module.imports[localName] = { source, importName }
      })
    } else if (statement.type === "ExportNamedDeclaration") {
      const declaration = statement.declaration;
      if (declaration && declaration.type === 'VariableDeclaration') {
        const declarations = declaration.declarations;
        declarations.forEach(variableDeclarator => {
            const localName = variableDeclarator.id.name;//name
            const exportName = localName;
            module.exports[exportName] = { localName };
        });
      }
    }
  })
}

module.exports = analyse