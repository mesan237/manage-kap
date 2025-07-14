import { column, Schema, Table } from '@powersync/react-native';
// OR: import { column, Schema, Table } from '@powersync/react-native';

const expenses = new Table(
  {
    // id column (text) is automatically included
    created_at: column.text,
    description: column.text,
    amount: column.integer,
    user_id: column.integer,
  },
  { indexes: {} }
);

const users = new Table(
  {
    // id column (text) is automatically included
    created_at: column.text,
    email: column.text,
    password: column.text,
  },
  { indexes: {} }
);

export const AppSchema = new Schema({
  expenses,
  users,
});

export type Database = (typeof AppSchema)['types'];
