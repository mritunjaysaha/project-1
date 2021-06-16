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
                test: "/.(png|jpe?g)$/i",
                use: [
                    {
                        loader: "file-loader",
                    },
                ],
            },
        ],
    },
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },
};
