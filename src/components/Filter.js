import React, { useState } from "react";

function Filter({ onFilterChange }) {
  const [filters, setFilters] = useState({
    location: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
  });

  return (
    <div className="bg-gray-200 p-4 rounded-md">
      <h2 className="text-lg font-semibold mb-2">Filters</h2>
      <label className="block mb-2 font-medium">Location:</label>
      <input
        type="text"
        value={filters.location}
        onChange={e => onFilterChange("location", e.target.value)}
        className="w-full border rounded-md px-3 py-2 mb-2"
      />

      <label className="block mb-2 font-medium">Max Price:</label>
      <input
        type="number"
        value={filters.price}
        onChange={e => onFilterChange("price", e.target.value)}
        className="w-full border rounded-md px-3 py-2 mb-2"
      />

      <label className="block mb-2 font-medium">Bedrooms:</label>
      <input
        type="number"
        value={filters.bedrooms}
        onChange={e => onFilterChange("bedrooms", e.target.value)}
        className="w-full border rounded-md px-3 py-2 mb-2"
      />

      <label className="block mb-2 font-medium">Bathrooms:</label>
      <input
        type="number"
        value={filters.bathrooms}
        onChange={e => onFilterChange("bathrooms", e.target.value)}
        className="w-full border rounded-md px-3 py-2 mb-2"
      />
    </div>
  );
}

export default Filter;
