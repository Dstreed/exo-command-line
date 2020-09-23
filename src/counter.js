const counter = () => {
    if (process.argv.length != 5) {
        console.log('error : use 3 arguments')
        process.exit(1)
    }
    if (isNaN(process.argv[(2, 3, 4)])) {
        console.log('error : use only numbers')
        process.exit(1)
    }

    let min = Number(process.argv[2])
    let max = Number(process.argv[3])
    let step = Number(process.argv[4])

    for (let i = min; i <= max; i += step) {
        console.log(i)
    }
}
counter()
