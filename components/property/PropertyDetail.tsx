import { PropertyProps } from "@/interfaces/index";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div>
      {/* Property Title */}
      <h1 className="text-4xl font-bold">{property.name}</h1>

      {/* Address & Rating */}
      <div className="flex items-center space-x-2 mt-2">
        <span className="text-yellow-500">{Number(property.rating).toFixed(1)} ★</span>
        <span>{property.address.city}, {property.address.country}</span>
      </div>

      {/* Property Image */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        <img
          src={property.image}
          alt={property.name}
          className="col-span-2 w-full h-96 object-cover rounded-lg"
        />
      </div>

      {/* Description Section */}
      <div className="mt-4">
        <h2 className="text-2xl font-semibold">Description</h2>
        <p>{property.description}</p>
      </div>

      {/* Amenities Section */}
      {property.category && property.category.length > 0 && (
        <div className="mt-4">
          <h2 className="text-2xl font-semibold">What this place offers</h2>
          <ul className="flex flex-wrap space-x-4">
            {property.category.map((amenity, index) => (
              <li key={index} className="bg-gray-200 p-2 rounded-md">
                {amenity}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PropertyDetail;
