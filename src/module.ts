import {defineNuxtModule, createResolver, addComponent, addImports} from '@nuxt/kit'
import {fileURLToPath} from "node:url";

// Module options TypeScript interface definition
export interface ModuleOptions {
  componentName: string;
  composableName: string;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'frog-modal',
    configKey: 'frog-modal'
  },
  defaults: {
    componentName: 'FrogModal',
    composableName: 'useFrogModal',
  },
  setup (options, nuxt) {
    const resolver = createResolver(import.meta.url)

    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url));
    nuxt.options.build.transpile.push(runtimeDir)

    addComponent({
      name: options.componentName,
      export: options.componentName,
      filePath: resolver.resolve('runtime/components/FrogModal'),
    });

    addImports({
      name: options.composableName,
      as: options.composableName,
      from: resolver.resolve('runtime/composables/useFrogModal'),
    });

    nuxt.hook('imports:dirs', (dirs) => {
      dirs.push(resolver.resolve(runtimeDir), 'composables');
      dirs.push(resolver.resolve(runtimeDir), 'components');
    });
  }
})
