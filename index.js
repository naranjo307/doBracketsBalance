
  const correspondencia = {
    "(": ")",
    "[": "]",
    "{": "}"
  };

  var verificacion = ['[',']','{','}','(',')']


  var stack = []

  
  const doBracketsBalance = str => {
                        
    for (let bracket of str) {
      if (!verificacion.includes(bracket)) {
        //console.log(`${bracket} no es un bracket`)

      } else if (bracket === "[" || bracket === "(" || bracket === "{" ) {
        stack.push(bracket);

      } else {
        const poppedBracket = stack.pop();
        
        if (correspondencia[poppedBracket] !== bracket) {
          return false;
        }
      }
    }
    return stack.length === 0;
  };
  
  
  console.log(doBracketsBalance('[)'));;

  module.exports = doBracketsBalance