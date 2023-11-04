import Link from "next/link";
import '../app/app.css'

export default function Navbar(){
    return(
        <>
            <div className="flex flex-row px-5 py-5 lg:px-20 justify-between items-center box-shadow">
                <div>
                    <h1 className="lg:text-3xl text-2xl text-center font-bold font-sans">DSA Journal</h1>
                </div>
                <div className="border-2 p-3 lg:px-10 px-6 rounded-md text-white bg-black">
                    <Link href={'/new'}>Add Item</Link>
                </div>
            </div>
        </>
    )
}