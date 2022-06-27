fetch('http://127.0.0.1:8080/output/matchesPerYear.json')
  .then(res => res.json())
  .then(data => graphForMatchesPerYear(data));


function graphForMatchesPerYear(matchesPerYear){
    Highcharts.chart('container1', {
        chart: {
          type: 'column'
        },
        title: {
          text: 'Matches Per Year'
        },
        subtitle: {
          text: 'IPL Project'
        },
        xAxis: {
          categories: Object.keys(matchesPerYear)
        },
        yAxis: {
          title: {
            text: 'Matches in the Year'
          }
        },
        series: [{
          name: 'Year',
          data: Object.values(matchesPerYear)
        }]
      });
}



// Graph for Problem 2

fetch('http://127.0.0.1:8080/output/wonPerTeam.json')
  .then(response => response.json())
  .then(data => graphForWonPerYear(data));


function graphForWonPerYear(data){
  const teams = Object.keys(data);
  
  function getUniqueYears(data){
    const years = Object.values(data).map((data) => Object.keys(data));
    const yearsArray = new Set(years.flat());

    let intYearsArray =[];
    for( let item of yearsArray){
      intYearsArray.push(parseInt(item));
    }
    return intYearsArray.sort();
  }
  const uniqueYears = getUniqueYears(data)

  function getStructuredData(data,uniqueYears){

    const allTeams = Object.keys(data);
    const teamsWins = []
    for ( let team of allTeams){

      const presentObject = {};

      presentObject.name = team;
      presentObject['data'] = [];

      for (let index = 0 ; index < uniqueYears.length ; index++){
        if(data.hasOwnProperty(team)){
          if(data[team].hasOwnProperty(uniqueYears[index])){
            presentObject['data'].push(data[team][uniqueYears[index]]);
          }else{
            presentObject['data'].push(0);
          }
      }
    }
    teamsWins.push(presentObject);
  }
  return teamsWins; 
};

  const structuresData = getStructuredData(data,uniqueYears)

  Highcharts.chart('container2', {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Number Of Wins Per Team Per Year'
    },
    subtitle: {
      text: 'IPL Project'
    },
    xAxis: {
      categories: uniqueYears
    },
    yAxis: {
      title: {
        text: 'Number of Wins Per Team Per Year'
      }
    },
    series: structuresData
  });
}





// Graph for Problem 3

fetch('http://127.0.0.1:8080/output/extraRuns.json')
  .then(response => response.json())
  .then(data => graphForExtraRuns2016(data));


function graphForExtraRuns2016(extraRuns){
    Highcharts.chart('container3', {
        chart: {
          type: 'column'
        },
        title: {
          text: 'Extra Runs Conceded Per Team In 2016'
        },
        subtitle: {
          text: 'IPL Project'
        },
        xAxis: {
          categories: Object.keys(extraRuns),
          crosshair: true
        },
        yAxis: {
          title: {
            text: 'Extra Runs'
          }
        },
        series: [{
          name: 'Year 2016',
          data: Object.values(extraRuns)
        }]
      });
}



// Graph for Problem 4
fetch('http://127.0.0.1:8080/output/top10BowlerOfYear.json')
  .then(response => response.json())
  .then(data => graphForEconomicalBowlers(data));


function graphForEconomicalBowlers(economicalBowlers){
    Highcharts.chart('container4', {
        chart: {
          type: 'column'
        },
        title: {
          text: 'Top 10 Economical Bowlers Of 2015'
        },
        subtitle: {
          text: 'IPL Project'
        },
        xAxis: {
          categories: Object.keys(economicalBowlers)
        },
        yAxis: {
          title: {
            text: 'Economy'
          },
        },
        series: [{
          name: 'Year 2015',
          data: Object.values(economicalBowlers)
        }]
      });
}



