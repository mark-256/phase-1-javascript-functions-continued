// code your solution here
// Function Declaration with Default Parameter
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

// Function Expression with Default Parameter
const mondayWork = function(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};

// Function Returning a Function (Closure)
function wrapAdjective(flair = "*") {
  return function(adjective = "special") {
    return `You are ${flair}${adjective}${flair}!`;
  };
}

// Example calls (optional — remove or comment out before submitting if not required)
console.log(saturdayFun());                       
console.log(saturdayFun("go hiking"));            

console.log(mondayWork());                        
console.log(mondayWork("work from home"));        

const encouragingPrompt = wrapAdjective("!!!");
console.log(encouragingPrompt("amazing"));        

console.log(wrapAdjective("%")("a dedicated programmer")); 