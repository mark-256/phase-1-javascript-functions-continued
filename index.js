// 1. Function declaration: saturdayFun
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

// 2. Function expression: mondayWork
const mondayWork = function (activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};

// 3. Higher-order function: wrapAdjective
function wrapAdjective(flair = "*") {
  return function (adjective = "special") {
    return `You are ${flair}${adjective}${flair}!`;
  };
}
