/* const csvToJson = require("csvtojson");
csvToJson().fromFile('../data/matches.csv')
.then(source => {
    console.log(source);
}); */

const csvToJson = require("csvtojson");
const testFnc =  async () => {
    let output = await csvToJson().fromFile('../data/matches.csv')
    return output;
}

testFnc().then((data) => {

})