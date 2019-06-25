let ui5 = '\nVue.config.ignoredElements = [/^ui5-/];'

module.exports = (api, options, rootOptions) => {
  api.extendPackage({
    dependencies: {
      '@ui5/webcomponents': '^0.13.0'
    }
  })
  if (options.addExample) {
    api.render('./template', {
      ...options
    })
  }
  api.onCreateComplete(() => {
    // inject to main.js
    const fs = require('fs')
    const ext = api.hasPlugin('typescript') ? 'ts' : 'js'
    const mainPath = api.resolve(`./src/main.${ext}`)
    let contentMain = fs.readFileSync(mainPath, { encoding: 'utf-8' })
    const lines = contentMain.split(/\r?\n/g).reverse()

    const lastImportIndex = lines.findIndex(line => line.match(/^import/))
    lines[lastImportIndex] += ui5

    contentMain = lines.reverse().join('\n')
    fs.writeFileSync(mainPath, contentMain, { encoding: 'utf-8' })
    api.exitLog('Successfully installed UI5 Web Components', 'done')
  })
}
