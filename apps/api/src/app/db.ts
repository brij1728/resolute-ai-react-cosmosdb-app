import {
  COSMOS_CONTAINER_ID,
  COSMOS_DATABASE_ID,
  COSMOS_ENDPOINT,
  COSMOS_KEY,
} from './constants';

import { CosmosClient } from '@azure/cosmos';

// Establish a new instance of the CosmosClient to be used throughout this demo
export const cosmosDbClient = new CosmosClient({
  endpoint: COSMOS_ENDPOINT,
  key: COSMOS_KEY,
  userAgentSuffix: 'CosmosDBJavascriptQuickstart',
});

/**
 * Create the database if it does not exist
 */
const createDatabase = async () => {
  const { database } = await cosmosDbClient.databases.createIfNotExists({
    id: COSMOS_DATABASE_ID,
  });
  console.log(`Created database:\n${database.id}\n`);
};

const createContainer = async () => {
  const { container } = await cosmosDbClient
    .database(COSMOS_DATABASE_ID)
    .containers.createIfNotExists({ id: COSMOS_CONTAINER_ID });
  console.log(`Created container:\n${container.id}\n`);
};

export const initCosmosDb = async () => {
  await createDatabase();
  await createContainer();
};
