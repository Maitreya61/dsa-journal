import connectDb from "@/libs/mongodb";
import Notes from "@/models/notes";
import { NextResponse } from "next/server";


export async function PUT(req:Request){

    const id = req.url.split("notes/")[1];
    const {
        newtitle:title,
        newlink:link,
        newtopic: topic,
        newdifficulty: difficulty,
        newnotes: notes,
    } = await req.json();

    await connectDb();
    await Notes.findByIdAndUpdate(id, {title, link, topic, difficulty, notes});
    return NextResponse.json({message:"Notes Updated Successfully"});

}

export async function GET(req:Request){
    const id = req.url.split("notes/")[1];
    await connectDb();
    const note = await Notes.findOne({_id:id});
    return NextResponse.json(note, {status:201});
}