var parsedJSON = require('./data')

let counts = []

let findings = [
    'OG',
    'Fast hands',
    'SVA Bike',
    'Hoverboard',
    'Cloud'
]

let total = 0

for(let data of parsedJSON) {

    let findHash = data.tokenData.name.indexOf('#')
    if(findHash) {
        let n = data.tokenData.name.substring(0, findHash)
        if(n) {
            if(counts[n] > 0)
                counts[n]++
            else
                counts[n] = 1
        }
    } else {
        console.log('invalid: ' + data.tokenData.name)
    }

    total++

    // let obj = data.metadata.attributes.find(e => e.trait_type === 'Name')
    // if(obj) {
    //     if(counts[obj.value] > 0)
    //         counts[obj.value]++
    //     else
    //         counts[obj.value] = 1
    // }


}

console.log(counts)
console.log('TOTAL: ' + total)