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
  const adjustedMax = misoptions?.scales?.y?.max
    ? misoptions.scales.y.max + 500
    : misoptions?.scales?.y?.max;

  var misoptions = {
    scales: {
      y: {
        min: 100,
        max: adjustedMax,
      },
      x: {
        ticks: { color: "rgb(255, 99, 132)" },
      },
    },
  };

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
    ],
  };

  return <Line data={midata} options={misoptions} />;
}
