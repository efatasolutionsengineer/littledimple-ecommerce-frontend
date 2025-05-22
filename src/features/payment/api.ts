import { CheckoutData } from "../cart/types"

export const postPayment = async (data: CheckoutData) => {
    const response = await fetch('/api/transaction/submit', {
        method: 'POST',
        body: JSON.stringify(data)
    })

    if (!response.ok) {
        throw new Error('Failed to submit payment')
    }

    return response.json()
}

export const getPaymentDetail = async () => {
    const response = await fetch(`/api/cart/checkout`, {
        method: 'GET'
    })

    if (!response.ok) {
        throw new Error('Failed to get payment detail')
    }

    return response.json()
}