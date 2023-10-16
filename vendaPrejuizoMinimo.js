const prejuizo = [5, 10, 3]

// const prejuizo = [20, 15, 8, 2, 12]

let total = prejuizo[0]
let menor = prejuizo[0]
for (let um = 0; um < prejuizo.length; um++) {

    for (let segundo = um; segundo < prejuizo.length; segundo++) {
        if (prejuizo[um] > prejuizo[segundo]) {
            total = prejuizo[um] - prejuizo[segundo]
        }
        if (total < menor) {
            menor = total
        }

    }
}
console.log(menor);