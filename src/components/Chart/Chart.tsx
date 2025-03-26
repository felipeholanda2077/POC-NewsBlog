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

const options = {
  maintainAspectRatio: true,
  elements: {
    line: {
        tension: 0
    }
  },
  plugins: {
    legend: {
      display: true,
      position: 'bottom',
      align: 'center',
      labels: {
        usePointStyle: true,
      },
    },
  },
  scales: {
    xAxes: [
        {
            display: true,
            gridLines: {

            }

        }
    ],
    cashflow: {
      type: 'linear',
      display: false,
      position: 'left',
    }
  },
  
};

export interface ChartProps {
    data: Chart.ChartData
    title: string
}

export default function Chart({ data, title }: ChartProps ) {
  return (
    <ChartWrapper style={{ width: 640 }} >
      <div style={{ marginBottom: 16 }}>
        <Heading level={3}>
            {title}
        </Heading>
      </div>
      {
        data 
        ? <Line type="line" height={139} width={600} data={data} options={options} />
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
