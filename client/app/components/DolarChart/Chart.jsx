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

export default function Chart({ data }) {
  var midata = {
    labels: data.labels,
    datasets: [
      {
        label: data.title,
        data: data.values,
        tension: 0.5,
        fill: true,
        borderColor: "rgba(1, 86, 1, 0.582)",
        backgroundColor: "rgba(99, 255, 112, 0.5)",
        pointRadius: 5,
        pointBorderColor: "rgb(185, 249, 175)",
        pointBackgroundColor: "rgb(3, 147, 37)",
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
        min: 100,
        max: 500,
      },
      x: {
        ticks: { color: "rgb(255, 99, 132)" },
      },
    },
  };
  return <Line data={midata} options={misoptions} />;
}
