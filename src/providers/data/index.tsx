import { GraphQLClient } from "@refinedev/nestjs-query";


const API_URL = 'http://api.crm.refine.dev'
export const client = new GraphQLClient(API_URL, {
    fetch(url: string, options: RequestInit) => {
        try {
        } catch (error) {
           return Promise.reject(error as Error)
        }
        }
    }
});


