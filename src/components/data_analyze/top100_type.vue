<template>
  <div>
    <!-- <h2>top100类比占比</h2> -->
  <div id="453b8e7a233b48b5a821b9ccb49ff974" 
  class="chart-container" 
  style="width:1000px;height:500px;"></div>
  </div>
</template>
 
<script>
  // import echarts from 'echarts'
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
        var chart_453b8e7a233b48b5a821b9ccb49ff974 = echarts.init(
            document.getElementById('453b8e7a233b48b5a821b9ccb49ff974'), 
            'white', 
            {renderer: 'canvas'});
        var option_453b8e7a233b48b5a821b9ccb49ff974 = {
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
                    "name": "\u751f\u6d3b",
                    "value": 29
                },
                {
                    "name": "\u6e38\u620f",
                    "value": 17
                },
                {
                    "name": "\u52a8\u753b",
                    "value": 10
                },
                {
                    "name": "\u7f8e\u98df",
                    "value": 9
                },
                {
                    "name": "\u77e5\u8bc6",
                    "value": 7
                },
                {
                    "name": "\u8d44\u8baf",
                    "value": 5
                },
                {
                    "name": "\u97f3\u4e50",
                    "value": 4
                },
                {
                    "name": "\u8fd0\u52a8",
                    "value": 4
                },
                {
                    "name": "\u52a8\u7269\u5708",
                    "value": 3
                },
                {
                    "name": "\u5f71\u89c6",
                    "value": 3
                },
                {
                    "name": "\u821e\u8e48",
                    "value": 3
                },
                {
                    "name": "\u79d1\u6280",
                    "value": 2
                },
                {
                    "name": "\u9b3c\u755c",
                    "value": 2
                },
                {
                    "name": "\u539f\u521b",
                    "value": 1
                },
                {
                    "name": "\u5a31\u4e50",
                    "value": 1
                }
            ],
            "radius": [
                "30%",
                "75%"
            ],
            "center": [
                "40%",
                "40%"
            ],
            "roseType": "radius",
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
                "\u751f\u6d3b",
                "\u6e38\u620f",
                "\u52a8\u753b",
                "\u7f8e\u98df",
                "\u77e5\u8bc6",
                "\u8d44\u8baf",
                "\u97f3\u4e50",
                "\u8fd0\u52a8",
                "\u52a8\u7269\u5708",
                "\u5f71\u89c6",
                "\u821e\u8e48",
                "\u79d1\u6280",
                "\u9b3c\u755c",
                "\u539f\u521b",
                "\u5a31\u4e50"
            ],
            "selected": {},
            "type": "scroll",
            "show": true,
            "left": "80%",
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
            "text": "top100\u7c7b\u522b\u5360\u6bd4",
            "padding": 5,
            "itemGap": 10
        }
    ]
};
        chart_453b8e7a233b48b5a821b9ccb49ff974.setOption(option_453b8e7a233b48b5a821b9ccb49ff974);
    },
  }
</script>
<style scoped>
  h2{
    text-align: center;
    padding: 30px;
    font-size: 18px;
  }
  #chart_example{
    width: 200px;
    height: 500px;
    border: 1px solid red;
    margin: 0 auto;
  }
</style>
 