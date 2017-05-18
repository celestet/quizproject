var pop = 0
var alternative = 0
var rock = 0
var rap = 0
var classical = 0
function submitQuiz() {
var answer = document.querySelector("input[name = 'q1']:checked").value
  if(answer == "pop"){
      pop = pop +  1

}
    else if(answer == "alternative"){
      alternative = alternative +  1

}
    else if(answer == "rock"){
      rock = rock +  1

}
    else if(answer == "rap"){
      rap = rap +  1

}
    else if(answer == "classical"){
      classical = classical +  1

}
    
    var answer = document.querySelector("input[name = 'q2']:checked").value
   if(answer == "pop"){
      pop = pop +  1

}
    else if(answer == "alternative"){
      alternative = alternative +  1

}
    else if(answer == "rock"){
      rock = rock +  1

}
    else if(answer == "rap"){
      rap = rap +  1

}
     else if(answer == "classical"){
      classical = classical +  1

}
    var answer = document.querySelector("input[name = 'q3']:checked").value
  if(answer == "pop"){
      pop = pop +  1

}
    else if(answer == "alternative"){
      alternative = alternative +  1

}
    else if(answer == "rock"){
      rock = rock +  1

}
    else if(answer == "rap"){
      rap = rap +  1

}
     else if(answer == "classical"){
      classical = classical +  1

}
    var answer = document.querySelector("input[name = 'q4']:checked").value
  if(answer == "pop"){
      pop = pop +  1

}
    else if(answer == "alternative"){
      alternative = alternative +  1

}
   else  if(answer == "rock"){
      rock = rock +  1

}
    else if(answer == "rap"){
      rap = rap +  1

}
     else if(answer == "classical"){
      classical = classical +  1

}
    var answer = document.querySelector("input[name = 'q5']:checked").value
  if(answer == "pop"){
      pop = pop +  1

}
   else  if(answer == "alternative"){
      alternative = alternative +  1

}
    else if(answer == "rock"){
      rock = rock +  1

}
    else if(answer == "rap"){
      rap = rap +  1

}
     else if(answer == "classical"){
      classical = classical +  1

}
    var answer = document.querySelector("input[name = 'q6']:checked").value
  if(answer == "pop"){
      pop = pop +  1

}
    else if(answer == "alternative"){
      alternative = alternative +  1

}
    else if(answer == "rock"){
      rock = rock +  1

}
    else if(answer == "rap"){
      rap = rap +  1

}
     else if(answer == "classical"){
      classical = classical +  1

}
    var answer = document.querySelector("input[name = 'q7']:checked").value
  if(answer == "pop"){
      pop = pop +  1

}
   else  if(answer == "alternative"){
      alternative = alternative +  1

}
    else if(answer == "rock"){
      rock = rock +  1

}
    else if(answer == "rap"){
      rap = rap +  1

}
     else if(answer == "classical"){
      classical = classical +  1

}
    var answer = document.querySelector("input[name = 'q8']:checked").value
  if(answer == "pop"){
      pop = pop +  1

}
    else if(answer == "alternative"){
      alternative = alternative +  1

}
    else if(answer == "rock"){
      rock = rock +  1

}
    else if(answer == "rap"){
      rap = rap +  1

}
     else if(answer == "classical"){
      classical = classical +  1

}
    var answer = document.querySelector("input[name = 'q9']:checked").value
  if(answer == "pop"){
      pop = pop +  1

}
   else  if(answer == "alternative"){
      alternative = alternative +  1

}
    else if(answer == "rock"){
      rock = rock +  1

}
   else  if(answer == "rap"){
      rap = rap +  1

}
     else if(answer == "classical"){
      classical = classical +  1

}
    var answer = document.querySelector("input[name = 'q10']:checked").value
  if(answer == "pop"){
      pop = pop +  1

}
    else if(answer == "alternative"){
      alternative = alternative +  1

}
    else if(answer == "rock"){
      rock = rock +  1

}
    else if(answer == "rap"){
      rap = rap +  1

}
     else if(answer == "classical"){
      classical = classical +  1

}
    
    var highestValue = Math.max(pop, alternative, rock, rap)
    if (highestValue == pop){
         document.getElementById("result").innerHTML = "pop"
    }
       else if (highestValue == rock){
         document.getElementById("result").innerHTML = "rock"
        }
       else if (highestValue == alternative){
         document.getElementById("result").innerHTML = "alternative"
        }
       else if (highestValue == rap){
         document.getElementById("result").innerHTML = "rap"
        }
     else if (highestValue == classical){
         document.getElementById("result").innerHTML = "classical"
        }
    
}
