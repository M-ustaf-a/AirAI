import React from "react";
import {
  Star as StarIcon,
  LocationOn as LocationOnIcon,
} from "@mui/icons-material";

const ListingCard = ({ listing }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
      <img
        src={listing.image}
        alt={listing.title}
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <div className="flex items-center mb-2">
          <StarIcon className="text-yellow-500" />
          <span className="ml-1 text-gray-700">{listing.rating}</span>
          <span className="ml-2 text-gray-500">
            ({listing.reviews} reviews)
          </span>
        </div>
        <h2 className="text-xl font-semibold mb-2">{listing.title}</h2>
        <div className="flex items-center mb-2">
          <LocationOnIcon className="text-gray-600" />
          <span className="ml-1 text-gray-600">{listing.location}</span>
        </div>
        <p className="text-gray-600 mb-4">{listing.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {listing.amenities.map((amenity, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm"
            >
              {amenity}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">${listing.price} / night</span>
          <button className=" bg-black text-white p-2 rounded-xl px-4">
            Book now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
