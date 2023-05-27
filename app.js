import express from "express"
import cors from "cors"

const app = express()


// middleware

app.use(cors())
app.use(express.json())




//root 
app.get('/', (req, res) => {
    res.status(200).json({
        status: "success",
        message: "server is running"
    })
})

export default app
