function stripX(xray) {
    let result = [];
    let splitXray = xray.split('')
    for (let i in splitXray) {
      let char = splitXray[i]
      if (char !=='x') {
        result[result.length] = char
    }
 }
console.log(result)
//     let joined = result.join('')
//     return joined
  }
