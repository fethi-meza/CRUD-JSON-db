const express = require('express');
const app = express();
const cors = require('cors')
const User = require('./module/user_module')
const userRout = require('./Router/userRouter')
const fs = require('fs'); //require file system obj
const port = 3000



app.use(cors())
app.use(express.json())

app.use('/Users', userRout)


app.listen(port, () => { console.log(`server is conecting in this port ${port}`) })