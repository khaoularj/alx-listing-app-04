export const API_URL = 'https://example.com/api';
export const DEFAULT_PLACEHOLDER_IMAGE = '/assets/placeholder.png';

import { PropertyProps } from "@/interfaces/index";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
    {
        id: 1,
        name: "Cozy Mountain Cabin",
        rating: 4.5,
        address: { city: "Denver", country: "USA" },
        description: "A cozy cabin with scenic mountain views.",
        category: ["WiFi", "Parking", "Kitchen", "Pool"],
        image: "/images/cabin.jpg",
        price: 200,
        reviews: [
            {
                name: "John Doe",
                avatar: "/images/john.jpg",
                rating: 5,
                comment: "Amazing place! Highly recommend.",
            },
            {
                name: "Jane Smith",
                avatar: "/images/jane.jpg",
                rating: 4,
                comment: "Great location but a bit pricey.",
            },
        ],

    },
];
