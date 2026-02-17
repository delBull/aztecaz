import { prisma } from "@repo/database";
import { z } from "zod";

const LeadSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(1, "Phone is required"), // Basic check, can be improved
    message: z.string().optional(),
    propertyId: z.string().min(1, "Property ID is required"),
});

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    try {
        const validatedData = LeadSchema.parse(req.body);
        const { name, email, phone, message, propertyId } = validatedData;

        // Determine default organization for now since Leads are linked to Properties but let's assume property belongs to an org.
        // For now we just create the lead.
        // Ensure property exists
        const property = await prisma.property.findUnique({
            where: { id: propertyId }
        });

        if (!property) {
            return res.status(404).json({ message: "Property not found" });
        }

        const lead = await prisma.lead.create({
            data: {
                name,
                email,
                phone,
                message: message || "",
                propertyId,
                organizationId: property.organizationId,
                status: "NEW",
            },
        });

        return res.status(200).json(lead);
    } catch (error) {
        if (error instanceof z.ZodError) {
            return res.status(400).json({ message: "Validation Error", errors: error.errors });
        }
        console.error("Error creating lead:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}
