import styled from "styled-components";
import ValueDescriptor from "../components/ValueDescriptor/ValueDescript";

export default function UserEarnings () {
    return <UserEarningsWrapper>
        <ValueDescriptor description={"Ganhos no mês"} value={560322.32} color={"primary"} isCurrency />
        <ValueDescriptor description={"Ganhos na semana"} value={560322.32} color={"primary"} isCurrency />
        <ValueDescriptor description={"Ganhos de sempre"} value={560322.32} color={"default"} isCurrency />
        <ValueDescriptor description={"Total de palavras"} value={2_345_347} color={"default"} />
    </UserEarningsWrapper>
}

const UserEarningsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
` 