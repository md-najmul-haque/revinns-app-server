import express from "express"
import cors from "cors"
import userRoute from "./routes/v1/userRoute.js"

const app = express()


// middleware

app.use(cors())
app.use(express.json())


app.use('/api/v1', userRoute)

//root 
app.get('/', (req, res) => {
    res.status(200).json({
        status: "success",
        message: "server is running"
    })
})

export default app
