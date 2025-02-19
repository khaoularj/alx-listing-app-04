import { NextApiRequest, NextApiResponse } from "next";
import { PROPERTYLISTINGSAMPLE } from "@/constants/index";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;

    // Find the property by ID
    const property = PROPERTYLISTINGSAMPLE.find((p) => p.name === id);

    if (!property) {
        return res.status(404).json({ error: "Property not found" });
    }

    return res.status(200).json(property);
}
