<template>
  <div>
    <h1>
        <!-- 各分区三连情况 -->
      <div id="bb734fa751d94d9bb5bcac77d9ef47c8" class="chart-container" style="width:900px; height:500px;"></div>
    </h1>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
    data(){
      return {}
    },
    methods: {},
    watch: {},
    created() {
    },
    mounted() {
       var chart_bb734fa751d94d9bb5bcac77d9ef47c8 = echarts.init(
            document.getElementById('bb734fa751d94d9bb5bcac77d9ef47c8'), 'white', {renderer: 'canvas'});
        var option_bb734fa751d94d9bb5bcac77d9ef47c8 = {
        "animation": true,
        "animationThreshold": 2000,
        "animationDuration": 1000,
        "animationEasing": "cubicOut",
        "animationDelay": 0,
        "animationDurationUpdate": 300,
        "animationEasingUpdate": "cubicOut",
        "animationDelayUpdate": 0,
        "color": [
            "#c23531",
            "#2f4554",
            "#61a0a8",
            "#d48265",
            "#749f83",
            "#ca8622",
            "#bda29a",
            "#6e7074",
            "#546570",
            "#c4ccd3",
            "#f05b72",
            "#ef5b9c",
            "#f47920",
            "#905a3d",
            "#fab27b",
            "#2a5caa",
            "#444693",
            "#726930",
            "#b2d235",
            "#6d8346",
            "#ac6767",
            "#1d953f",
            "#6950a1",
            "#918597"
        ],
        "series": [
            {
                "type": "bar",
                "name": "\u786c\u5e01",
                "legendHoverLink": true,
                "data": [
                    8.5,
                    8.9,
                    13.55,
                    6.7,
                    3.31,
                    6.67,
                    10.92,
                    1.57,
                    4.69,
                    5.45,
                    7.63,
                    0.69,
                    15.76
                ],
                "showBackground": false,
                "barMinHeight": 0,
                "barCategoryGap": "20%",
                "barGap": "30%",
                "large": false,
                "largeThreshold": 400,
                "seriesLayoutBy": "column",
                "datasetIndex": 0,
                "clip": true,
                "zlevel": 0,
                "z": 2,
                "label": {
                    "show": true,
                    "position": "top",
                    "margin": 8
                }
            },
            {
                "type": "bar",
                "name": "\u70b9\u8d5e",
                "legendHoverLink": true,
                "data": [
                    0.57,
                    3.17,
                    8.53,
                    0.77,
                    0.36,
                    2.08,
                    1.02,
                    7.7,
                    0.88,
                    2.18,
                    2.24,
                    6.05,
                    10.33
                ],
                "showBackground": false,
                "barMinHeight": 0,
                "barCategoryGap": "20%",
                "barGap": "30%",
                "large": false,
                "largeThreshold": 400,
                "seriesLayoutBy": "column",
                "datasetIndex": 0,
                "clip": true,
                "zlevel": 0,
                "z": 2,
                "label": {
                    "show": true,
                    "position": "top",
                    "margin": 8
                }
            },
            {
                "type": "bar",
                "name": "\u6536\u85cf",
                "legendHoverLink": true,
                "data": [
                    0.7,
                    0.7,
                    1.12,
                    0.21,
                    0.19,
                    0.46,
                    0.45,
                    2.0,
                    0.54,
                    0.26,
                    2.19,
                    4.43,
                    3.13
                ],
                "showBackground": false,
                "barMinHeight": 0,
                "barCategoryGap": "20%",
                "barGap": "30%",
                "large": false,
                "largeThreshold": 400,
                "seriesLayoutBy": "column",
                "datasetIndex": 0,
                "clip": true,
                "zlevel": 0,
                "z": 2,
                "label": {
                    "show": true,
                    "position": "top",
                    "margin": 8
                }
            }
        ],
        "legend": [
            {
                "data": [
                    "\u786c\u5e01",
                    "\u70b9\u8d5e",
                    "\u6536\u85cf"
                ],
                "selected": {
                    "\u786c\u5e01": true,
                    "\u70b9\u8d5e": true,
                    "\u6536\u85cf": true
                },
                "show": true,
                "padding": 5,
                "itemGap": 10,
                "itemWidth": 25,
                "itemHeight": 14
            }
        ],
        "tooltip": {
            "show": true,
            "trigger": "item",
            "triggerOn": "mousemove|click",
            "axisPointer": {
                "type": "line"
            },
            "showContent": true,
            "alwaysShowContent": false,
            "showDelay": 0,
            "hideDelay": 100,
            "textStyle": {
                "fontSize": 14
            },
            "borderWidth": 0,
            "padding": 5
        },
        "xAxis": [
            {
                "name": "\u5206\u533a",
                "show": true,
                "scale": false,
                "nameLocation": "end",
                "nameGap": 15,
                "gridIndex": 0,
                "axisLabel": {
                    "rotate": 45
                },
                "inverse": false,
                "offset": 0,
                "splitNumber": 5,
                "minInterval": 0,
                "splitLine": {
                    "show": false,
                    "lineStyle": {
                        "show": true,
                        "width": 1,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid"
                    }
                },
                "data": [
                    "\u52a8\u7269\u5708",
                    "\u52a8\u753b",
                    "\u539f\u521b",
                    "\u5f71\u89c6",
                    "\u6c7d\u8f66",
                    "\u6e38\u620f",
                    "\u751f\u6d3b",
                    "\u77e5\u8bc6",
                    "\u79d1\u6280",
                    "\u7f8e\u98df",
                    "\u821e\u8e48",
                    "\u8fd0\u52a8",
                    "\u9b3c\u755c"
                ]
            }
        ],
        "yAxis": [
            {
                "name": "\u6b21/\u767e\u4e07",
                "show": true,
                "scale": false,
                "nameLocation": "end",
                "nameGap": 15,
                "gridIndex": 0,
                "inverse": false,
                "offset": 0,
                "splitNumber": 5,
                "minInterval": 0,
                "splitLine": {
                    "show": false,
                    "lineStyle": {
                        "show": true,
                        "width": 1,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid"
                    }
                }
            }
        ],
        "title": [
            {
                "text": "\u5404\u5206\u533a\u4e09\u8fde\u60c5\u51b5",
                "padding": 5,
                "itemGap": 10
            }
        ]
};    
        chart_bb734fa751d94d9bb5bcac77d9ef47c8.setOption(option_bb734fa751d94d9bb5bcac77d9ef47c8);

    }
}
</script>

<style>

</style>