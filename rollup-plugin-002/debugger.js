import {rollup} from 'rollup';

import rollupConfig from "./rollup.config.js";
(async function() {
  const bundle = await rollup(rollupConfig);
  await bundle.generate(rollupConfig.output);
  await bundle.write(rollupConfig.output);
  await bundle.close();
})();