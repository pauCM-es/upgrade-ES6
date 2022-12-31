//*Iteración #1: Arrows
console.log("----Iteración #1: Arrows----")
// Crea una arrow function que tenga dos parametros a y b y
// que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre
// por consola la suma de los dos parametros.

// 1.1 Ejecuta esta función sin pasar ningún parametro
// 1.2 Ejecuta esta función pasando un solo parametro
// 1.3 Ejecuta esta función pasando dos parametros

let a = 10;
let b = 5;

const sum = (num1, num2) => {
  return num1 + num2;
};

console.log(sum());
console.log(sum(a));
console.log(sum(a, b));

//* Iteración #2: Destructuring
console.log("----Iteración #2: Destructuring----")

// 2.1 En base al siguiente javascript, crea variables en base a las propiedades
// del objeto usando object destructuring e imprimelas por consola. Cuidado,
// no hace falta hacer destructuring del array, solo del objeto.

const game = {
  title: "The last us 2",
  gender: ["action", "zombie", "survival"],
  year: 2020,
};

const {title, gender, year} = game
console.log(title, gender, year)


// 2.2 En base al siguiente javascript, usa destructuring para crear 3 variables
// llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente
// imprimelo por consola.

const fruits = ["Banana", "Strawberry", "Orange"];

const [fruit1, fruit2, fruit3] = fruits
console.log(fruit1, fruit2, fruit3)

// 2.3 En base al siguiente javascript, usa destructuring para crear 2
// variables igualandolo a la función e imprimiendolo por consola.

const animalFunction = () => {
  return { name: "Bengal Tiger", race: "Tiger" };
};

const {name, race} = animalFunction()
console.log(name, race)

// 2.4 En base al siguiente javascript, usa destructuring para crear las
// variables name y itv con sus respectivos valores. Posteriormente crea
// 3 variables usando igualmente el destructuring para cada uno de los años
// y comprueba que todo esta bien imprimiendolo.

const car = { name1: "Mazda 6", itv: [2015, 2011, 2020] };

const {name1, itv} = car
const [year1, year2, year3] = itv

console.log(name1, itv)
console.log(year1, year2, year3)

//* Iteración #3: Spread Operator
console.log("----Iteración #3: Spread Operator----")


// 3.1 Dado el siguiente array, crea una copia usando spread operators.
const pointsList = [32, 54, 21, 64, 75, 43]

const pointListCopy = [...pointsList]
console.log(pointListCopy)

// 3.2 Dado el siguiente objeto, crea una copia usando spread operators.
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

const toyCopy = {...toy}
console.log(toyCopy)

// 3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando 
// spread operatos.
const pointsList1 = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];

const allPointsList = [...pointsList1, ...pointsLis2]
console.log(allPointsList)

// 3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos 
// con spread operators.
const toy1 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

const toy1Updated = {...toy1, ...toyUpdate}
console.log(toy1Updated)

// 3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 
// pero sin editar el array inicial. De nuevo, usando spread operatos.
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const colorsCopy = [...colors]
colorsCopy.splice(1,1)
console.log(colorsCopy)

//* Iteración #4: Map
console.log("----Iteración #4: Map----")


// 4.1 Dado el siguiente array, devuelve un array con sus nombres 
// utilizando .map().
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const usersNames = users.map( user => {return user.name})
console.log(usersNames)

// 4.2 Dado el siguiente array, devuelve una lista que contenga los valores 
// de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que 
// empiece por 'A'.
const users2 = [
	{id2: 1, name2: 'Abel'},
	{id2:2, name2: 'Julia'},
	{id2:3, name2: 'Pedro'},
	{id2:4, name2: 'Amanda'}
];

const users2List = users2.map( user => {
	if (user.name2[0] === "A") {
		return "Anacleto"
	} else {
		return user.name2
	}
})
console.log(users2List)

// 4.3 Dado el siguiente array, devuelve una lista que contenga los valores 
// de la propiedad .name y añade al valor de .name el string ' (Visitado)' 
// cuando el valor de la propiedad isVisited = true.
const cities = [
	{isVisited:true, cityName: 'Tokyo'}, 
	{isVisited:false, cityName: 'Madagascar'},
	{isVisited:true, cityName: 'Amsterdam'}, 
	{isVisited:false, cityName: 'Seul'}
];

const citiesVisited = cities.map (city => {
	if (city.isVisited === true ) {
		return `${city.cityName} (Visited)` 
	} else {
		return city.cityName
	}
})

console.log(citiesVisited)

//* Iteración #5: Filter
console.log("----Iteración #5: Filter----")


// 5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los valores que sean mayor que 18
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const agesFiltered = ages.filter( age => age > 18)
console.log (agesFiltered)

// 5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los valores que sean par.
const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const evenAges = ages2.filter( age => age % 2 === 0)
console.log(evenAges)

// 5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los streamers que tengan el gameMorePlayed = 'League of Legends'.
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const lolStreamers = streamers.filter( streamer => streamer.gameMorePlayed === "League of Legends")
console.log (lolStreamers) 

// 5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos 
// usar la funcion .includes() para la comprobación.
const streamers2 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const streamers2Filtered = streamers2.filter( streamer => streamer.name.includes("u"))
console.log(streamers2Filtered)

// 5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan 
// el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion 
// .includes() para la comprobación.
// Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando 
// .age sea mayor que 35.

const streamers2Filtered2 = streamers2
	.filter( streamer => 
		streamer.gameMorePlayed.includes("Legends")
	).map(streamer => {if (streamer.age > 35) {
		streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase()
		return streamer
	} else {return streamer}} 
	)
console.log(streamers2Filtered2)

// 5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
// los streamers que incluyan la palabra introducida en el input. De esta forma, si 
// introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
// introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
const streamers3 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const filterStreamers = (input) => {
	 const filter = input.value
	 const streamersFiltered = streamers3.filter(streamer => streamer.name.toLocaleLowerCase().includes(filter.toLowerCase()))
	 console.log(streamersFiltered)
}
const input$$ = document.querySelector("[data-function='toFilterStreamers3']");
input$$.addEventListener("change", () => {filterStreamers(input$$)})

// 5.7 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
// los streamers que incluyan la palabra introducida en el input. De esta forma, si 
// introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i', 
// me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
// En este caso, muestra solo los streamers filtrados cuando hagamos click en el button.
const streamers4 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const input2$$ = document.querySelector("[data-function='toFilterStreamers4']");
const btn$$ = document.querySelector("[data-function='toShowFilterStreamers4']");
btn$$.addEventListener("click", () => {filterStreamers(input2$$)})
