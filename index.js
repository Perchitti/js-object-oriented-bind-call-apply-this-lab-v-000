//Your code here
function justInvoke(fn){
  return fn();
}

function setThisWithCall(fn, value, argument){
  return fn.call(value, argument)
}
