
var entries = {
    index : './src/assets/js/index',
    page1 : './src/assets/js/page1',
    jquery : 'jquery',
    base : './src/assets/js/base',
    echarts : './src/assets/js/echarts'
};
var pages = [
    {
        path : './src/index.html'
    },{
        path : './src/pages/page1.html'
    },{
        path : './src/pages/echarts.html'
    }
];

module.exports = {
    entries : entries,
    pages : pages,
    defaultConfig : {
        names : ['base','jquery'],
        filename : 'assets/js/[name].js',
        minChunks : 2
    },
    globalJs : {
        echarts : 'echarts'
    },
    htmlWebpackPluginConfig : {
        hash : true,
        inject : true,
        chunksSortMode : 'manual',
        chunks : ['jquery','base'],
        minify : false,
        showErrors : true
    },
    host : '192.168.1.219',  //localhost
    port : 8081
};