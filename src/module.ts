import {defineNuxtModule, addPlugin, createResolver, addComponent, addImports} from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'frog-modal',
    configKey: 'frog-modal'
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup () {
    const resolver = createResolver(import.meta.url)

    addComponent({
      name: 'FrogModal',
      export: 'FrogModal',
      filePath: resolver.resolve('runtime/components/FrogModal'),
    });

    addImports({
      name: 'useFrogModal',
      as: 'useFrogModal',
      from: resolver.resolve('runtime/components/useFrogModal'),
    })

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'))
  }
})
