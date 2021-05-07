import { createTables, insertIntoTables, dropTables } from './queryFunctions';

(async () => {
  await createTables();
  await insertIntoTables();
  // await dropTables();
})();
