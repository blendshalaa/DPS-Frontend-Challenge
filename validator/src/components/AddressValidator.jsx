import { useState } from 'react';

export default function AddressValidator() {
    const [postalCode, setPostalCode] = useState('');
    const [locality, setLocality] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [hasSearched, setHasSearched] = useState(false);

    const handleSearch = async (e) => {
        e.preventDefault();

        if (!postalCode && !locality) {
            setError('Please enter a postal code or locality.');
            return;
        }

        setLoading(true);
        setError(null);
        setResults([]);
        setHasSearched(true);

        try {
            const params = new URLSearchParams();
            if (postalCode) params.append('postalCode', postalCode);
            if (locality) params.append('name', locality);

            const response = await fetch(`https://openplzapi.org/de/Localities?${params.toString()}`);

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const data = await response.json();
            setResults(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">German Address Validator</h2>

            <form onSubmit={handleSearch} className="space-y-4 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1">
                            Postal Code (PLZ)
                        </label>
                        <input
                            type="text"
                            id="postalCode"
                            value={postalCode}
                            onChange={(e) => setPostalCode(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                            placeholder="e.g. 10115"
                        />
                    </div>

                    <div>
                        <label htmlFor="locality" className="block text-sm font-medium text-gray-700 mb-1">
                            Locality (City)
                        </label>
                        <input
                            type="text"
                            id="locality"
                            value={locality}
                            onChange={(e) => setLocality(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                            placeholder="e.g. Berlin"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {loading ? 'Validating...' : 'Validate Address'}
                </button>
            </form>

            {error && (
                <div className="p-4 mb-6 bg-red-50 text-red-700 rounded-lg border border-red-200">
                    {error}
                </div>
            )}

            {hasSearched && !loading && !error && (
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                        Results ({results.length})
                    </h3>

                    {results.length === 0 ? (
                        <p className="text-gray-500 italic">No results found.</p>
                    ) : (
                        <div className="grid gap-4 max-h-96 overflow-y-auto pr-2">
                            {results.map((item, index) => (
                                <div
                                    key={`${item.postalCode}-${item.name}-${index}`}
                                    className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <p className="font-bold text-lg text-gray-900">
                                                {item.postalCode} {item.name}
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                {item.federalState?.name}
                                            </p>
                                        </div>
                                        <span className="px-2 py-1 bg-gray-100 text-xs text-gray-600 rounded">
                                            {item.district?.name}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
