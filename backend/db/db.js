import mongoose from "mongoose";

// console.log("MONGO URI:", process.env.MONGO_URI);

function connect() {
    mongoose
        .connect(`${process.env.MONGO_URI}/chatlrn`)
        .then(() => {
            console.log("Connected to MongoDB");
        })
        .catch((err) => {
            console.error("MongoDB Error:", err.message);
        });
}

export default connect;