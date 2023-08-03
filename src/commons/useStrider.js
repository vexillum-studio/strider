import { useState,useCallback } from 'react'
import axios from 'axios'
import { getToken } from '../context/userContext'
import { useProgress } from '../context/progressContext'

import packageJson from '../../package.json'

const apiKeyHeader = process.env.REACT_APP_API_KEY_HEADER
const apiKey = process.env.REACT_APP_API_KEY
const apiUrl = packageJson.proxy

const fetchMethod = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    DELETE: 'delete'
}

const useNocturnal = () => {

    const [loading, setLoading] = useState(false)
    const { setProgression } = useProgress()

    const query = async (route, options) => {
        const fetchOptions = {
            baseURL: apiUrl,
            url: route,
            method: options?.method ?? fetchMethod.GET
        }
        if (options?.body) {
            fetchOptions.data = options.body
        }
        fetchOptions.headers = {
            'Access-Control-Allow-Origin': '*'
        }
        if (options?.headers) {
            fetchOptions.headers = {
                ...fetchOptions.headers,
                ...options.headers
            }
        }
        const authToken = getToken()
        if (authToken) {
            fetchOptions.headers = {
                ...fetchOptions.headers,
                'Authorization': 'Bearer ' + authToken
            }
        }
        if(options?.withApiKey) {
            fetchOptions.headers = {
                ...fetchOptions.headers,
                [apiKeyHeader]: apiKey
            }
        }
        setLoading(true)
        const intervalId = setInterval(() => {
            setProgression(previous => previous + 5)
        }, 125)
        try {
            const rawResponse = await axios(fetchOptions)
            let body = rawResponse.data
            if (typeof body !== 'object' && !Array.isArray(body)) {
                body = { message: body }
            }
            return body
        }
        catch (error) {
            const response = error?.response?.data
            throw new Error(response?.message ?? response?.error ?? 'Unknown error')
        }
        finally {
            setLoading(false)
            clearInterval(intervalId)
            setProgression(100)
        }
    }

    return [useCallback(query, [setProgression]), loading]
}

export { useNocturnal, fetchMethod }