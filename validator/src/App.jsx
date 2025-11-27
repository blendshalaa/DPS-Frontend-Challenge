import './App.css'
import AddressValidator from './components/AddressValidator';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-2">
            PLZ Validator
          </h1>
          <p className="text-lg text-gray-600">
            Verify German postal codes and localities instantly
          </p>
        </header>

        <main>
          <AddressValidator />
        </main>

        <footer className="mt-12 text-center text-gray-500 text-sm">
          <p>Powered by <a href="https://openplzapi.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">OpenPLZ API</a></p>
        </footer>
      </div>
    </div>
  )
}

export default App
