var echarts = require('echarts/lib/echarts');

require('./ganttSeries');
require('./ganttView');


echarts.registerVisual(
    echarts.util.curry(
        require('echarts/lib/visual/dataColor'), 'gantt'
    )
);