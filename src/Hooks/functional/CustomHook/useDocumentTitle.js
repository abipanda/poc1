import { useEffect } from 'react'

function useDocumentTitle(count) {
    useEffect(() => {
        console.log('useEffect - Updating document title')
        document.title = `Clicked ${count} times`
    })
}

export default useDocumentTitle
