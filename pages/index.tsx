import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Layout from "../components/layout/Layout";
import { PROPERTYLISTINGSAMPLE } from "../constants";
import { PropertyProps } from "../interfaces";
import Pill from "../components/Pill";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const filters = ["Top Villa", "Self Checkin", "Pet Friendly", "Free Parking"];

const Home: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="flex flex-col h-screen justify-center items-center text-4xl font-semibold">
        <h1 className="text-center mb-4">Airbnb Application Clone System</h1>
        <button className="border px-3 py-1 text-lg mt-3 bg-blue-500 text-white rounded-full">
          Get Started
        </button>
      </section>

      {/* Filter Section */}
      <section className="p-4 bg-gray-100">
        <h2 className="text-xl font-semibold mb-2">Filters</h2>
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <Pill key={filter} label={filter} onClick={function (): void {
              throw new Error("Function not implemented.");
            } } isSelected={false} />
          ))}
        </div>
      </section>

      {/* Listing Section */}
      <section className="p-4 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {PROPERTYLISTINGSAMPLE.map((property: PropertyProps) => (
          <div key={property.name} className="border rounded-lg overflow-hidden shadow-md">
            <img src={property.image} alt={property.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{property.name}</h3>
              <p className="text-sm text-gray-600">
                {property.address.city}, {property.address.country}
              </p>
              <p className="text-yellow-500">⭐ {property.rating}</p>
              <p className="font-bold text-lg">${property.price}</p>
            </div>
          </div>
        ))}
      </section>
    </Layout>
  );
};

export default Home;