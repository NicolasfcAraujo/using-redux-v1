import axios from "axios"
import { useEffect, useState } from "react"

const useAxios = ({url, method, body=null, headers=null}) => {
    const [response, setResponse] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchData = () => {
        axios[method](url, JSON.parse(headers), JSON.parse(body)).then((response) => {
            setResponse(response.data)
        }).catch((error) => {
            setError(error)
        }).finally(() => {
            setLoading(false)
            axios.get(url)
        })
    }

    useEffect(() => {
        fetchData()
    }, [ method,url,body,headers ])

    return { response, loading, error }
}

export default useAxios