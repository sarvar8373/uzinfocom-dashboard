import { ArcElement, Chart } from "chart.js";
import React, { useEffect, useRef } from "react";
import { Doughnut } from "react-chartjs-2";

const Charts = ({ data, options, darkMode }) => {
  const chartRef = useRef(null);
  Chart.register(ArcElement);
  useEffect(() => {
    if (chartRef.current && chartRef.current.chartInstance) {
      const chartInstance = chartRef.current.chartInstance;
      const ctx = chartInstance.ctx;

      if (ctx) {
        // Draw text labels in the center
        ctx.save();
        ctx.font =
          options.plugins.doughnutlabel.labels[0].font.size + "px Arial";
        ctx.fillStyle = options.plugins.doughnutlabel.labels[0].color;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(
          options.plugins.doughnutlabel.labels[0].text,
          chartInstance.width / 2,
          chartInstance.height / 2
        );
        ctx.restore();
      }
    }
  }, [chartRef, options]);

  return (
    <div style={{ width: "170px", height: "170px", margin: "30px 20px" }}>
      <Doughnut
        ref={chartRef}
        data={data}
        options={options}
        onElementsClick={(elems, event) => {
          // Callback to handle chart element clicks
        }}
      />
      <div className="doughnut text-center">
        {" "}
        <h3
          className={`card-title my-0 ${darkMode ? "" : "text-light"}`}
          style={{ fontSize: "22px" }}
        >
          144 855
        </h3>
        <span>+2.45%</span>{" "}
      </div>
    </div>
  );
};

export default Charts;
