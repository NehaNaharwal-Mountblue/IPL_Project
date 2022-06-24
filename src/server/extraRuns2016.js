function extraRunPerTeam(deliveries, matches){
    
   let filter2016 = matches.filter((match) => match.season == 2016).map((match) => parseInt(match.id));

   let extraRuns = deliveries.reduce((runs, currOver) => {
       let matchID = parseInt(currOver.match_id);
       if (filter2016.includes(matchID)) {
        if (extraRuns.hasOwnProperty(currOver.bowling_team)) {
          extraRuns[currOver.bowling_team] += parseInt(currOver.extra_runs);
        } else {
          extraRuns[currOver.bowling_team] = parseInt(currOver.extra_runs);
        }
      }
      return extraRuns;

   }, {})
   return extraRuns;
}

module.exports = extraRunPerTeam;
