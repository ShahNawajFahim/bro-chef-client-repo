import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Bro Chef`;
    }, [title])
}

export default useTitle;