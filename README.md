# German Address Validator

A modern, responsive web application built with React and Vite to validate German postal codes (PLZ) and localities using the [Open PLZ API](https://www.openplzapi.org/en/germany).

## 🚀 Features

- **Postal Code Validation**: Verify if a German postal code exists and find its corresponding city.
- **Locality Search**: Search for postal codes by city name.
- **Real-time Results**: Displays Federal State, District, and Municipality information.
- **Responsive Design**: Built with Tailwind CSS for a seamless mobile and desktop experience.

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/) (v19)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4)
- **API**: [Open PLZ API](https://www.openplzapi.org/)

## ⚙️ Installation & Setup

1.  **Clone the repository** (if applicable) or navigate to the project directory.

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Start the development server**:
    ```bash
    npm run dev
    ```

4.  **Open your browser**:
    Navigate to `http://localhost:5173` to view the application.

## 🏗️ How It Was Built

### 1. Project Initialization
The project was initialized using Vite with the React template:
```bash
npm create vite@latest validator -- --template react
```

### 2. Styling Configuration
We used the new **Tailwind CSS v4** with the Vite plugin for zero-configuration setup.
- Added `@tailwindcss/vite` to `vite.config.js`.
- Imported `tailwindcss` in `src/App.css`.

### 3. Component Architecture
The application logic is encapsulated in `src/components/AddressValidator.jsx`:
- **State Management**: Uses `useState` for form inputs (`postalCode`, `locality`) and API results.
- **API Integration**: Fetches data from `https://openplzapi.org/de/Localities`.
- **Error Handling**: Manages loading states and API errors gracefully.

### 4. API Integration Details
The app queries the `Localities` endpoint:
- **By Postal Code**: `?postalCode=10115`
- **By Name**: `?name=Berlin`

## 📂 Project Structure

```
validator/
├── src/
│   ├── components/
│   │   └── AddressValidator.jsx  # Main validation logic and UI
│   ├── App.jsx                   # Application layout
│   ├── App.css                   # Global styles & Tailwind import
│   └── main.jsx                  # Entry point
├── vite.config.js                # Vite & Tailwind configuration
└── package.json                  # Dependencies
```


