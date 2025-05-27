import { fetchWithAuth } from "../auth/utils";
import { CheckWarrantyType, WarrantySubmission } from "./types";

export const checkWarranty = async (data: CheckWarrantyType) => {
    const response = await fetchWithAuth('/api/warranty', {
        method: 'POST',
        body: JSON.stringify(data),
    })

    if (!response.ok) {
        throw new Error('Failed to check warranty')
    }

    return response.json()
}

export const submitWarranty = async (data: WarrantySubmission) => {
    const response = await fetchWithAuth('/api/warranty/manual', {
        method: 'POST',
        body: JSON.stringify(data),
    })

    if (!response.ok) {
        throw new Error('Failed to submit warranty')
    }

    return response.json()
}

export const getWarrantySubmissions = async () => {
    const response = await fetchWithAuth('/api/warranty/manual', {
        method: 'GET',
    })

    if (!response.ok) {
        throw new Error('Failed to get warranty submissions')
    }

    return response.json()
}