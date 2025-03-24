import GraphQLDataProvider, { GraphQLClient } from "@refinedev/nestjs-query";
import { createClient } from 'graphql-ws'

export const API_BASE_URL = 'http://api.crm.refine.dev';
export const API_URL = 'http://api.crm.refine.dev';
export const WSS_URL = 'wss://api.crm.refine.dev/graphql';

export const client = new GraphQLClient(API_URL, {
    fetch(url: string, options: RequestInit) => {
        try {
          return fetchWrapper(url, options);
        } catch (error) {
           return Promise.reject(error as Error)
        }
    }
    })

export const wsClient = typeof window !== undefined 
? createClient({
    url: WSS_URL,
    connectionParams: () => {
        const accessToken - localStorage.getItem('access_token');
    }
    return {
        headers: {
            Authorization: `Bearer ${accessToken}`;
        }
    }
}): undefined 

export const DataProvider = GraphQLDataProvider(client);

  
