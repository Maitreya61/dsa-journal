"use client"



import Link from 'next/link'
import '../app/app.css'
import {RxCross2} from 'react-icons/rx'
import {useState} from 'react'
import React, { FormEvent } from 'react';
import { useRouter } from 'next/navigation'


interface EditFormProps {
    title: string;
    link: string;
    topic: string;
    difficulty: string;
    notes: string;
    id: number;
  }

export default function EditForm({title,link,topic,difficulty,notes,id}:EditFormProps){

    const [newtitle, setTitle] = useState(title);
    const [newlink, setLink] = useState(link);
    const [newtopic, setTopic] = useState(topic);
    const [newdifficulty, setDifficulty] = useState(difficulty);
    const [newnotes, setNotes] = useState(notes);
    const router = useRouter();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault()

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/notes/${id}`, {
                method:"PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({newtitle,newlink,newtopic,newdifficulty,newnotes})
            })

            if(res.ok){
                router.push('/');
            } else{
                throw new Error("Failed to Create Notes")
            }
            
            
        } catch (error) {
            console.log(error)
        }
    }


    return(
        <div className='w-screen h-screen flex justify-center items-center' >
            <form className='w-3/4 lg:w-1/2 box-shadow rounded-md' onSubmit={handleSubmit}>
                <div className='p-5 border-b-2 flex flex-row justify-between items-center'>
                    <div><h1 className='text-3xl font-bold font-sans'>Edit Notes</h1></div>
                    <div className='text-3xl'><Link href={'/'}><RxCross2/></Link></div>
                </div>
                <div className='flex flex-col justify-between items-center m-5'>
                    <input type="text" placeholder='Title' className='add-input' value={newtitle} onChange={(e)=>setTitle(e.target.value)}/>
                    <input type="text" placeholder='Link' className='add-input' value={newlink} onChange={(e)=>setLink(e.target.value)}/>
                    <input type="text" placeholder='Topic' className='add-input' value={newtopic} onChange={(e)=>setTopic(e.target.value)}/>
                    <input type="text" placeholder='Difficulty' className='add-input' value={newdifficulty} onChange={(e)=>setDifficulty(e.target.value)}/>
                    <textarea rows={4} placeholder='Notes' className='add-input' value={newnotes} onChange={(e)=>setNotes(e.target.value)} />
                    <button type='submit' className='mt-5 px-10 py-3 bg-black rounded-md text-white'>Submit</button>
                </div>
            </form>
        </div>
    )
}