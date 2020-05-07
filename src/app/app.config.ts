export class AppConfig {
    apiEndpoint: string;
    title: string;
    mode: number;
}

export const CONFIG1: AppConfig = {
    apiEndpoint: 'http://91.121.148.187:3002/users',
    title: 'main api',
    mode: 1
}

export const CONFIG2: AppConfig = {
    apiEndpoint: 'http://my-api2.com',
    title: 'fallback api',
    mode: 2
}