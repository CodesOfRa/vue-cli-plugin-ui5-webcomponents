let ui5 = `\nVue.config.ignoredElements = [/^ui5-/];`;

module.exports = (api, opts, rootOptions) => {
    api.extendPackage({
        dependencies: {
            "@ui5/webcomponents": "^0.9.0"
        }
    });
    if (opts.addExample) {
        api.render('./template', {
            ...opts,
        });
    }
    api.onCreateComplete(() => {
        // inject to main.js
        const fs = require('fs');
        const ext = api.hasPlugin('typescript') ?
            'ts' :
            'js';
        const mainPath = api.resolve(`./src/main.${ext}`);
        // get content
        let contentMain = fs.readFileSync(mainPath, {
            encoding: 'utf-8'
        });
        const lines = contentMain
            .split(/\r?\n/g)
            .reverse();

        // inject import
        const lastImportIndex = lines.findIndex(line => line.match(/^import/));
        lines[lastImportIndex] += ui5;

        // modify app
        contentMain = lines
            .reverse()
            .join('\n');
        fs.writeFileSync(mainPath, contentMain, {
            encoding: 'utf-8'
        });
    });
}