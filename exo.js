// Définition de variables

// j'attribue la valeur 'John' à la variable 'nom'.
let nom='John'
console.log(nom)
// j'ai converti la valeur 'john' en variable et je lui ai attribué la valeur 'Jane'
let john = 'Jane'
console.log(john)

// Boucles

// i == 1, i doit être plus petit que 11, la boucle stoperra à 10 grâce à i++ 
for (let i = 1; i < 11; i++) {

    console.log(i)
}

// console.log()

let welcome = 'Bonjour tout le monde!'
console.log(welcome)

let result = 3 + 4
console.log(result)

console.log(nom)

// Concaténation de chaînes de caractères

let [firstName, lastName] = ["John", "Doe"];
let complete = `${firstName} ${lastName}`;

console.log(complete)

// Conditions

let age = 27;
if (age >= 18) {
    console.log("Vous êtes majeur")
}
else {
    console.log("Vous êtes mineur")
}

// Avancé

// Création et parcours d'un tableau

let couleurs = ['rouge', 'vert', 'bleu', 'jaune', 'orange']
console.log(couleurs)

for (let i = 0; i < couleurs.length; i++) {
    console.log(couleurs[i]);
  } 

// Utilisation de Array.push() et Array.pop()

let numbers = [1, 2, 3, 4, 5]
numbers.push(6)
console.log(numbers)

numbers.pop(6)
console.log(numbers)

// Fonctions

number = 6
const numPair = (number) % 2 === 0 ? true : false;
console.log(numPair)