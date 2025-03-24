export const customFetch = async (url: string, options: RequestInit) => {
    const accessToken: LocalStorage.getItem('access_token');
    const headers = options.headers as Record<string, string>;
}