import { column, Schema, Table } from '@powersync/react-native';

const transactions = new Table(
  {
    // id column (text) is automatically included
    user_id: column.text,
    account_id: column.text,
    subcategory_id: column.text,
    amount: column.text,
    transaction_date: column.text,
    description: column.text,
    type: column.text,
    payment_method: column.text,
    created_at: column.text,
    updated_at: column.text,
  },
  { indexes: {} }
);

const users = new Table(
  {
    // id column (text) is automatically included
    email: column.text,
    password_hash: column.text,
    created_at: column.text,
    updated_at: column.text,
  },
  { indexes: {} }
);

const categories = new Table(
  {
    // id column (text) is automatically included
    user_id: column.text,
    name: column.text,
    type: column.text,
    created_at: column.text,
    updated_at: column.text,
    icon: column.text,
    bg_color: column.text,
  },
  { indexes: {} }
);

const subcategories = new Table(
  {
    // id column (text) is automatically included
    category_id: column.text,
    name: column.text,
    expense_type: column.text,
    created_at: column.text,
    updated_at: column.text,
  },
  { indexes: {} }
);

const accounts = new Table(
  {
    // id column (text) is automatically included
    user_id: column.text,
    name: column.text,
    type: column.text,
    initial_balance: column.text,
    currency: column.text,
    created_at: column.text,
    updated_at: column.text,
  },
  { indexes: {} }
);

export const AppSchema = new Schema({
  transactions,
  users,
  categories,
  subcategories,
  accounts,
});

export type Database = (typeof AppSchema)['types'];
export type CategoryRecord = Database['categories'];
