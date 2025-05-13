import React, { useState } from 'react';
import { BarLoader } from "react-spinners";

const zipcodes = [
  "10001", "90210", "30301", "60601", "94105", "73301", "33101", "02108", "15201", "48201"
  // Add more ZIP codes or fetch dynamically if needed
];

const ZipcodeSearch: React.FC = () => {
  const [zipcode, setZipcode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = () => {
    if (zipcode.trim()) {
      console.log(`Searching for events near ZIP code: ${zipcode}`);
      setIsLoading(true)
      // TODO: Replace with actual fetch logic
    } else {
      alert("Please enter a valid ZIP code.");
    }
  };

  return (isLoading ? <BarLoader/> :
    <div className="flex flex-col items-center justify-center p-8 space-y-4">
      <input
        list="zipcode-options"
        className="w-96 p-4 border border-gray-300 rounded-2xl shadow-sm text-lg"
        type="text"
        placeholder="Enter ZIP code"
        value={zipcode}
        onChange={(e) => setZipcode(e.target.value)}
      />
      <datalist id="zipcode-options">
        {zipcodes.map((zip) => (
          <option key={zip} value={zip} />
        ))}
      </datalist>

      <button
        className="bg-blue-600 text-white px-6 py-3 rounded-2xl shadow-md hover:bg-blue-700 transition"
        onClick={handleSearch}
      >
        Find Events Near Me
      </button>
    </div>
  );
};

export default ZipcodeSearch;
