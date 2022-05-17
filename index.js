var parsedJSON = require('./data')

let counts = []

for(let data of parsedJSON) {

    let obj = data.metadata.attributes.find(e => e.trait_type === 'Name')
    if(obj) {
        if(counts[obj.value] > 0)
            counts[obj.value]++
        else
            counts[obj.value] = 1
    }
}

console.log(counts)