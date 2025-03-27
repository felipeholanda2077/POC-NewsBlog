import Chart from "../components/Chart/Chart";

const FAKE_DATA = {
  labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
  datasets: [
    {
      label: "Receitas",
      data: [500, 400, 600, 100, 800, 20],
      fill: true,
      backgroundColor: "#0099FF",
      borderColor: "#0099FF",
      borderWidth: 0.5,
      yAxisID: "cashflow",
      //position: "left",
    },
    {
      label: "Despesas",
      data: [100, 200, 250, 500, 1000, 600],
      fill: true,
      backgroundColor: "#274060",
      borderColor: "#274060",
      borderWidth: 0.5,
      yAxisID: "cashflow",
    },
  ],
};

export default function UseMetrics() {
  return <Chart 
  title="Média de performance nos ultimos 12 meses" 
  data={FAKE_DATA} 
  />
}
