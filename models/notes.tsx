import mongoose, {Schema} from "mongoose";

const NotesSchema = new Schema(
    {
        title: String,
        link: String,
        topic: String,
        difficulty: String,
        notes: String,
    },
    {
        timestamps: true
    }
)

const Notes = mongoose.models.Notes || mongoose.model("Notes", NotesSchema);

export default Notes;