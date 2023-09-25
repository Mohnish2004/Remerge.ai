
import mongoose from "mongoose"; 
const connectionString = process.env.ATLAS_URI || "";


mongoose.connect(connectionString, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
})
.then(() => console.log("MongoDB is  connected successfully"))
.catch((err) => console.error(err));

const db = mongoose.connection;
export default db;