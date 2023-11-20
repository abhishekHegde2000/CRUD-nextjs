import { ConnectDB } from "@/lib/config/db";
import { NextResponse } from "next/server";


const LoadDB = async () => {
    await ConnectDB();
};

LoadDB();
export async function GET(req, res) {
    return NextResponse.json({ message: "Hello World" });
}

export async function POST(req, res) {
    return NextResponse.json({ message: "Todo Added" });
}
