// var startGame = prompt("Would you like to fight a rat?");
// if(startGame.toLowerCase() == "yes") {
// 	alert("Alright!, Lets do this!")
// }
// it was giving me problesm with alert and prompt

class Hero {
	constructor(name, type) {
		this.name = name;
		this.type = type;
		this.damage;
		this.range;
		this.movement;

		if(type === 'ranger') {
			this.damage = 10;
			this.range = 4;
			this.movement = 4;
		} else if (type === 'warrior') {
		this.damage = 12;
		this.range = 2;
		this.movement = 5;
		}
	}
		sayName() {
			return(`Hello my name is ${this.name}, and i am a ${this.type}!`);
		}
	static motto() {
		console.log("To protect all that is good!")
	}
}


let trog = new Hero("trogdor", 'warrior');
class Monster {
		constructor(name, hp, damage, size) {
		this.name = name;
		this.size = size;
		this.hp = hp;
		this.damage = damage;
	}	
	movement() {
		if(this.size === "large") {
			return 3;
		} else if (this.size === "medium") {
			return 4;
		} else {
			 return 5;
		}
	}
}
console.log(trog.range);
console.log(trog.sayName());

class Minion extends Monster {
	constructor(name, hp, damage) {
		super(name, hp, damage)
		this.size = "small";
	}
}

var rat = new Minion('sneaky rat', 2, 3);
console.log(rat.size);
console.log(rat.hp)

let numberOfMonsters = [10, 12, 8, 15, 6, 20];

let generate = (a, b, c, d, e, f) => {
	return (a + b + c + d + e + f)/6 
};
console.log(generate(...numberOfMonsters));

let hit = () => {
	let chance = Math.random() * 4;
	if (chance > 2) {
		return true;
	} else {
		return false;
	}
};

let promise = new Promise(function(resolve, reject) {
	if(hit) {
		console.log('prmise hit')
		resolve(console.log("You hit for " + trog.damage + "!"));
	} else {
		// 		console.log('prmise not hit')

		// reject( new Error("You missed"));
	}
});

console.log(trog.damage);
promise.then(function() {
	console.log(rat);
	console.log(rat.hp-trog.damage);
}).catch(function(err){ 
	if (err) console.log('there was an error', err) ;
});

// alert("You most likely killed the rat!");


//GENERATOR
let names = ["john", "alex", "max", "patrice"];

function* makeID() {
	var index = 0;
	while(true)
		yield names[Math.floor(Math.random()*4)] + index++;
}

var makesID = makeID();

console.log(makesID.next().value);
console.log(makesID.next().value);

var s = new Set();
s.add("bogTroll").add("spider").add("bats");
console.log(s.size);





/*          Practice with Duncan                    
						or more accurately following along while duncan made this XD
*/

var fs = require('fs');

// var lulwatdir = function(path){
var dirpath = '../../'

var lulwatdir = function(path){

return new Promise(function(resolve, reject){
	fs.readdir(path, function(err, data){
		if (err) throw err;
		// console.log('you should fire')
		resolve(data);
	});
});
}(dirpath);

var lulwatfile = function(name, dirpath){
	return new Promise(function(resolve, reject){
		fs.readFile(dirpath + name, function(err, data){
			if (err) reject(err);
			resolve(data.toString());
		});
	});
}('text.js', dirpath)


lulwatdir.then(function(data){
	lulwatfile.then(function(data){
		console.log(data);
	}).catch(function(err){
		throw	 err;
	})
}).catch(function(err){
	console.log()
	throw err;
});







