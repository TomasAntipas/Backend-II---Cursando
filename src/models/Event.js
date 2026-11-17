
import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
    {
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
        default: "",
    },
    date: {
        type: Date,
        required: true,
    },
    location: {
        type: String,
        required: true,
        trim: true,
    },
    capacity: {
        type: Number,
        required: true,
        min: 1,
    },
    category: {
        type: String,
        required: true,
        trim: true,
    },
    },
    {
    timestamps: true,
    }
);

const Event = mongoose.model("Event", eventSchema);

export default Event;
