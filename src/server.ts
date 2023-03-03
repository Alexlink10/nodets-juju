import  express  from "express";
import mustache from "mustache-express";
import dotenv from "dotenv";
import path from "path";
import mainRoutes from "./routes/index";

dotenv.config();

const serve = express();

serve.set("view engine","mustache");
serve.set("views",path.join(__dirname, "views"));
serve.set("mustache", mustache());

serve.use(express.static(path.join(__dirname, "../public")));

//rotas
serve.use(mainRoutes);

serve.use((req,res)=>{
    res.send("pagina não encontrada");
})

serve.listen(process.env.PORT);