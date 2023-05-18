import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

var beneficios = [0, 56, 20, 36, 80, 40, 30, -20, 25, 30, 12, 60];
var meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

export default function DolarChart({ data }) {
  var midata = {
    labels: data.labels,
    datasets: [
      {
        label: data.title,
        data: data.values,
        tension: 0.5,
        fill: true,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        pointRadius: 5,
        pointBorderColor: "rgba(255, 99, 132)",
        pointBackgroundColor: "rgba(255, 99, 132)",
      },
      // {
      //   label: "Otra línea",
      //   data: [20, 25, 60, 65, 45, 10, 0, 25, 35, 7, 20, 25],
      // },
    ],
  };

  var misoptions = {
    scales: {
      y: {
        min: 0,
      },
      x: {
        ticks: { color: "rgb(255, 99, 132)" },
      },
    },
  };
  return <Line data={midata} options={misoptions} />;
}

// import Chart from "chart.js/auto";
// import { useEffect, useRef, useState } from "react";

// function DolarChart({ data }) {
//   const chartContainer = useRef(null);
//   const [chart, setChart] = useState(null);
//   console.log(data);

//   useEffect(() => {
//     if (chart) {
//       chart.destroy();
//     }

//     if (chartContainer && chartContainer.current) {
//       const ctx = chartContainer.current.getContext("2d");

//       setChart(
//         new Chart(ctx, {
//           type: "line",
//           title: "asd",
//           data: {
//             labels: data.labels,
//             datasets: [
//               {
//                 label: data.title,
//                 data: data.values,
//                 backgroundColor: "rgba(54, 162, 235, 0.8)",
//               },
//             ],
//           },
//           options: {
//             scales: {
//               x: {
//                 title: {
//                   color: "red",
//                   display: false,
//                   text: "Evolucion",
//                 },
//               },
//               y: {
//                 title: {
//                   color: "red",
//                   display: true,
//                   text: "Evolucion",
//                 },
//                 ticks: {
//                   stepSize: 50,
//                   // beginAtZero: true,
//                 },
//               },
//             },
//           },
//         })
//       );
//     }
//   }, [data, chart]);

//   return <canvas ref={chartContainer} />;
// }

// export default DolarChart;
