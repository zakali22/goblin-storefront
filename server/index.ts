const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const {v4: uuidv4} = require("uuid")

const app = express()
const port: string = process.env.PORT || '4000'

const seedData = require("./products.json")

interface Product {
    _id: string,
    name: string,
    description: string,
    image: string,
    price: number
}

interface Order {
    id: string,
    products: Product[]
}

const orders: Order[] = [];

app.use(cors())
app.use(bodyParser.json())

function generateOrderId(){
    return uuidv4()
}


// API
app.get("/products", (req, res) => { // req: body, arguments // res: return result of API call
    return res.json(seedData)
})

app.post("/checkout", (req, res) => {
    let newOrder = req.body;
    newOrder.id = generateOrderId();

    orders.push(newOrder)
    return res.json({success: true, orderId: newOrder.id})
})

app.get("/order/:orderId", (req, res) => {
    const {orderId} = req.params;
    const order = orders[orders.findIndex(({id}) => id === orderId)]
    console.log(order)

    if(order){
        return res.json({
            success: true,
            products: order.products
        })
    } else {
        return res.json({success: false})
    }
})


app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}`)
})

export {}