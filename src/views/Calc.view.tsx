import { useEffect } from "react"
import { useLocation, useParams } from "react-router-dom"

function useQuery () {
    return new URLSearchParams(useLocation().search)
}

export default function CalView () {
    const params = useParams<{ a: string, b: string }>()
    const query = useQuery()

    useEffect(() => {
        console.log(query.get('a'))
    }, [])

    return <div>
        <h1>Usuários - {(params.a || '') + (params.b || '')} </h1>
    </div>
}