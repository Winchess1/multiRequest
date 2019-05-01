
const cheerio = require('cheerio');
const request = require('request');
const mkdirp = require('mkdirp');

const path = require('path');
const fs = require('fs-extra');
const _ = require('underscore');
const express = require('express');
const app = express();
var collector = [];
const port = process.env.PORT || 3000;
var server = app.listen(port,console.log('server up'));
app.set('view engine', 'ejs');
var backend =  require('./backend.js');

app.get('/',(req,res)=>{     
    async function f3(){
        try {
            var backends =await backend.mainArray;
         await console.log(backends)
         res.render('index.ejs',{database1:backends[0].ar,
            database2:backends[1].br,
            database3:backends[2].cr,
            database4:backends[3].dr,
            database5:backends[4].er,});
        }catch(e){}
        
        }  
        f3()

})


