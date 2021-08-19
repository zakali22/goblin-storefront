const express = require("express")

const app = express()
const port: string = process.env.PORT || '4000'


app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}`)
})

export {}