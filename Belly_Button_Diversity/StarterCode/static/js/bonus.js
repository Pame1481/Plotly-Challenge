
// var gaugeDiv = document.getElementById("gauge-chart");

// var traceA = {
//   type: "pie",
//   showlegend: false,
//   hole: 0.4,
//   rotation: 90,
//   values: [100 / 5, 100 / 5, 100 / 5, 100 / 5, 100 / 5, 100],
//   text: ["Very Low", "Low", "Average", "Good", "Excellent", ""],
//   direction: "clockwise",
//   textinfo: "text",
//   textposition: "inside",
//   marker: {
//     colors: ["rgba(255, 0, 0, 0.6)", "rgba(255, 165, 0, 0.6)", "rgba(255, 255, 0, 0.6)", "rgba(144, 238, 144, 0.6)", "rgba(154, 205, 50, 0.6)", "white"]
//   },
//   labels: ["0-10", "10-50", "50-200", "200-500", "500-2000", ""],
//   hoverinfo: "label"
// };

// var degrees = 115, radius = .6;
// var radians = degrees * Math.PI / 180;
// var x = -1 * radius * Math.cos(radians);
// var y = radius * Math.sin(radians);

// var layout = {
//   shapes:[{
//       type: 'line',
//       x0: 0,
//       y0: 0,
//       x1: x,
//       y1: 0.5,
//       line: {
//         color: 'black',
//         width: 8
//       }
//     }],
//   title: 'Number of Printers Sold in a Week',
//   xaxis: {visible: false, range: [-1, 1]},
//   yaxis: {visible: false, range: [-1, 1]}
// };

// var data = [traceA];

// Plotly.plot(gaugeDiv, data, layout, {staticPlot: true});
