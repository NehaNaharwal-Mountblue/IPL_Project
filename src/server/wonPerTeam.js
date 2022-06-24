function matchWonPerTeam(match){
    if(!match){
        return {}
    }
    const numberOfWins = match.reduce((year, currMatch) =>{
        if(!year[currMatch["season"]]){
            year[currMatch["season"]] = {};
        }
        if(!year[currMatch["season"]][currMatch["winner"]]){
            year[currMatch["season"]][currMatch["winner"]] = 0;
        }
        year[currMatch["season"]][currMatch["winner"]]++ ;
        return year;


    }, {});
    return numberOfWins;
}

module.exports = matchWonPerTeam;