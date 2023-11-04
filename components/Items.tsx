import Link from "next/link";
import { TbEdit } from 'react-icons/tb'

interface Note {
  _id: number;
  title: string;
  topic: string;
  link: string;
  difficulty: string;
  notes: string;
}

const fetchData = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/notes`, { cache: 'no-store' });

        if (!res.ok) {
            throw new Error("Failed to Fetch the Data");
        }

        const data: Note[] = await res.json(); // Specify the type as Note[]

        return data;
    } catch (error) {
        console.log("Error loading notes", error);
        return [];
    }
}

export default async function Item() {
    
    const notes = await fetchData();

    return (
        <>
            {notes.map((note) => (
                <div key={note._id}>
                    <div className="m-5 lg:mx-20 flex flex-col lg:px-20 lg:py-7 lg:m-10 p-5 box-shadow rounded-md">
                        <div className='flex flex-row justify-between items-center'>
                            <div className='text-lg text-yellow-400 font-semibold underline max-width'>
                                <Link href={note.link}>{note.title}</Link>
                            </div>
                            <div className="flex flex-row justify-between items-center gap-4 lg:gap-40">
                            <div>
                                <h3 className="text-center">{note.topic}</h3>
                            </div>
                            <div className={`${note.difficulty}`} >
                                <h3>{note.difficulty}</h3>
                            </div>
                            <div className='text-blue-400 lg:text-lg'>
                                <Link href={`/edit/${note._id}`}><TbEdit /></Link>
                            </div>
                            </div>
                        </div>
                        <div className='bg-slate-100 p-5 mt-5 rounded-md'>
                            <p>{note.notes}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
