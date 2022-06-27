const fs = require('fs');

const matchPerYear = require('./matchesPerYear');
const matchWonPerTeam = require('./wonPerTeam');
const extraRunPerTeam = require('./extraRuns2016');
const top10EconomicalBowler = require('./tenTopBowlers');

const csvToJson = require("csvtojson");

csvToJson().fromFile('../data/matches.csv')
.then((matchJSON) =>{
    let result1 = JSON.stringify(matchPerYear(matchJSON));
    fs.writeFile('../public/output/matchesPerYear.json', result1, (error)=>{
        if(error){
            console.log(error);
        } else{
            console.log("File created!!!");
        }
    });

    let result2 = JSON.stringify(matchWonPerTeam(matchJSON));
    fs.writeFile('../public/output/wonPerTeam.json', result2, (error)=>{
        if(error){
            console.log(error);
        } else{
            console.log("File created!!!");
        }
    });

    csvToJson().fromFile('../data/deliveries.csv')
    .then((deliveriesJSON)=>{
        let result3 = JSON.stringify(extraRunPerTeam(matchJSON, deliveriesJSON));
        fs.writeFile('../public/output/extraRuns.json', result3, (error)=>{
            if(error){
                console.log(error);
            }else{
                console.log("File created!!!");
            }
        });

        let result4 = JSON.stringify(top10EconomicalBowler(matchJSON, deliveriesJSON));
        fs.writeFile('../public/output/top10BowlerOfYear.json', result4, (error)=>{
            if(error){
                console.log(error);
            }else{
                console.log("File created!!!");
            }
        });
    });
})


// const csvToJson = require("csvtojson");
// const testFnc =  async () => {
//     let output = await csvToJson().fromFile('../data/matches.csv')
//     return output;
// }

// testFnc().then((data) => {
    
// })