function matchesPerYear(match){
    const year = match.reduce((year, eachMatch) => {
        if(!year[eachMatch["season"]]){
            year[eachMatch["season"]] = 0;
        }
        else{
            year[eachMatch["season"]] += year[eachMatch["season"]];
        }
        return acc;
    })
}

