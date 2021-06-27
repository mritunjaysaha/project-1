const path = require("path");
const withSass = require("@zeit/next-sass");
const withImages = require("next-images");
const composePlugins = require("next-compose-plugins");
const mdxEnhanced = require("next-mdx-enhanced");

// module.exports = withSass({
//     cssModules: true,
// });

// module.exports = withImages({
//     fileExtensions: ["jpg", "jpeg", "png", "gif"],
//     webpack(config, options) {
//         return config;
//     },
// });

const nextConfig = {
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

module.exports = composePlugins([
    withSass({
        cssModules: true,
    }),
    withImages({
        fileExtensions: ["jpg", "jpeg", "png", "gif"],
        webpack(config, options) {
            return config;
        },
    }),
    nextConfig,
    mdxEnhanced({
        layoutPath: "./pages/blogs",
    }),
]);
