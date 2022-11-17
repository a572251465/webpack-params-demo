const parser = require("@babel/parser")
const types = require("@babel/types")
const traverse = require("@babel/traverse")
const generator = require("@babel/generator")

const str = `
function test() {
  const a = 10;
  const test1 = () => {
    console.log(this)
    console.log(a)
  }
  test1()
}
`

const ast = parser.parse(str)

/**
 * @author lihh
 * @description 通过path 来寻找path经过的过程是否有this定义
 * @param path 节点path
 * @returns {*[]}
 */
const getThisPaths = (path) => {
  const thisPaths = []
  path.traverse({
    ThisExpression(path) {
      thisPaths.push(path)
    }
  })

  return thisPaths
}

const transform = (path) => {
  const thisPaths = getThisPaths(path)
  if (thisPaths.length === 0) return;

  const thisEnv = path.findParent(parent => (parent.isFunction() && !parent.isArrowFunctionExpression()) || parent.isProgram())
  let thisBindings = '_this';
  if (!thisEnv.scope.hasBinding(thisBindings)) {
    thisEnv.scope.push({
      id: types.identifier(thisBindings),
      init: types.thisExpression()
    })
  }

  thisPaths.forEach(thisPath => {
    thisPath.replaceWith(types.identifier(thisBindings))
  })
}

traverse.default(ast, {
  ArrowFunctionExpression(path) {
    const {node} = path
    transform(path)
    node.type = "FunctionExpression"
  }
})

const res = generator.default(ast)
console.log(res.code)
