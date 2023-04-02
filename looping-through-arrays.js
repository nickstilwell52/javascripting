const pets = ['cat', 'dog', 'rat']
let petsPlural = []
for (let i = 0; petsPlural.length < pets.length; i++) {
    petsPlural.push(pets[i] += 's')
}
console.log(petsPlural)