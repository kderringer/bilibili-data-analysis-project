<template>
  <div>
    <!-- <h1>三连分布</h1> -->
    <div id="f63e9d499615434f8c0bd0a8add1cf58" class="chart-container" style="width:900px; height:500px;"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
    data(){
      return {

      }
    },
    methods: {},
    watch: {},
    created() {
    },
    mounted() {
       var chart_f63e9d499615434f8c0bd0a8add1cf58 = echarts.init(
            document.getElementById('f63e9d499615434f8c0bd0a8add1cf58'), 'white', {renderer: 'canvas'});
        var option_f63e9d499615434f8c0bd0a8add1cf58 = {
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
            "type": "radar",
            "name": "\u6295\u5e01\u6570",
            "data": [
                [
                    8497646,
                    8896773,
                    13547639,
                    6701010,
                    3310901,
                    6669434,
                    10923534,
                    1572710,
                    4688760,
                    5449557,
                    7629985,
                    686686,
                    15761941
                ]
            ],
            "label": {
                "show": false,
                "position": "top",
                "margin": 8
            },
            "itemStyle": {
                "normal": {
                    "color": "#40e0d0"
                }
            },
            "lineStyle": {
                "show": true,
                "width": 3,
                "opacity": 1,
                "curveness": 0,
                "type": "dotted"
            },
            "areaStyle": {
                "opacity": 0
            },
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        },
        {
            "type": "radar",
            "name": "\u6536\u85cf\u91cf",
            "data": [
                [
                    703342,
                    696837,
                    1123225,
                    205233,
                    193726,
                    457920,
                    454377,
                    2004261,
                    541547,
                    264676,
                    2192892,
                    4434581,
                    3134874
                ]
            ],
            "label": {
                "show": false,
                "position": "top",
                "margin": 8
            },
            "itemStyle": {
                "normal": {
                    "color": "#1e90ff"
                }
            },
            "lineStyle": {
                "show": true,
                "width": 3,
                "opacity": 1,
                "curveness": 0,
                "type": "dotted"
            },
            "areaStyle": {
                "opacity": 0
            },
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        },
        {
            "type": "radar",
            "name": "\u70b9\u8d5e\u6570",
            "data": [
                [
                    571103,
                    3165348,
                    8528723,
                    771131,
                    358823,
                    2082016,
                    1015434,
                    7699016,
                    878435,
                    2176876,
                    2240049,
                    6049757,
                    10329411
                ]
            ],
            "label": {
                "show": false,
                "position": "top",
                "margin": 8
            },
            "itemStyle": {
                "normal": {
                    "color": "#b8860b"
                }
            },
            "lineStyle": {
                "show": true,
                "width": 3,
                "opacity": 1,
                "curveness": 0,
                "type": "dotted"
            },
            "areaStyle": {
                "opacity": 0
            },
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        }
    ],
    "legend": [
        {
            "data": [
                "\u6295\u5e01\u6570",
                "\u6536\u85cf\u91cf",
                "\u70b9\u8d5e\u6570"
            ],
            "selected": {
                "\u6295\u5e01\u6570": true,
                "\u6536\u85cf\u91cf": true,
                "\u70b9\u8d5e\u6570": true
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
    "radar": {
        "indicator": [
            {
                "name": "\u52a8\u7269\u5708",
                "max": 16999999
            },
            {
                "name": "\u52a8\u753b",
                "max": 16999999
            },
            {
                "name": "\u539f\u521b",
                "max": 16999999
            },
            {
                "name": "\u5f71\u89c6",
                "max": 16999999
            },
            {
                "name": "\u6c7d\u8f66",
                "max": 16999999
            },
            {
                "name": "\u6e38\u620f",
                "max": 16999999
            },
            {
                "name": "\u751f\u6d3b",
                "max": 16999999
            },
            {
                "name": "\u77e5\u8bc6",
                "max": 16999999
            },
            {
                "name": "\u79d1\u6280",
                "max": 16999999
            },
            {
                "name": "\u7f8e\u98df",
                "max": 16999999
            },
            {
                "name": "\u821e\u8e48",
                "max": 16999999
            },
            {
                "name": "\u8fd0\u52a8",
                "max": 16999999
            },
            {
                "name": "\u9b3c\u755c",
                "max": 16999999
            }
        ],
        "name": {
            "textStyle": {}
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            }
        },
        "splitArea": {
            "show": true,
            "areaStyle": {
                "opacity": 0
            }
        },
        "axisLine": {
            "show": true,
            "onZero": true,
            "onZeroAxisIndex": 0
        }
    },
    "title": [
        {
            "text": "\u6295\u5e01\u3001\u6536\u85cf\u3001\u70b9\u8d5e\u5e73\u5747\u4eba\u6570\u5206\u5e03",
            "padding": 5,
            "itemGap": 10
        }
    ]
};
        chart_f63e9d499615434f8c0bd0a8add1cf58.setOption(option_f63e9d499615434f8c0bd0a8add1cf58);

    }
}
</script>

<style>

</style>