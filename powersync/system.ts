import '@azure/core-asynciterator-polyfill';

import {
  AbstractPowerSyncDatabase,
  PowerSyncDatabase as PowerSyncDatabaseNative,
} from '@powersync/react-native';
import { Kysely, wrapPowerSyncWithKysely } from '@powersync/kysely-driver';

import { SupabaseConnector } from '../supabase/SupabaseConnector';
import { AppSchema, Database } from './AppSchema';
import React, { ReactNode, useContext, useEffect, useState } from 'react';
export class System {
  supabaseConnector: SupabaseConnector;
  powersync: AbstractPowerSyncDatabase;
  db: Kysely<Database>;
  isInitialized = false;

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
    try {
      await this.powersync.init();
      await this.powersync.connect(this.supabaseConnector);
      this.isInitialized = true;
    } catch (error) {
      console.error('System initialization failed:', error);
      // Handle error appropriately
    }
  }
}

export const SystemContext = React.createContext<System | null>(null);

export const useSystem = () => {
  const context = useContext(SystemContext);
  if (!context) throw new Error('useSystem must be used within SystemProvider');
  return context;
};

export const system = new System();
// export const SystemContext = React.createContext(system);
// export const useSystem = () => React.useContext(SystemContext);
