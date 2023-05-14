import Chart from "chart.js/auto";
import { useEffect, useRef, useState } from "react";

function DolarChart({ data }) {
  const chartContainer = useRef(null);
  const [chart, setChart] = useState(null);

  useEffect(() => {
    if (chart) {
      chart.destroy();
    }

    if (chartContainer && chartContainer.current) {
      const ctx = chartContainer.current.getContext("2d");

      setChart(
        new Chart(ctx, {
          type: "line",
          title: "asd",
          data: {
            labels: data.labels,
            datasets: [
              {
                label: data.title,
                data: data.values,
                backgroundColor: "rgba(54, 162, 235, 0.8)",
              },
            ],
          },
          options: {
            scales: {
              x: {
                title: {
                  color: "red",
                  display: false,
                  text: "Evolucion",
                },
              },
              y: {
                title: {
                  color: "red",
                  display: true,
                  text: "Evolucion",
                },
                ticks: {
                  stepSize: 50,
                  // beginAtZero: true,
                },
              },
            },
          },
        })
      );
    }
  }, [data]);

  return <canvas ref={chartContainer} />;
}

export default DolarChart;
