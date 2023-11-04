import EditForm from "@/components/EditForm";

const fetchData = async (id:String) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/notes/${id}`, { cache: 'no-store' });

        if (!res.ok) {
            throw new Error("Failed to Fetch the Data");
        }

        const data = await res.json();

        return data;
    } catch (error) {
        console.log("Error loading notes", error);
        return [];
    }
}

export default async function Edit({ params }: { params: { id: string } }){

    const id = params.id;
    const note = await fetchData(id);
    const {title,link,topic,difficulty,notes,_id} = note
    return <EditForm title={title} link={link} topic={topic} difficulty={difficulty} notes={notes} id={_id} />
}