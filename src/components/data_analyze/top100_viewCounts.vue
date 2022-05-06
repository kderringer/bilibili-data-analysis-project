<template>
  <div>
      <!-- top100播放量的情况 -->
    <div id="6ed509c578de43029f0918125a11c1f8" class="chart-container" style="width:900px; height:500px;"></div>

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
      var chart_6ed509c578de43029f0918125a11c1f8 = echarts.init(
            document.getElementById('6ed509c578de43029f0918125a11c1f8'), 'white', {renderer: 'canvas'});
        var option_6ed509c578de43029f0918125a11c1f8 = {
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
            "name": "\u64ad\u653e\u91cf",
            "legendHoverLink": true,
            "data": [
                112010728,
                95255977,
                149218566,
                110709042,
                69706582,
                80455532,
                131613371,
                106975242,
                86381886,
                78542105,
                169255454,
                115512628,
                263645154
            ],
            "showBackground": false,
            "barMinHeight": 0,
            "barCategoryGap": "60%",
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
                "normal": {
                    "color": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{                offset: 0,                color: 'rgba(0, 244, 255, 1)'            }, {                offset: 1,                color: 'rgba(0, 77, 167, 1)'            }], false),
                    "barBorderRadius": [
                        30,
                        30,
                        30,
                        30
                    ],
                    "shadowColor": "rgb(0, 160, 221)"
                }
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
                "\u64ad\u653e\u91cf"
            ],
            "selected": {
                "\u64ad\u653e\u91cf": true
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
            "text": "top100\u64ad\u653e\u91cf\u60c5\u51b5",
            "padding": 5,
            "itemGap": 10
        }
    ]
};
        chart_6ed509c578de43029f0918125a11c1f8.setOption(option_6ed509c578de43029f0918125a11c1f8);

    }
}
</script>

<style>

</style>