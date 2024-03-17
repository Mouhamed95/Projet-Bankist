'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovement = function (movements, sort = false) {
  containerMovements.innerHTML = ""


  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements


  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
        <div class="movements__row">
          <div class="movements__type
           movements__type--${type}">${i + 1} ${type} </div>
          <div class="movements__value">${mov}€</div>
        </div>;
    `
    containerMovements.insertAdjacentHTML('afterbegin', html);
  })
};

displayMovement(account1.movements);




console.log(containerMovements.innerHTML)



// const displayMovement = function (movements) {

//   const type = mov > 0 ? "deposit": "withdraw"

//   const html = `
//   <div class="movements__row">
//   <div class="movements__type movements__type--${type}">2 deposit</div>
//   <div class="movements__date">3 days ago</div>
//   <div class="movements__value">4 000€</div>
// </div>


//   `



// }

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroUst = 1.1

const movem = movements.map(mov => mov * euroUst)


// const mouveUsd = movements.map(function (mov) {

//   return mov * euroUst

// })
console.log(movements)
console.log(movem)

// const creatUserNames = function (user) {
//   const userName = user
//     .toLowerCase()
//     .split(" ")
//     .map(nam => nam[0]).join('')
//   return userName
// }

// console.log(creatUserNames('Steven Thomas Williams'))






const deposit = movements.filter(mov => mov > 0)
console.log(deposit)


const total = movements.reduce((acc, curr) => acc + curr, 0)
console.log(total)


const calbalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, curr) =>
    acc + curr, 0)

  labelBalance.textContent = `${acc.balance} EUR`
}
// calbalance(account1.movements)


const calcDisplaySumary = function (acc) {
  const sumary = acc.movements.filter(mov => mov > 0)
    .reduce((acc, curr) => acc + curr, 0)
  labelSumIn.textContent = `${sumary}€`

  const retrait = acc.movements.filter(mov => mov < 0)
    .reduce((acc, curr) => acc + curr, 0)
  labelSumOut.textContent = `${Math.abs(retrait)}€`

  const interet = acc.movements.filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100).filter((int, i, arr) => {
      console.log(int)
      console.log(i)
      console.log(arr)

      return int >= 1
    })
    .reduce((acc, curr) => acc + curr, 0)

  labelSumInterest.textContent = `${interet}€`

}
// calcDisplaySumary(account1)


const creatUserName = function (accs) {
  accs.forEach(function (acc) {
    //console.log(acc)
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map(nam => nam[0]).join('')
  })
}
creatUserName(accounts)



//Maximum value



// /////////////////////////////////////////////////

// //SLICE METHODE array 

// let arr = ['a', 'b', 'c', 'd', 'e']
// console.log(arr)
// console.log(arr.slice(2))
// console.log(arr.slice(2, 4))
// console.log(arr.slice(-2))
// console.log(arr.slice(1, -2))
// console.log(arr.slice())
// console.log([...arr])

// //SPLICE METHODE array
// //console.log(arr.splice(2))
// console.log(arr.splice(-1))
// console.log(arr.splice(1, 2))
// console.log(arr)

// //reserve array
// arr = ['a', 'b', 'c', 'd', 'e']
// let arr2 = ["f", "i", 'j', 'h', 'i']
// console.log(arr2.reverse())
// console.log(arr2)



// //CONCAT METHODE ARRAY
// const lettre = arr.concat(arr2)
// console.log(lettre)
// console.log([...arr, ...arr2])

// //JOIN ARRAY
// console.log(lettre.join(' - '))


// //la methode at pour savoir le numero de l'index
// const arr3 = [23, 12, 13]
// console.log(arr3[0])
// console.log(arr3.at(0))

// //geting the last array
// console.log(arr3[arr3.length - 1])
// console.log(arr3.slice(-1)[0])
// console.log(arr3.at(-1))

// //la methode at fonctione aussi avec les strings
// console.log("Mouhamed".at(-1))

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`vous avez depose ${movement}`)
//   } else {
//     console.log(`vous avez retirez ${Math.abs(movement)}`)
//   }
// }

// console.log('--------------FOREACH-----------')
// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Mouvement ${i + 1}: vous avez depose ${mov}`)
//   } else {
//     console.log(`Mouvement ${i + 1}:  vous avez retirez ${Math.abs(mov)}`)
//   }
// })



