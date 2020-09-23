const showArgs = () => {
    let reversString = process.argv
    let [, , ...rest] = reversString
    let msgError = 'error : not argument'
    if (reversString.length <= 2) {
        return msgError
    } else {
        return rest.reverse()
    }
}

showArgs()
console.log(showArgs())
