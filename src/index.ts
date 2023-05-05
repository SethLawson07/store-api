import  express,{Application,Request,Response} from "express"
import { myDataSource } from "./database/data-source"
import {router} from "./routes/category.router"
// establish database connection
myDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })

// create and setup express app
const app : Application = express()

app.get("/test",(req:Request,res:Response)=>{
    res.status(200).json({message:"Wesh"})
})

app.use(express.json())
app.use("/api/v1",router)

// start express server
app.listen(3000)
