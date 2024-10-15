let pointA = 0;
let pointB = 0;
function incrementTeamA(points){
pointA += points
document.getElementById("team-a-score").textContent= pointA

}


function incrementTeamB(points){
  pointB += points
  console.log(points)
  document.getElementById("team-b-score").textContent= pointB
  
  }
 

  function resetScores(){
    pointA = 0;
    pointB = 0;
    document.getElementById("team-a-score").textContent = pointA
    document.getElementById("team-b-score").textContent = pointB

  }
  