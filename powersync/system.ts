import 'react-native';

if (__DEV__) {
  require('react-native').unstable_enableLogBox();
}

import { PowerSyncDatabase } from '@powersync/react-native';
if (!PowerSyncDatabase) {
  console.error('PowerSyncDatabase native module is not loaded');
} else {
  console.log('PowerSyncDatabase is ready');
}
import { OPSqliteOpenFactory } from '@powersync/op-sqlite'; // Add this import
import { AppSchema } from './AppSchema';
import { Connector } from './Connector';

// Create the factory
const opSqlite = new OPSqliteOpenFactory({
  dbFilename: 'powersync.db',
});

export const powersync = new PowerSyncDatabase({
  // For other options see,
  schema: AppSchema,
  // Override the default database
  database: opSqlite,
});

export const setupPowerSync = async () => {
  // Uses the backend connector that will be created in the next section
  const connector = new Connector();
  powersync.connect(connector);
};
