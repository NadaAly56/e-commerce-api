import express from 'express'
import dotenv from 'dotenv'
import { dbConnection } from './database/dbConnection.js'
import { categoryRouter } from './src/routes/category.routes.js'
import { brandRouter } from './src/routes/brand.routes.js'
import { subCategorieRouter } from './src/routes/subCategory.routes.js'
import cors from 'cors'
dotenv.config()
const app = express()
const port = process.env.PORT
//*********** DB Connection **************/
dbConnection()
//*********** Express midllewares *******************/
app.use(cors())
app.use(express.json())
app.use('/uploads',express.static('uploads'))

//*********** Routes midllewares *******************/
app.use('/categories', categoryRouter)
app.use('/subCategories', subCategorieRouter)
// app.use('/products', subCategorieRouter)
app.use('/Brand', brandRouter)

//************ Starting Server *************************/

app.listen(port, ()=>{
    console.log(`*Server Started on Port ${port}*`)
})

// *************** Global Error Handler **************/

app.use((error, req, res, next)=>{

    const message = error.message
    const status = error.status || 400
    res.status(status).json({error:message, statusCode: status, stack:error.stack}).st
})