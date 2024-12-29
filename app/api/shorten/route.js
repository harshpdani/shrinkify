import { NextResponse } from "next/server";
import { nanoid } from "nanoid";
import connectDB from "@/lib/mongodb";
import Link from "@/models/Link";

export async function POST(req) {
    try {
        await connectDB();
        console.log("Connected to DB");

        const {url, customText} = await req.json();

        try{
            new URL(url);
        } catch (err) {
            console.error("Invalid URL", err);
            return NextResponse.json({ error: "Invalid URL"}, { status:400});
        }

        if (customText) {
            const existingCustom = await Link.findOne({ customText });
            if (existingCustom){
                return NextResponse.json(
                    { error: "Custom text already exists"},
                    { status: 400 }
                )
            }
        }

        const shortCode = customText || nanoid(6);

        const link = await Link.create({
            originalUrl: url,
            shortCode,
            ...(customText ? { customText } : {}),
        });

        console.log("Link created", link);

        return NextResponse.json({
            shortUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/${shortCode}`,
            shortCode,
        });
    }catch (error) {
        console.error("Server Error", error);
        return NextResponse.json(
            {error: "Internal Server Error: " + error.message},
            {status : 500 }
        );
    }
}