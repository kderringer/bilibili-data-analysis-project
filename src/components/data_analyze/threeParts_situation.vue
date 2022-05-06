<template>
  <div>
      <!-- 弹幕、评论、转发情况 -->
    <div id="dac434d90aae424e81b4893ae38261bd" class="chart-container" style="width:900px; height:500px;"></div>

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
       var chart_dac434d90aae424e81b4893ae38261bd = echarts.init(
            document.getElementById('dac434d90aae424e81b4893ae38261bd'), 'white', {renderer: 'canvas'});
        var option_dac434d90aae424e81b4893ae38261bd = {
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
            "type": "line",
            "name": "\u5f39\u5e55",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "\u52a8\u7269\u5708",
                    1.06
                ],
                [
                    "\u52a8\u753b",
                    4.18
                ],
                [
                    "\u539f\u521b",
                    8.36
                ],
                [
                    "\u5f71\u89c6",
                    12.54
                ],
                [
                    "\u6c7d\u8f66",
                    0.93
                ],
                [
                    "\u6e38\u620f",
                    3.37
                ],
                [
                    "\u751f\u6d3b",
                    13.07
                ],
                [
                    "\u77e5\u8bc6",
                    3.12
                ],
                [
                    "\u79d1\u6280",
                    16.8
                ],
                [
                    "\u7f8e\u98df",
                    2.36
                ],
                [
                    "\u821e\u8e48",
                    1.58
                ],
                [
                    "\u8fd0\u52a8",
                    6.44
                ],
                [
                    "\u9b3c\u755c",
                    10.78
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
            
        },
        {
            "type": "line",
            "name": "\u8bc4\u8bba",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "\u52a8\u7269\u5708",
                    7.03
                ],
                [
                    "\u52a8\u753b",
                    6.97
                ],
                [
                    "\u539f\u521b",
                    11.23
                ],
                [
                    "\u5f71\u89c6",
                    2.05
                ],
                [
                    "\u6c7d\u8f66",
                    1.94
                ],
                [
                    "\u6e38\u620f",
                    4.58
                ],
                [
                    "\u751f\u6d3b",
                    4.54
                ],
                [
                    "\u77e5\u8bc6",
                    20.04
                ],
                [
                    "\u79d1\u6280",
                    5.42
                ],
                [
                    "\u7f8e\u98df",
                    2.65
                ],
                [
                    "\u821e\u8e48",
                    21.93
                ],
                [
                    "\u8fd0\u52a8",
                    44.35
                ],
                [
                    "\u9b3c\u755c",
                    31.35
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
            "z": 0
        },
        {
            "type": "line",
            "name": "\u8f6c\u53d1",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "\u52a8\u7269\u5708",
                    12.1
                ],
                [
                    "\u52a8\u753b",
                    25.96
                ],
                [
                    "\u539f\u521b",
                    32.0
                ],
                [
                    "\u5f71\u89c6",
                    11.11
                ],
                [
                    "\u6c7d\u8f66",
                    4.47
                ],
                [
                    "\u6e38\u620f",
                    13.94
                ],
                [
                    "\u751f\u6d3b",
                    13.35
                ],
                [
                    "\u77e5\u8bc6",
                    3.84
                ],
                [
                    "\u79d1\u6280",
                    14.39
                ],
                [
                    "\u7f8e\u98df",
                    11.36
                ],
                [
                    "\u821e\u8e48",
                    37.16
                ],
                [
                    "\u8fd0\u52a8",
                    3.73
                ],
                [
                    "\u9b3c\u755c",
                    80.94
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
            "z": 0
        }
    ],
    "legend": [
        {
            "data": [
                "\u5f39\u5e55",
                "\u8bc4\u8bba",
                "\u8f6c\u53d1"
            ],
            "selected": {
                "\u5f39\u5e55": true,
                "\u8bc4\u8bba": true,
                "\u8f6c\u53d1": true
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
            "name": "\u65f6\u95f4(\u65e5)",
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
            "name": "\u4eba\u6570 \u5355\u4f4d\uff1a\u5341\u4e07",
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
            "text": "\u5f39\u5e55\u3001\u8bc4\u8bba\u3001\u8f6c\u53d1\u60c5\u51b5",
            "padding": 5,
            "itemGap": 10
        }
    ]
};
        chart_dac434d90aae424e81b4893ae38261bd.setOption(option_dac434d90aae424e81b4893ae38261bd);

    }
}
</script>

<style>

</style>