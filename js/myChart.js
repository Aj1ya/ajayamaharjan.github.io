// var ctx = document.getElementById('myChart').getContext('2d');
// var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });
"use strict";

let myChart = document.getElementById('myChart').getContext('2d');
let myChart2 = document.getElementById('myChart2').getContext('2d');
let myChart3 = document.getElementById('myChart3').getContext('2d');
// //global options
Chart.defaults.font.family = 'Arial';
Chart.defaults.font.size = 10;

let massPopChart = new Chart(myChart, {
    type: 'polarArea', //types of charts bar, donut, radar, polarArea etc
    data: {
        labels: ['UI/UX', 'Wireframing', 'Prototyping', 'Logo Design'],
        datasets: [{
            label: 'Designing Skills',
            data: [50, 80, 70, 75],
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(153, 102, 255, 0.6)'
            ],
            borderWidth: 1,
            borderColor: '#777',
            hoverBorderWidth: 3,
            hoverBorderColor: '#000'
        }]

    },
    options: {}
});


let massPopChart2 = new Chart(myChart2, {
    type: 'polarArea', //types of charts bar, donut, radar, polarArea etc
    data: {
        labels: ['Web-Development', 'Front-end Development', 'React-Native', 'MySQL Server', 'Back-end Development'],
        datasets: [{
            label: 'Development Skills',
            data: [75, 70, 40, 70, 45],
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(153, 206, 86, 0.6)',
                'rgba(153, 102, 255, 0.6)'
            ],
            borderWidth: 1,
            borderColor: '#777',
            hoverBorderWidth: 2,
            hoverBorderColor: '#000'
        }]

    },
    options: {}
});

let massPopChart3 = new Chart(myChart3, {
    type: 'bar', //types of charts bar, donut, radar, polarArea etc
    data: {
        labels: ['Adobe XD', 'Visual Studio Code', 'Visual Studio', 'SQL Server management studio', 'PhotoShop', 'Bootstrap', 'React Js'],
        datasets: [{
            label: 'Tools',
            data: [60, 70, 55, 70, 65, 75, 30],
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(153, 206, 86, 0.6)',
                'rgba(122, 111, 86, 0.6)',
                'rgba(255, 134, 144, 0.6)',
                'rgba(153, 102, 255, 0.6)'
            ],
            borderWidth: 1,
            borderColor: '#777',
            hoverBorderWidth: 2,
            hoverBorderColor: '#000'
        }]

    },
    options: {}
});