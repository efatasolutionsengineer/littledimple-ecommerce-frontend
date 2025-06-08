export const fetchWithAuth = async (url: string, options: RequestInit = {}) => {
    const headers = {
        'Content-Type': 'application/json',
        ...options.headers,
    };

    try {
        const response = await fetch(url, {
            ...options,
            credentials: 'include',
            headers,
        });

        if (response.status === 401) {
            window.location.href = '/login';
            throw new Error('Session expired');
        }

        return response;
    } catch (error) {
        throw error;
    }
}; 