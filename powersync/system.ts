import '@azure/core-asynciterator-polyfill';

import {
  AbstractPowerSyncDatabase,
  PowerSyncDatabase as PowerSyncDatabaseNative,
} from '@powersync/react-native';
import { Kysely, wrapPowerSyncWithKysely } from '@powersync/kysely-driver';

import { SupabaseConnector } from '../supabase/SupabaseConnector';
import { AppSchema, Database } from './AppSchema';
import React from 'react';
export class System {
  supabaseConnector: SupabaseConnector;
  powersync: AbstractPowerSyncDatabase;
  db: Kysely<Database>;

  constructor() {
    this.supabaseConnector = new SupabaseConnector(this);

    this.powersync = new PowerSyncDatabaseNative({
      schema: AppSchema,
      database: {
        dbFilename: 'sqlite.db',
      },
    });
    this.db = wrapPowerSyncWithKysely<Database>(this.powersync);
  }

  async init() {
    await this.powersync.init();
    await this.powersync.connect(this.supabaseConnector);
  }
}

export const system = new System();
export const SystemContext = React.createContext(system);
export const useSystem = () => React.useContext(SystemContext);