/*
Julia et Kate réalisent une étude sur les chiens. Chacun d'eux a donc interrogé 5 propriétaires
 de chiens sur l'âge de leur chien et a stocké les données dans un tableau (un tableau pour
 chacun). Pour l’instant, ils souhaitent simplement savoir si un chien est un adulte ou un chiot
  . Un chien est adulte s'il a au moins 3 ans, et c'est un chiot s'il a moins de 3 ans.

Créez une fonction « checkDogs », qui accepte 2 tableaux d'âges de chiens
 (« dogsJulia » et « dogsKate ») et effectue les opérations suivantes :

1. Julia a découvert que les propriétaires du PREMIER et des DEUX DERNIERS chiens

ont en fait des chats, pas des chiens ! Créez donc une copie superficielle du tableau
de Julia et supprimez les âges du chat de ce tableau copié (car c'est une mauvaise pratique
 de muter les paramètres de fonction)
2. Créez un tableau avec les données de Julia (corrigées) et de Kate
3. Pour chaque chien restant, connectez-vous à la console s'il s'agit d'un adulte
("Le chien numéro 1 est un adulte et a 5 ans") ou d'un chiot
("Le chien numéro 2 est toujours un chiot 🐶")
4. Exécutez la fonction pour les deux ensembles de données de test

CONSEIL : utilisez les outils de toutes les conférences de cette section jusqu'à présent 😉

DONNÉES DE TEST 1 : données de Julia [3, 5, 2, 12, 7], données de Kate [4, 1, 15, 8, 3]
DONNÉES DE TEST 2 : données de Julia [9, 16, 6, 8, 3], données de Kate [10, 5, 6, 1, 4]

BONNE CHANCE 😀
*/
// const checkDogs = function () {

// }

//PIPELINE

const euroToUsd = 1.1

const totalDepositUsd = movements.filter(mov => mov > 0)
  .map(mov => mov * euroToUsd)
  .reduce((accu, curr) => accu + curr, 0)
console.log(totalDepositUsd)


//la methode find essai

const findWithDraw = movements.find(mov => mov < 0)
console.log(findWithDraw)

const account = accounts.find(acc => acc.owner === "Jessica Davis")
console.log(account)


const updateUI = function (acc) {
  //Display movement
  displayMovement(acc.movements)

  //Display balance

  calbalance(acc)

  //Display Summary

  calcDisplaySumary(acc)
}






//Event handler
let currentAcount;

btnLogin.addEventListener('click', function (e) {
  //Previent form from submit
  e.preventDefault()
  //console.log("LOGIN")

  currentAcount = accounts.find(accs => accs.username === inputLoginUsername.value)

  console.log(currentAcount)

  if (currentAcount?.pin === Number(inputLoginPin.value)) {
    // console.log("login")
    labelWelcome.textContent = `Welcome Back, ${currentAcount.owner.split(" ")[0]}`

    // masquer l'interface utilisateur
    containerApp.style.opacity = 100


    inputLoginUsername.value = inputLoginPin.value = ''
    inputLoginPin.blur()

    //mise a jour de l'interface utilisateur
    updateUI(currentAcount)

  }
})


btnTransfer.addEventListener('click', function (e) {
  e.preventDefault()
  //console.log('btn')
  const amount = Number(inputTransferAmount.value)

  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value)
  // console.log(amount, receiverAcc)
  inputTransferAmount.value = inputTransferTo.value = ""

  if (amount > 0 &&
    receiverAcc &&
    currentAcount.balance >= amount &&
    receiverAcc?.username !== currentAcount.username) {
    //doit faire un transfert
    currentAcount.movements.push(-amount)
    receiverAcc.movements.push(amount)

    //mise a jour de l'interface utilisateur
    updateUI(currentAcount)
  }
})

btnLoan.addEventListener('click', function (e) {
  e.preventDefault()

  const amount = Number(inputLoanAmount.value)
  if (amount > 0 && currentAcount.movements.some(mov => mov >= amount * 0.1)) {

    //ajout de mouvement
    currentAcount.movements.push(amount)

    //mettre à jour l'interface || update UI
    updateUI(currentAcount)
  }
  inputLoanAmount.value = ''
})

// btn close

btnClose.addEventListener('click', function (e) {
  e.preventDefault()
  // console.log("Delete")
  if (inputCloseUsername.value === currentAcount.username &&
    Number(inputClosePin.value) === currentAcount.pin) {

    const index = accounts.findIndex(acc => acc.username === currentAcount.username)

    console.log(index)

    //supprimer le compte
    accounts.splice(index, 1)

    //masquer l'interface utilisateur
    containerApp.style.opacity = 0
  }
  inputCloseUsername.value = inputClosePin.value = ""
})

let sorted = false

