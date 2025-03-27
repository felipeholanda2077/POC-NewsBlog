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
  elements,
  Filler,
  type ChartData,
  ChartOptions,
} from "chart.js";
import { borderWidth, position, transparentize } from "polished";
import styled from "styled-components";
import Heading from "../Typography/Heading";
import NoData from "../NoData/NoData";

// Registrar os módulos (obrigatório na v3+ do Chart.js)
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

const options: ChartOptions<'line'> = {
  maintainAspectRatio: true,
  elements: {
    line: {
      tension: 0,
    },
  },
  plugins: {
    legend: {
      display: true,
      position: "bottom", // tipo correto: "top" | "left" | "bottom" | "right" | "chartArea"
      align: "center",    // tipo correto: "start" | "center" | "end"
      labels: {
        usePointStyle: true,
      },
    },
  },
  scales: {
    x: {
      display: true,
      grid: {}, // gridLines virou grid
    },
    cashflow: {
      type: "linear",
      display: false,
      position: "left",
    },
  },
};

export interface ChartProps {
    data: ChartData<"line">;
    title: string
}

export default function Chart({ data, title }: ChartProps ) {
  return (
    <ChartWrapper style={{ width: '100%' }} >
      <div style={{ marginBottom: 16 }}>
        <Heading level={3}>
            {title}
        </Heading>
      </div>
      {
        data 
        ? <Line height={139} width={600} data={data} options={options} />
        : <NoData height={139} />
      }
    </ChartWrapper>
  );
}

const ChartWrapper = styled.div`
    text-align: center;
    border: 1px solid ${transparentize(0.9, '#274060')};
    padding: 20px;
`
