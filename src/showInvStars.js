const showInvStars = () => {
    for (let i = nb; i >= 1; i -= 1) {
        console.log('*'.repeat(i))
    }
}

if (process.argv.length !== 3) {
    console.log('usage: node stars.js number')
    process.exit(1)
}

if (isNaN(process.argv[2])) {
    console.log(`Error: ${process.argv[2]} is not a number.`)
    process.exit(1)
}

let nb = Number(process.argv[2])
showInvStars(nb)
