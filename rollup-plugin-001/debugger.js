import {rollup} from 'rollup'

import rollupOptions from './rollup.config.js';

(async function () {
  // 打包阶段
  const bundle = await rollup(rollupOptions);
  // 生成阶段
  await bundle.generate(rollupOptions.output);
  // 写入阶段
  await bundle.write(rollupOptions.output);
  // 关闭阶段
  await bundle.close();
})()