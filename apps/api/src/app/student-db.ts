import { CosmosClient } from '@azure/cosmos';
import {
    COSMOS_CONTAINER_ID,
    COSMOS_DATABASE_ID,
    COSMOS_ENDPOINT,
    COSMOS_KEY,
} from './constants';

// Establish a new instance of the CosmosClient to be used throughout this demo
export const client = new CosmosClient({
    endpoint: COSMOS_ENDPOINT,
    key: COSMOS_KEY,
    userAgentSuffix: 'CosmosDBJavascriptQuickstart',
});

/**
 * Create the database if it does not exist
 */
const createDatabase = async () => {
    const { database } = await client.databases.createIfNotExists({
        id: COSMOS_DATABASE_ID,
    });
    console.log(`Created database:\n${database.id}\n`);
};

const createContainer = async () => {
    const { container } = await client
        .database(COSMOS_DATABASE_ID)
        .containers.createIfNotExists({ id: COSMOS_CONTAINER_ID });
    console.log(`Created container:\n${container.id}\n`);
};

(async () => {
    await createDatabase();
    await createContainer();
})();


export const queryContainer = async () => {
    console.log(`Querying container:\n${COSMOS_CONTAINER_ID}`)

    // query to return all children in a family
    // Including the partition key value of country in the WHERE filter results in a more efficient query
    const querySpec = {
        query: 'SELECT VALUE r.children FROM root r WHERE r.partitionKey = @country',
        parameters: [
            {
                name: '@country',
                value: 'USA'
            }
        ]
    }

    const { resources: results } = await client
        .database(COSMOS_DATABASE_ID)
        .container(COSMOS_CONTAINER_ID)
        .items.query(querySpec)
        .fetchAll()

    return results;
}