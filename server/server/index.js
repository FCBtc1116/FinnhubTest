const express = require("express");
const finnhub = require('finnhub');
const cors = require('cors');
const bodyparser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyparser.json({limit: '50mb'}));

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
};
app.use(cors(corsOptions));

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = "bv4mnbf48v6qpate9n30";
const finnhubClient = new finnhub.DefaultApi()

app.post("/api", (req, res) => {
    finnhubClient.quote(req.body.symbol, (error, data, response) => {
        if(data == null) // Can not connect with Finnhub 
            res.send({
                price: -2,
                percentChange: -2
            });
        else //Get Data from Finnhub
            /* 
                data.c == 0 then Symbol is incorrect
                else return data
            */
            res.send({
                price: data.c ? data.c : -1,
                percentChange: data.c ? data.dp : -1,
            });
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});