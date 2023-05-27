import app from "./app.js"
import mongoose from "mongoose"
import colors from "colors"
import dotenv from "dotenv"
dotenv.config()

const port = process.env.PORT || 5000

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.zvnzxdj.mongodb.net/?retryWrites=true&w=majority`).then(() => { console.log("database connection is successful".yellow.bold) })

app.listen(port, () => { console.log(`port is listening to the port ${port}`) })
