# webpack 简单配置

- mode `多种设置模式方式`
    - 配置文件中添加属性`mode`
    - 通过package.json 的命令行中添加`--mode`
    - 通过插件`cross-env NODE_ENV=development` 来进行设置
- DefinePlugin
  - 从编译的层面 将指定的进行替换