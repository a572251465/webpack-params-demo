import rollupConfig from "./rollup.config.js";
import {rollup} from 'rollup';

(async function () {
  const bundle = await rollup(rollupConfig);
  await bundle.generate(rollupConfig.output);
  await bundle.write(rollupConfig.output);

  await bundle.close();
})()