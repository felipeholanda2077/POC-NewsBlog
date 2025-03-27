import { useEffect } from "react"
import { useParams } from "react-router-dom"
import usePageTitle from "../core/hooks/usePageTitle"

export default function UserView () {
    usePageTitle('Usuário')
    const params = useParams()
    
    useEffect(() => {
        console.log(params)
    })
    
    return <div>
        <h1>Usuário</h1>
    </div>
}