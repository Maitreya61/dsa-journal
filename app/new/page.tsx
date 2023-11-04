"use client"
import Link from 'next/link'
import '../app.css'
import {useState} from 'react'
import {RxCross2} from 'react-icons/rx'
import React, { FormEvent } from 'react';
import { useRouter } from 'next/navigation'

export default function New(){

    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');
    const [topic, setTopic] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [notes, setNotes] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault()

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/notes`, {
                method:"POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({title,link,topic,difficulty,notes})
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
        <div className='w-screen h-screen flex justify-center items-center'>
            <form className='w-3/4 lg:w-1/2 box-shadow rounded-md' onSubmit={handleSubmit}>
                <div className='p-5 border-b-2 flex flex-row justify-between items-center'>
                    <div><h1 className='text-3xl font-bold font-sans'>New Entry</h1></div>
                    <div className='text-3xl'><Link href={'/'}><RxCross2/></Link></div>
                </div>
                <div className='flex flex-col justify-between items-center m-10'>
                    <input type="text" placeholder='Title' className='add-input' onChange={(e)=>setTitle(e.target.value)} required={true}/>
                    <input type="text" placeholder='Link' className='add-input' onChange={(e)=>setLink(e.target.value)} required={true}/>
                    <input type="text" placeholder='Topic' className='add-input' onChange={(e)=>setTopic(e.target.value)} required={true}/>
                    <input type="text" placeholder='Difficulty' className='add-input' onChange={(e)=>setDifficulty(e.target.value)} required={true}/>
                    <textarea rows={4} placeholder='Notes' className='add-input' onChange={(e)=>setNotes(e.target.value)} required={true}/>
                    <button className='mt-5 px-10 py-3 bg-black rounded-md text-white'>Submit</button>
                </div>
            </form>
        </div>
    )
}