btnSort.addEventListener('click', function (e) {
  e.preventDefault()
  displayMovement(currentAcount.movements, !sorted)

  sorted = !sorted
})







console.log(movements)


//Equality
console.log(movements.includes(-130))





/*
Revenons à l'étude de Julia et Kate sur les chiens. Cette fois, ils veulent convertir le chien
comparez les âges aux âges humains et calculez l'âge moyen des chiens de leur étude.

Créez une fonction 'calcAverageHumanAge', qui accepte un tableau d'âges de chien ("ages"),
 et fait les choses suivantes dans l'ordre :

1. Calculez l'âge du chien en années humaines à l'aide de la formule suivante : si le chien
 a <= 2 ans, humanAge = 2 * dogAge. Si le chien a > 2 ans, humanAge = 16 + dogAge * 4.
2. Exclure tous les chiens âgés de moins de 18 ans humains
 (ce qui revient à garder des chiens âgés d'au moins 18 ans)
3. Calculez l'âge humain moyen de tous les chiens adultes
 (vous devriez déjà savoir grâce à d'autres challenges comment on calcule les moyennes 😉)
4. Exécutez la fonction pour les deux ensembles de données de test

DONNÉES DE TEST 1 : [5, 2, 4, 1, 15, 8, 3]
DONNÉES DE TEST 2 : [16, 6, 10, 5, 6, 1, 4]

BONNE CHANCE 😀
*/

// const calcAverageHumanAge = function (ages) {
//   const humanAge = ages.map((age, i) => {
//     if (age <= 2) {
//       return age * 2
//     }
//     if (age > 2) {
//       return 16 + age * 4
//     }
//   }
//   )
//   const adulte = humanAge.filter(ele => ele >= 18)

//   const moyen = adulte.reduce((ele, curr) => ele + curr, 0) / adulte.length

//   console.log(moyen)
// }
// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])


//methode flat()  carte plat

const both = accounts.map(mov => mov.movements)
console.log(both)
const allMov = both.flat()
console.log(allMov)
const endAll = allMov.reduce((acc, curr) => acc + curr, 0)
console.log(allMov)
console.log(endAll)

const overBalance = accounts
  .map(mov => mov.movements)
  .flat()
  .reduce((acc, curr) => acc + curr, 0)
console.log(overBalance)


//FlatMap

const overBalance2 = accounts
  .flatMap(mov => mov.movements)
  .reduce((acc, curr) => acc + curr, 0)
console.log(overBalance2)


// const autre = accounts.flatMap(mov => mov.movements)
// console.log(autre)


//ascadent de methode sort()
movements.sort((a, b) => a - b)
console.log(movements)


//descadent du methode sort()

movements.sort((a, b) => b - a)
console.log(movements)





//Array.from

const y = Array.from({ length: 7 }, () => 1)
console.log(y)





//Array Method Pratice

//1
const bankDeposit = accounts.flatMap(mov => mov.movements)
  .filter(mov => mov > 0).reduce((som, curr) => som + curr, 0)
console.log(bankDeposit)

//2
// const numDeposit1000 = accounts.flatMap(mov => mov.movements)
//   .filter(mov => mov >= 1000).length
// console.log(numDeposit1000)

const numDeposit1000 = accounts.flatMap(mov => mov.movements)
  .filter(mov => mov >= 1000)
  // .reduce((count, curr) => (curr >= 1000 ? count + 1 : count), 0)
  .reduce((count, curr) => (curr >= 1000 ? ++count : count), 0)
console.log(numDeposit1000)


//Prefixed operateur
let a = 10
console.log(a++)
console.log(++a)

//3 la methode avance pour la methode reduce 


// Défi de codage n°4

