import React from "react";
import listings from "../data/listings";
import ListingCard from "./ListingCard";

const ListingPage = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    </div>
  );
};

export default ListingPage;
