import connectDb from "@/libs/mongodb";
import Notes from "@/models/notes";
import { NextResponse } from "next/server";

export async function POST(req:Request){
    const {title, link, topic, difficulty, notes} = await req.json();
    await connectDb();
    await Notes.create({title, link, topic, difficulty, notes});
    return NextResponse.json({message: "Notes Posted"}, {status:201})
}

export async function GET(req:Request){
    await connectDb();
    const notes = await Notes.find();
    return NextResponse.json(notes);
}