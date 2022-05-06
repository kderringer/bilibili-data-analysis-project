<template>
  <div>
    <h1>
        <!-- 转发量情况 -->
       <div id="1bee1e5702ca4465a8cb3be99b0f2338" class="chart-container" style="width:900px; height:500px;"></div>
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
       var chart_1bee1e5702ca4465a8cb3be99b0f2338 = echarts.init(
            document.getElementById('1bee1e5702ca4465a8cb3be99b0f2338'), 'purple-passion', {renderer: 'canvas'});
        var option_1bee1e5702ca4465a8cb3be99b0f2338 = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "color": [],
    "series": [
        {
            "type": "bar",
            "name": "\u6536\u85cf\u91cf",
            "legendHoverLink": true,
            "data": [
                70.3342,
                69.6837,
                112.3225,
                20.5233,
                19.3726,
                45.792,
                45.4377,
                200.4261,
                54.1547,
                26.4676,
                219.2892,
                443.4581,
                313.4874
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
            },
            "itemStyle": {
                "color": 'green',  //颜色  支持回调函数  参数 arg
            }
        },
        {
            "type": "line",
            "name": "\u5206\u4eab\u6570",
            "connectNulls": false,
            "yAxisIndex": 1,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "\u52a8\u7269\u5708",
                    120.9822
                ],
                [
                    "\u52a8\u753b",
                    259.5631
                ],
                [
                    "\u539f\u521b",
                    320.0393
                ],
                [
                    "\u5f71\u89c6",
                    111.0811
                ],
                [
                    "\u6c7d\u8f66",
                    44.6766
                ],
                [
                    "\u6e38\u620f",
                    139.4164
                ],
                [
                    "\u751f\u6d3b",
                    133.4983
                ],
                [
                    "\u77e5\u8bc6",
                    38.3883
                ],
                [
                    "\u79d1\u6280",
                    143.9037
                ],
                [
                    "\u7f8e\u98df",
                    113.5612
                ],
                [
                    "\u821e\u8e48",
                    371.5862
                ],
                [
                    "\u8fd0\u52a8",
                    37.347
                ],
                [
                    "\u9b3c\u755c",
                    809.3799
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": false,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0,
            "itemStyle": {
                "color": 'red',
            }
        },
        {
            "type": "line",
            "name": "\u5f39\u5e55\u6570",
            "connectNulls": false,
            "yAxisIndex": 1,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "\u52a8\u7269\u5708",
                    10.6018
                ],
                [
                    "\u52a8\u753b",
                    41.7997
                ],
                [
                    "\u539f\u521b",
                    83.5947
                ],
                [
                    "\u5f71\u89c6",
                    125.3859
                ],
                [
                    "\u6c7d\u8f66",
                    9.3238
                ],
                [
                    "\u6e38\u620f",
                    33.7344
                ],
                [
                    "\u751f\u6d3b",
                    130.6739
                ],
                [
                    "\u77e5\u8bc6",
                    31.1528
                ],
                [
                    "\u79d1\u6280",
                    168.0146
                ],
                [
                    "\u7f8e\u98df",
                    23.6378
                ],
                [
                    "\u821e\u8e48",
                    15.8383
                ],
                [
                    "\u8fd0\u52a8",
                    64.3831
                ],
                [
                    "\u9b3c\u755c",
                    107.7571
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": false,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0,
            "itemStyle": {
                "color": 'black',
            }
        }
    ],
    "legend": [
        {
            "data": [
                "\u6536\u85cf\u91cf",
                "\u5206\u4eab\u6570",
                "\u5f39\u5e55\u6570"
            ],
            "selected": {
                "\u6536\u85cf\u91cf": true,
                "\u5206\u4eab\u6570": true,
                "\u5f39\u5e55\u6570": true
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
        "trigger": "axis",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "cross"
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
            "type": "value",
            "name": "\u6536\u85cf\u91cf \u5355\u4f4d\uff1a\u4e07",
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 0,
            "axisLabel": {
                "show": true,
                "position": "top",
                "margin": 8,
                "formatter": "{value}\u4e07\u4eba\u6b21"
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "min": 0,
            "max": 500,
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
        },
        {
            "type": "value",
            "name": "\u8f6c\u53d1\u4e0e\u5f39\u5e55\u91cf \u5355\u4f4d\uff1a\u4e07",
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 0,
            "axisLabel": {
                "show": true,
                "position": "top",
                "margin": 8,
                "formatter": "{value}\u4e07\u4eba\u6b21"
            },
            "inverse": false,
            "position": "right",
            "offset": 0,
            "splitNumber": 5,
            "min": 0,
            "max": 900,
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
            "text": "\u5404\u5206\u533a\u8bc4\u8bba\u3001\u5f39\u5e55\u3001\u8f6c\u53d1\u91cf\u60c5\u51b5",
            "padding": 5,
            "itemGap": 10
        }
    ],
    "grid": [
        {
            "show": false,
            "zlevel": 0,
            "z": 2,
            "containLabel": false,
            "backgroundColor": "transparent",
            "borderColor": "#ccc",
            "borderWidth": 1
        }
    ]
};
        chart_1bee1e5702ca4465a8cb3be99b0f2338.setOption(option_1bee1e5702ca4465a8cb3be99b0f2338);

    }
}
</script>

<style>

</style>