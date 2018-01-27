var completeDimensions = require('echarts/lib/data/helper/completeDimensions');
var echarts = require('echarts/lib/echarts');

echarts.extendSeriesModel({

    type: 'series.gantt',

    visualColorAccessPath: 'textStyle.normal.color',

    // optionUpdated: function () {
    //     var option = this.option;
    //     option.gridSize = Math.max(Math.floor(option.gridSize), 4);
    // },

    // getInitialData: function (option, ecModel) {
    //     var dimensions = completeDimensions(['value'], option.data);
    //     var list = new echarts.List(dimensions, this);
    //     list.initData(option.data);
    //     return list;
    // },

   
});