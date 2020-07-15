data = [{
    name: 'balance',
    //số tiền kiểu number
    data: [10, 50, 100, 20, 40, 80, 110, 60],
    color: '#ff0000'
}, {
    name: 'lai',
    data: [5, 7, 10, 8, 16, 19, 25, 22],
    color: '#555'
}]

//time kiểu string
time = ['15/7/2020', '16/7/2020', '17/7/2020', '18/7/2020', '19/7/2020', '20/7/2020', '21/7/2020', '22/7/2020']

//tên biểu đồ
title = 'biểu đồ profile'
subtitle = 'lịch sử giao dịch của thịnh'
tentrucY = 'số tiền giao dịch'

function chart(data, time, title, subtitle, tentrucY) {
    Highcharts.chart('container', {

        title: {
            text: title
        },

        subtitle: {
            text: subtitle
        },

        yAxis: {
            title: {
                text: tentrucY
            }
        },

        xAxis: {
            categories: time,
        },

        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 2010,
            }
        },

        series: data,

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }

    });
}

chart(data, time, title, subtitle, tentrucY)