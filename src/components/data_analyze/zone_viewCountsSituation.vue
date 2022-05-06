<template>
  <div>
    <h1>
        <!-- 各分区播放量情况 -->
      <div id="511e2df581df413191c2ae3cbf58b547" class="chart-container" style="width:900px; height:500px;"></div>
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
       var chart_511e2df581df413191c2ae3cbf58b547 = echarts.init(
            document.getElementById('511e2df581df413191c2ae3cbf58b547'), 'white', {renderer: 'canvas'});
        var option_511e2df581df413191c2ae3cbf58b547 = {
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
            "type": "pie",
            "clockwise": true,
            "data": [
                {
                    "name": "\u52a8\u7269\u5708",
                    "value": 1.12
                },
                {
                    "name": "\u52a8\u753b",
                    "value": 0.95
                },
                {
                    "name": "\u539f\u521b",
                    "value": 1.49
                },
                {
                    "name": "\u5f71\u89c6",
                    "value": 1.11
                },
                {
                    "name": "\u6c7d\u8f66",
                    "value": 0.7
                },
                {
                    "name": "\u6e38\u620f",
                    "value": 0.8
                },
                {
                    "name": "\u751f\u6d3b",
                    "value": 1.32
                },
                {
                    "name": "\u77e5\u8bc6",
                    "value": 1.07
                },
                {
                    "name": "\u79d1\u6280",
                    "value": 0.86
                },
                {
                    "name": "\u7f8e\u98df",
                    "value": 0.79
                },
                {
                    "name": "\u821e\u8e48",
                    "value": 1.69
                },
                {
                    "name": "\u8fd0\u52a8",
                    "value": 1.16
                },
                {
                    "name": "\u9b3c\u755c",
                    "value": 2.64
                }
            ],
            "radius": [
                "40%",
                "75%"
            ],
            "center": [
                "50%",
                "50%"
            ],
            "label": {
                "show": true,
                "position": "top",
                "margin": 8,
                "formatter": "{b}: {c}"
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
            ],
            "selected": {},
            "show": true,
            "left": "2%",
            "top": "15%",
            "orient": "vertical",
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
    "title": [
        {
            "text": "\u5404\u5206\u533a\u64ad\u653e\u91cf\u60c5\u51b5  \u5355\u4f4d\uff1a\u4ebf\u6b21",
            "padding": 5,
            "itemGap": 10
        }
    ]
};
        chart_511e2df581df413191c2ae3cbf58b547.setOption(option_511e2df581df413191c2ae3cbf58b547);

    }
}
</script>

<style>

</style>