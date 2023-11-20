import { ConnectDB } from "@/lib/config/db";
import { NextResponse } from "next/server";


const LoadDB = async () => {
    await ConnectDB();
};

LoadDB();
// export async function GET(req, res) {
//     return NextResponse.json({ message: "Hello World" });
// }

export async function POST(req, res) {

    const { title, description } = req.json();

    await TodoModel.create({ title, description });
    return NextResponse.json({ message: "Todo Created" });
}
