import usePageTitle from "../core/hooks/usePageTitle"
import notFound from '../assets/not_found.svg'
import Button from "../components/Button/Button"
import styled from "styled-components"

export default function NotFound404 () {
    usePageTitle('404')
    return <NotFound404Wrapper>
        <span>
            Oops!
        </span>
        <h1>Não encontramos esta página</h1>
        <img src={notFound} alt="Página não encontrada" />
        <Button variant="primary" label="Ir para a home"/>
    </NotFound404Wrapper>
}

const NotFound404Wrapper = styled.div`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 32px;

    span {
        font-size: 72px;
    }

    h1 {
        font-size: 18px;
        font-weight: 400;
        color: #274060;
    }
`