import React from "react";

function Filterlisting({ data }) {
  return (
    <div className="property-listing p-4">
      <h2 className="text-2xl font-semibold mb-4">Available Properties</h2>
      {data.length === 0 ? (
        <p className="text-gray-500">
          No properties match the selected filters.
        </p>
      ) : (
        <ul className="grid grid-cols-1 gap-4">
          {data.map((property, index) => (
            <li
              key={index}
              className="property-item bg-white p-4 rounded shadow"
            >
              <h3 className="text-lg font-semibold">{property.name}</h3>
              <p className="text-gray-600">Location: {property.location}</p>
              <p className="text-gray-600">Price: ${property.price}</p>
              <p className="text-gray-600">Bedrooms: {property.bedrooms}</p>
              <p className="text-gray-600">Bathrooms: {property.bathrooms}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Filterlisting;
