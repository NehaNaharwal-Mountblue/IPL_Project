function top10EconomicalBowler(deliveries, matches) {

    let filter2015 = matches.filter((match) => match.season == 2015)
      .map((match) => parseInt(match.id));
  
    let allBowlers = deliveries.reduce((allBowlers, currOver) => {
  
      let matchId = parseInt(currOver.match_id)
      if (filter2015.includes(matchId)) {
        if (allBowlers.hasOwnProperty(currOver.bowler)) {
          allBowlers[currOver.bowler].balls += 1;
          allBowlers[currOver.bowler].runs += parseInt(currOver.total_runs);
          let run = allBowlers[currOver.bowler].runs;
          let ball = allBowlers[currOver.bowler].balls;
          allBowlers[currOver.bowler].economy = (run / (ball / 6)).toFixed(2);
        } else {
          allBowlers[currOver.bowler] = { "runs": parseInt(currOver.total_runs), "balls": 1, "economy": 0 };
        }
      }
      return allBowlers;
    }, {})
    
    const economyBowler = [];
    for(let bowlerName in allBowlers){
      if(allBowlers[bowlerName].economy <= 8 ){
        economyBowler.push(allBowlers[bowlerName].economy);
        }
    }
  
    economyBowler.sort();
  
    const topTenBowlers = {};
    for (let index = 0; index < 10; index++) {
      for (key in allBowlers) {
        if (allBowlers[key].economy == contiansOnlyEconomy[index]) {
          topTenBowlers[key] = { economyRate: allBowlers[key].economy };
        }
      }
    }
  
    return topTenBowlers;
  
  }

  module.exports = top10EconomicalBowler;
  