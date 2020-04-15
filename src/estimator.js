const covid19ImpactEstimator = () => { 
const data = {
    region:{
        name:'Africa',
        avgAge:19.7,
        avgDailyIncomeInUSD:4,
        avgDailyIncomePopulation:0.71
        },
      periodType:document.getElementById('periodType').value,
      timeToElapse:document.getElementById('timeToElapse').value,
      reportedCases:document.getElementById('reportedCases').value,
      population:document.getElementById('population').value,
      totalHospitalBeds:document.getElementById('hospitalbeds').value,
      impact:{
          currentlyInfected: function() {return data.reportedCases * 10;},
          infectionByRequestedTime:function() {returnMath.floor(data.impact.currentlyInfected() * Math.pow(2 ,(data.timeToElapse/3)));},
          severeCasesByRequestedTime:function() {return Math.floor(data.impact.infectionByRequestedTime() * 0.15);},
          hcasesOfICUByrequestedTime:function() {return Math.floor(data.impact.infectionByRequestedTime()* 0.15);},
          casesOfVentilatorsByRequestedTime:function() {return Math.floor(data.impact.infectionByRequestedTime() * 0.02);},
          dollarsInFlight:function() {return Math.floor((data.impact.infectionByRequestedTime()*0.65*data.region.avgDailyIncomeInUSD)/30)}
        },
      severeImpact:{
          currentlyInfected:function severe() {return data.reportedCases*50;},
          infectionByRequestedTime:function() {return Math.floor(data.severeImpact.currentlyInfected()*Math.pow(2 ,(data.timeToElapse / 3)))},
          severeCasesByRequestedTime:function() {return Math.floor(data.severeImpact.infectionByRequestedTime()* 0.15);},
          hospitalBedsByRequestedTime:function() { return Math.floor((data.totalHospitalBeds*0.35)-(data.severeImpact.severeCasesByRequestedTime()))},
          casesOfICUByrequestedTime:function() {return Math.floor(data.severeImpact.infectionByRequestedTime() * 0.05);},
          casesOfVentilatorsByRequestedTime:function() {return Math.floor(data.severeImpact.infectionByRequestedTime()* 0.02);},
          dollarsInFlight:function() {return  Math.floor((data.severeImpact.infectionByRequestedTime()*0.65*data.region.avgDailyIncomeInUSD)/30)},
        }
      }
}
//export default covid19ImpactEstimator;

