

export const customFetch = async (url: string, options: RequestInit) => {
    const accessToken = window.localStorage.getItem('access_token');
    const headers = options.headers as Record<string, string>;

    return await fetch(url, {
        headers: {
            ...headers,
            Authorization: headers?.Authorization || `Bearer ${accessToken}`
        }
    })
}