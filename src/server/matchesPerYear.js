function matchPerYear(match){
    if(!match){
        return {}
    }
   const playedPerYear = match.reduce((previousYear, eachMatch) => {
        if(!previousYear[eachMatch["season"]]){
            previousYear[eachMatch["season"]] = 0;
        }
        previousYear[eachMatch["season"]]++;
        return previousYear;
   }, {})
   return playedPerYear;
}
module.exports = matchPerYear;