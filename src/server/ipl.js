const csvToJson = require("csvtojson");
const matchPerYear = require('./matchesPerYear');
const matchWonPerTeam = require('./wonPerTeam');
const extraRunPerTeam = require('./extraRuns2016');
const economicalBowlers = require('./tenTopBowlers');
csvToJson().fromFile('../data/matches.csv').fromFile('../data/deliveries.csv')
.then(value => {
    console.log(matchPerYear(value));
    console.log(matchWonPerTeam(value));
    console.log(extraRunPerTeam(value));
    console.log(economicalBowlers(value));

    
});


// const csvToJson = require("csvtojson");
// const testFnc =  async () => {
//     let output = await csvToJson().fromFile('../data/matches.csv')
//     return output;
// }

// testFnc().then((data) => {
    
// })