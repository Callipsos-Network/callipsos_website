import { useState } from 'react'

/**
 * useWaitlist Hook
 * Handles Airtable submission logic with duplicate detection
 */
export const useWaitlist = () => {
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState('idle') // idle, loading, success, error
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = async (e) => {
        e?.preventDefault()
        setStatus('loading')
        setErrorMessage('')

        const baseUrl = 'https://api.airtable.com/v0/appNykqKjejPIIDrI/tblJ5n4WIRvF3EhEl'
        const headers = {
            'Authorization': `Bearer ${import.meta.env.VITE_AIRTABLE_TOKEN}`,
            'Content-Type': 'application/json',
        }

        // First, check if email already exists
        const checkResponse = await fetch(
            `${baseUrl}?filterByFormula={Email}="${email}"`,
            { headers }
        ).catch(() => null)

        if (!checkResponse?.ok) {
            setStatus('error')
            setErrorMessage('Something went wrong. Please try again.')
            return
        }

        const existing = await checkResponse.json().catch(() => null)

        // If email already exists, treat as success (don't tell user it's a duplicate)
        if (existing?.records && existing.records.length > 0) {
            setStatus('success')
            setEmail('')
            return
        }

        // Email doesn't exist, add it
        const response = await fetch(baseUrl, {
            method: 'POST',
            headers,
            body: JSON.stringify({
                records: [
                    {
                        fields: {
                            Email: email,
                        },
                    },
                ],
            }),
        }).catch(() => null)

        if (!response?.ok) {
            setStatus('error')
            setErrorMessage('Something went wrong. Please try again.')
            return
        }

        setStatus('success')
        setEmail('')
    }

    return {
        email,
        setEmail,
        status,
        errorMessage,
        handleSubmit,
        isLoading: status === 'loading',
        isSuccess: status === 'success',
        isError: status === 'error',
    }
}

export default useWaitlist