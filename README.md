# Manage NKAP - Personal Finance App

A mobile application built with React Native using Expo that helps users manage their personal finances, track transactions, and plan their budgets.

## 📱 What is This Project?

**Manage NKAP** is a personal finance management application designed for both iOS and Android. It allows users to:

- **Sign up and log in** securely using email and password
- **Track transactions** - Record income and expenses with details
- **Analyze spending** - View insights and patterns in your spending habits
- **Manage categories** - Organize transactions by custom categories
- **Create financial plans** - Set budgets and financial goals
- **View transaction history** - Access a complete record of all transactions

## 🛠️ Technology Stack

### Core Framework

- **React Native** (0.79.5) - Build native mobile apps with JavaScript
- **Expo** (53.0.20) - Development platform for React Native apps
- **Expo Router** (5.1.4) - File-based routing for React Native

### Authentication & Backend

- **Supabase** - Backend as a Service for authentication and database
- **PowerSync** - Offline-first sync engine for real-time data synchronization

### Database & Storage

- **SQLite** - Local database for offline support
- **Async Storage** - Device storage for app data

### UI & Styling

- **NativeWind** (4.1.23) - Tailwind CSS for React Native
- **Tailwind CSS** - Utility-first CSS framework
- **React Native Reanimated** - Smooth animations and transitions
- **Moti** - Animation library

### UI Components

- **React Navigation** - Navigation between screens
- **Expo Blur** - Blur effects
- **React Native SVG** - SVG graphics support
- **Emoji Keyboard** - Emoji picker support

## 📂 Project Structure

```
manage-kap/
├── app/                          # Main app screens
│   ├── (tabs)/                  # Tab-based navigation
│   │   ├── index.tsx            # Home/Dashboard screen
│   │   ├── addtransaction.tsx   # Add new transaction
│   │   ├── analysis.tsx         # Spending analysis
│   │   ├── categories.tsx       # Manage categories
│   │   ├── plan.tsx             # Financial planning
│   │   └── _layout.tsx          # Tab navigation layout
│   ├── transactions/            # Transaction details
│   └── _layout.tsx              # Main app layout
├── components/                   # Reusable UI components
│   ├── Auth.tsx                 # Login/Sign up component
│   ├── Calculator.tsx           # Calculator component
│   ├── HistoryTransaction.tsx   # Transaction history display
│   └── ui/                      # UI sub-components
├── constants/                    # App constants
│   ├── data.ts                  # Static data
│   └── icons.ts                 # Icon definitions
├── helpers/                      # Utility functions
│   ├── theme.ts                 # Theme configuration
│   └── styleHelper.ts           # Styling helpers
├── interfaces/                   # TypeScript interfaces
├── powersync/                    # PowerSync setup
│   ├── AppSchema.ts             # Database schema
│   └── PowersyncProvider.tsx    # PowerSync provider
├── supabase/                     # Supabase configuration
│   ├── AppConfig.ts             # App configuration
│   └── SupabaseConnector.ts    # Supabase connector
└── utils/                        # Utility functions
    └── color-theme.ts           # Theme colors
```

## 🎯 Main Features

### 1. **Authentication**

- Email/password sign up and login
- Session management
- Secure password handling with Supabase

### 2. **Transaction Management**

- Add, view, and manage financial transactions
- Track income and expenses
- Record transaction dates and amounts

### 3. **Analytics & Insights**

- View spending patterns
- Analyze transaction by categories
- Financial reports and insights

### 4. **Categorization**

- Organize transactions by custom categories
- Manage and edit categories
- Category-based filtering

### 5. **Planning & Budgeting**

- Create financial plans
- Set budget goals
- Track progress

### 6. **History & Records**

- Complete transaction history
- Transaction details
- Search and filter capabilities

## 🚀 Getting Started

### Prerequisites

- Node.js and npm/yarn installed
- Expo CLI installed globally (`npm install -g expo-cli`)
- Android emulator or physical Android device
- Or Xcode for iOS development

### Installation

1. **Clone or download the project**

   ```bash
   cd manage-kap
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   - Create a `.env` file with your Supabase credentials
   - Add your Supabase URL and API key

4. **Start the development server**
   ```bash
   npm start
   ```

### Running on Different Platforms

- **Android**: `npm run android`
- **iOS**: `npm run ios`
- **Web**: `npm run web`

## 📝 Available Scripts

```bash
npm start          # Start Expo development server
npm run android    # Run on Android emulator/device
npm run ios        # Run on iOS simulator
npm run web        # Run on web browser
npm test           # Run tests with Jest
npm run lint       # Run ESLint to check code quality
```

## 🏗️ Architecture

The app follows a **modular architecture** with clear separation of concerns:

- **Screens** - UI components for each tab and page
- **Components** - Reusable UI elements
- **Services** - Business logic (Supabase, PowerSync)
- **Utilities** - Helper functions and constants
- **Interfaces** - TypeScript type definitions

## 🔐 Data Sync & Offline Support

The app uses **PowerSync** with **SQLite** to provide:

- Offline-first functionality
- Automatic data synchronization
- Real-time updates
- Data consistency between devices

## 🎨 Styling

The project uses **NativeWind** (Tailwind CSS for React Native) combined with custom themes for consistent, responsive design across all screens.

## 📦 Dependencies Highlights

- **@supabase/supabase-js** - Backend and authentication
- **@powersync/react-native** - Offline sync
- **expo-router** - File-based routing
- **react-native-reanimated** - Animations
- **nativewind** - Tailwind CSS styling

## 🐛 Testing

Run tests using Jest:

```bash
npm test
```

## 📱 Supported Platforms

- **Android** 6.0+
- **iOS** 13.0+
- **Web** (experimental)

## 💡 Future Enhancements

- [ ] Advanced reporting and charts
- [ ] Recurring transaction templates
- [ ] Multi-currency support
- [ ] Investment tracking
- [ ] Expense forecasting

## 📄 License

This project is created for personal finance management purposes.

## 🤝 Contributing

This is a personal project. For modifications or improvements, feel free to fork and customize as needed.

---

**Happy budgeting! 💰**