/*
Julia et Kate étudient toujours les chiens, et cette fois, elles étudient si les chiens sont
manger trop ou pas assez.
Manger trop signifie que la portion de nourriture actuelle du chien est supérieure
 à la portion recommandée,
 et manger trop peu, c'est le contraire.
Manger une quantité correcte signifie que la portion de nourriture actuelle 
du chien se situe dans une fourchette de 10 %
au-dessus et 10 % en dessous de la portion recommandée (voir astuce).

1. Parcourez le tableau contenant les objets chien, et pour chaque chien,
calculez la portion de nourriture recommandée et ajoutez-la à l'objet 
en tant que nouvelle propriété.
 Ne créez PAS un nouveau tableau,
 faites simplement une boucle sur le tableau.
 Forumla : nourriture recommandée = poids ** 0,75 * 28. (Le résultat
   est en grammes de nourriture,
   et le poids doit être en kg)
2. Trouvez le chien de Sarah et connectez-vous à la console s'il mange trop
ou trop peu. CONSEIL : Certains chiens ont plusieurs propriétaires, vous devez donc d'abord
trouver Sarah dans le tableau des propriétaires, et donc celui-ci est un peu délicat 
(volontairement) 🤓
3. Créez un tableau contenant tous les propriétaires de chiens qui mangent aussi
beaucoup («ownersEatTooMuch») et un tableau avec tous les propriétaires de chiens qui mangent
trop peu («ownersEatTooLittle»).
4. Enregistrez une chaîne sur la console pour chaque tableau créé en 3.,
 comme ceci : "Les chiens de Matilda, Alice et Bob mangent trop !"
 et "Les chiens de Sarah, John et Michael mangent trop peu !"
5. Enregistrez sur la console si un chien mange EXACTEMENT
la quantité de nourriture recommandée (juste vrai ou faux)
6. Connectez-vous à la console pour savoir si un chien mange un OKAY.
quantité de nourriture (juste vrai ou faux)
7. Créez un tableau contenant les chiens qui mangent un
 OK quantité de nourriture (essayez de réutiliser la condition utilisée en 6.)
8. Créez une copie superficielle du tableau dogs et triez-la par recommandation
portion de nourriture par ordre croissant (gardez à l'esprit que les portions
  sont à l'intérieur des objets du tableau)

CONSEIL 1 : Utilisez de nombreux outils différents pour résoudre ces défis,
vous pouvez utiliser le cours récapitulatif pour choisir entre eux 😉
CONSEIL 2 : Être dans une fourchette de 10 % au-dessus et en dessous de la valeur recommandée
La partie signifie : courant > (recommandé * 0,90) && courant < (recommandé * 1,10).
 En gros, la portion actuelle doit être comprise entre 90 % et 110 % de la portion recommandée.

DONNÉES DE TEST:
const chiens = [
  { poids : 22, curFood : 250, propriétaires : ['Alice', 'Bob'] },
  { poids : 8, curFood : 200, propriétaires : ['Matilda'] },
  { poids : 13, curFood : 275, propriétaires : ['Sarah', 'John'] },
  { poids : 32, curFood : 340, propriétaires : ['Michael'] }
];

BONNE CHANCE 😀
*/
const chiens = [
  { poids: 22, curFood: 250, propriétaires: ['Alice', 'Bob'] },
  { poids: 8, curFood: 200, propriétaires: ['Matilda'] },
  { poids: 13, curFood: 275, propriétaires: ['Sarah', 'John'] },
  { poids: 32, curFood: 340, propriétaires: ['Michael'] }
];

// const nourritureRecommandée = chiens.forEach(el => el.poids)
// console.log(nourritureRecommandée)

chiens.forEach(chien => chien.nourritureRecommandée = Math.trunc((chien.poids ** 0.75) * 28))
console.log(chiens)

// const dogs = chiens.map(chien => chien.poids + 10)
// console.log(dogs)

//Reponse 2

const chienFind = chiens.find(el => el.propriétaires.includes("Sarah"))



console.log(chienFind)

// if (chienFind.curFood > chienFind.nourritureRecommandée
// ) {
//   console.log("le chien de sarah magne trop")
// } else {
//   console.log("le chien de sarah mange peut")
// }

// console.log(`chienFind.curFood > chienFind.nourritureRecommandée ? 
//  : ${"le chien de sarah mange peut"}
// `)

chienFind.curFood > chienFind.nourritureRecommandée ?
  console.log("le chien de sarah magne trop") : console.log("le chien de sarah mange peut")

console.log(`
le chien de sarah magne ${chienFind.curFood > chienFind.nourritureRecommandée ? "trop" : "peut"} 
`)

const ownersEatTooMuch = chiens.filter(el => el.curFood > el.nourritureRecommandée)
  .flatMap(el => el.propriétaires)
console.log(ownersEatTooMuch)

const ownersEatTooLittle = chiens.filter(el => el.curFood < el.nourritureRecommandée)
  .flatMap(el => el.propriétaires)
console.log(ownersEatTooLittle)

const lo = "il est midi"
const tapha = lo.split(' ').join(' et ')
console.log(tapha)

console.log(`les chiens de ${ownersEatTooMuch.join(" et ")} mangent trop !`)

console.log(`les chiens de ${ownersEatTooLittle.join(' et ')} mangent peut`)


console.log(chiens.some(chien => chien.nourritureRecommandée === chien.curFood))