import express from "express"
import { config } from "dotenv"
import cors from "cors"

const app=express();
const router=express.Router();

config({path:"./config.env"})


app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["POST"],
    credentials:true
}))


app.use(express.json());
app.use(express.urlencoded({extended:true}));

router.get("/",(req,res,next)=>{
    res.json({sucess:true,
        message:"come to india"
    })
})


app.listen(process.env.PORT,()=>{
    console.log(`server lisiting at port ${process.env.PORT}`);

});

