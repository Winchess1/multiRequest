
const cheerio = require('cheerio');
const request = require('request');
const mkdirp = require('mkdirp');
const path = require('path');
const fs = require('fs-extra');
const _ = require('underscore');

    //main function 
    var dataBase1 = new Promise (function (resolve,reject) {
        var data = [];
        var key = [];
        request('https://finviz.com/quote.ashx?t=AAPL', (error, res, html) => {
            if (!error && res.statusCode == 200) {
                const $ = cheerio.load(html);
                //scrapping infromation from website and save it to the arrays
                $('.table-dark-row .snapshot-td2-cp').each((i, el) => {
                    key[i] = $(el).text();
                });
                $('.table-dark-row .snapshot-td2').each((i, el) => {
                    data[i] = $(el).text();
                });
                //Temp array that save the current info from the Stock
                var ar = {};
                //Saving data to Array with index created by key array
                for (i = 0; i < key.length; i++) {
                    ar[key[i]] = data[i];
                }
                 console.log('dataBase1');
                 resolve ({ ar });
                  
            } else console.log('\t\t\t' + element + ' Stock not exist in Finviz');

        });
    });
    var dataBase2 = new Promise (function (resolve,reject) {
        var data = [];
        var key = [];
        request('https://finviz.com/quote.ashx?t=FB', (error, res, html) => {
            if (!error && res.statusCode == 200) {
                const $ = cheerio.load(html);
                //scrapping infromation from website and save it to the arrays
                $('.table-dark-row .snapshot-td2-cp').each((i, el) => {
                    key[i] = $(el).text();
                });
                $('.table-dark-row .snapshot-td2').each((i, el) => {
                    data[i] = $(el).text();
                });
                //Temp array that save the current info from the Stock
                var br = {};
                //Saving data to Array with index created by key array
                for (i = 0; i < key.length; i++) {
                    br[key[i]] = data[i];
                }
                console.log('dataBase2');
                resolve ({ br });
                
            } else console.log('\t\t\t' + element + ' Stock not exist in Finviz');

        });
    });
    var dataBase3 = new Promise (function (resolve,reject) {
        var data = [];
        var key = [];
        request('https://finviz.com/quote.ashx?t=TWTR', (error, res, html) => {
            if (!error && res.statusCode == 200) {
                const $ = cheerio.load(html);
                //scrapping infromation from website and save it to the arrays
                $('.table-dark-row .snapshot-td2-cp').each((i, el) => {
                    key[i] = $(el).text();
                });
                $('.table-dark-row .snapshot-td2').each((i, el) => {
                    data[i] = $(el).text();
                });
                //Temp array that save the current info from the Stock
                var cr = {};
                //Saving data to Array with index created by key array
                for (i = 0; i < key.length; i++) {
                    cr[key[i]] = data[i];
                }
                console.log('dataBase3');
                resolve ({ cr });
               
            } else console.log('\t\t\t' + element + ' Stock not exist in Finviz');

        });
    });
    var dataBase4 = new Promise (function (resolve,reject) {
        var data = [];
        var key = [];
        request('https://finviz.com/quote.ashx?t=MSFT', (error, res, html) => {
            if (!error && res.statusCode == 200) {
                const $ = cheerio.load(html);
                //scrapping infromation from website and save it to the arrays
                $('.table-dark-row .snapshot-td2-cp').each((i, el) => {
                    key[i] = $(el).text();
                });
                $('.table-dark-row .snapshot-td2').each((i, el) => {
                    data[i] = $(el).text();
                });
                //Temp array that save the current info from the Stock
                var dr = {};
                //Saving data to Array with index created by key array
                for (i = 0; i < key.length; i++) {
                    dr[key[i]] = data[i];
                }
                console.log('dataBase4');
                resolve ({ dr });
               
            } else console.log('\t\t\t' + element + ' Stock not exist in Finviz');

        });
    });
    var dataBase5 = new Promise (function (resolve,reject) {
        var data = [];
        var key = [];
        request('https://finviz.com/quote.ashx?t=WWE', (error, res, html) => {
            if (!error && res.statusCode == 200) {
                const $ = cheerio.load(html);
                //scrapping infromation from website and save it to the arrays
                $('.table-dark-row .snapshot-td2-cp').each((i, el) => {
                    key[i] = $(el).text();
                });
                $('.table-dark-row .snapshot-td2').each((i, el) => {
                    data[i] = $(el).text();
                });
                //Temp array that save the current info from the Stock
                var er = {};
                //Saving data to Array with index created by key array
                for (i = 0; i < key.length; i++) {
                    er[key[i]] = data[i];
                }
                console.log('dataBase5');
                resolve ({ er });
              
            } else console.log('\t\t\t' + element + ' Stock not exist in Finviz');

        });
    });

var temp = Promise.all([dataBase1,dataBase2,dataBase3,dataBase4,dataBase5])
.then(function(res){
   
    fs.writeFileSync('./dirPath.json',JSON.stringify(res), err => {
        console.log('\t file saved')
        if (err) throw err;
    });
    return res;
})
.catch(function(err){

    console.log(err);
})
    


module.exports ={   
    mainArray :temp,
}  

 
