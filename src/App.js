import React, { useState } from "react";
import Filterlisting from "./components/Filterlisting";

import Filter from "./components\\Filter";
import Data from "./Data";

function App() {
  const [filters, setFilters] = useState({
    location: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
  });

  const handleFilterChange = (filterName, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

  const filterList = Data.filter(property => {
    const location = property.location.includes(filters.location);
    const price =
      filters.price === "" || property.price <= parseFloat(filters.price);
    const bedrooms =
      filters.bedrooms === "" ||
      property.bedrooms === parseInt(filters.bedrooms);
    const bathrooms =
      filters.bathrooms === "" ||
      property.bathrooms === parseInt(filters.bathrooms);

    return location && price && bedrooms && bathrooms;
  });

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold mb-4">Rent a Property</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="filters p-4 bg-gray-200 rounded-md">
            <Filter onFilterChange={handleFilterChange} />
          </div>
          <div className="property-listing">
            <Filterlisting data={filterList} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
