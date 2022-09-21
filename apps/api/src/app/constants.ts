import * as dotenv from 'dotenv';
dotenv.config();

export const COSMOS_KEY = process.env.NX_COSMOS_KEY;
export const COSMOS_ENDPOINT =
    process.env.NX_COSMOS_ENDPOINT;
export const COSMOS_CONTAINER_ID =
    process.env.NX_COSMOS_CONTAINER_ID;
export const COSMOS_DATABASE_ID =
    process.env.NX_COSMOS_DATABASE_ID;
