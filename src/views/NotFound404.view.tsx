import usePageTitle from "../components/hooks/usePageTitle"

export default function NotFound404 () {
    usePageTitle('404')
    return <div>
        <h1>Não encontrado - 404</h1>
    </div>
}