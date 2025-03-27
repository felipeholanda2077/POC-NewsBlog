import { useEffect } from 'react';

export default function usePageTitle (title: string) {
    const BASE_TITLE = 'FELIPE ESTUDOS'
    useEffect(() => {
        document.title = `${BASE_TITLE} - ${title}`
        return () => {
            document.title = 'React App'
        }

}, [])
}