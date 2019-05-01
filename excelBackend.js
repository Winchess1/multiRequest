var xlsx = require('node-xlsx');

const cheerio = require('cheerio');
const request = require('request');
const mkdirp = require('mkdirp');
const path = require('path');
const fs = require('fs-extra');
const _ = require('underscore');

function filter(path){
var obj = xlsx.parse(fs.readFileSync(__dirname + path));
let collection = [];
console.log('\tRunning the '+JSON.stringify(obj[0].name));
let database = _.filter(obj[0].data, function (raw) {    
    collection=  _.filter(raw,function(elem){
        if(elem!=undefined){
            return elem;
        }
    });   
    if(collection.length==raw.length){      
        return collection;
    }
});
return database;
};



filter('/database2_car.xlsx');



