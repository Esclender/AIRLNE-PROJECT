import express from "express"
import cors from "cors"
import morgan from "morgan";
import mongoose from "mongoose"
import hotelesRoutes from "./routes/hotelReserva.js"
import swaggerDocsV1 from "./swagger.js";
import vuelosRoutes from "./routes/vuelos.js"

const PORT = process.env.PORT || 10801;
const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan("dev"))
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', `http://localhost:${PORT}`); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

//Routes
app.use("/hotel",hotelesRoutes)
app.use("/vuelos",vuelosRoutes)




mongoose.connect("mongodb+srv://e00181703:zGju3VAVTcVj8ALA@cluster0.xzeljne.mongodb.net/?retryWrites=true&w=majority", {dbName:"Airlne"})
  .then(() => console.log("CONNECTED"))
  .catch((err) => console.log(err))



app.listen(PORT, (req, resp) => {
  console.log(`Server running in port http://localhost:${PORT}`)
  swaggerDocsV1(app,PORT)
})