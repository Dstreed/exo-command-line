const sayGoodBye = () => {
    let name = process.argv[2]
    console.log(`Goodbye, ${name}`)

    if (process.argv.length != 3) {
        console.log(`usage: node sayGoodBye.js sayGoodBye`)
    }
    if (!isNaN(name)) {
        console.log(`Error: not use number`)
        process.exit(1)
    }
}
sayGoodBye()
