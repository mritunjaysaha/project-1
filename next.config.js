const path = require("path");
const withSass = require("@zeit/next-sass");
const withImages = require("next-images");

module.exports = withSass({
    cssModules: true,
});

module.exports = withImages({
    fileExtensions: ["jpg", "jpeg", "png", "gif"],
    webpack(config, options) {
        return config;
    },
});

module.exports = {
    /* Add Your Scss File Folder Path Here */

    module: {
        rules: [
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                type: "asset",
            },
        ],
    },

    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },
};
