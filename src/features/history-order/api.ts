import { fetchWithAuth } from "../auth/utils";

export const getOrderHistory = async () => {
    try {
        const url = new URL(`/api/transaction/history`, process.env.NEXT_PUBLIC_API_URL);
        const response = await fetchWithAuth(url.toString(), {
            method: 'GET',
        });
        if (!response.ok) {
            throw new Error(`${response.status}`);
        }
        const data = await response.json();

        if (data.data.length === 0) {
            throw new Error(`${response.status}`);
        }
        return data;
    } catch (error) {
        if (error instanceof Error && error.message === '404') {
            throw new Error('No order history found');
        }
        if (error instanceof Error) {
            throw new Error(`Failed to fetch order history: ${error.message}`);
        }
        throw new Error('Failed to fetch order history');
    }
};