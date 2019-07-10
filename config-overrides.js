const path = require("path");
const { override, fixBabelImports,addWebpackAlias } = require("customize-cra");
module.export =  override(
    fixBabelImports('import',{
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    }),
    addWebpackAlias({
        ['@']:path.resolve(__dirname,"./src"),
        ['components']:path.join(__dirname,"./src/components"),
        "@common":path.join(__dirname,"./src/common"),
        "@views":path.join(__dirname,"./src/views"),
        "@static":path.join(__dirname,"./src/static")
    })
);