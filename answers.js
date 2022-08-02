for(let i = 0; i < 20; i++){
    console.log(i)
} 
// Easy Going answered

for(let i = 0; i < 200; i++){
    console.log(i)
}
// Get Even answered

// Fizz Buzz 
for( let i = 0; i < 100; i++) {
    if( i % 15 === 0 ){ //divisible by 3 and 5 log "FizzBuzz"
        console.log("FizzBuzz", i)
    }
    else if( i % 5 === 0 ){ //divisible by 5 log "Buzz"
        console.log("Buzz", i)
    }
    else if( i % 3 === 0 ){ //divisible by 3 log "Fizz"
        console.log("Fizz", i)
    }
}  

// Wild Wild Life

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
             //  0        1     2         3
const sharky = ["Sharky", "shark", 20, "Left Coast"]
            //   0          1       2       3
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
               //    0         1        2       3
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
                //  0        1     2       3
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
            //  0             1           2       3
//change Plantee's array to reflect her being a year older
plantee[2] += 1 ;
console.log(plantee[2])
//Change Wolfy's hometown from "Yukon Territory" to "Gotham City"
wolfy.pop();
wolfy.push("Gotham City");
console.log(wolfy);
//Give D'Art a second hometown by adding "Hawkins"
dart.push("Hawkins");
console.log(dart);
//Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy"
wolfy.splice(0,1,"Gameboy");
console.log(wolfy);

// Yell at the Ninja Turtles
const ninja =["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
for(const member of ninja) {
    console.log(member.toUpperCase());
}


//Methods, Revisited

const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
                  //  0                   1                       2                        3                 4                  5                6                7                 8            9                      10            11        12       13           14                 15             16               17             18 
                  
console.log (favMovies.indexOf("Titanic"));//Console log: the index of Titanic

favMovies.sort(); //use the .sort method (sort by alphabet)
console.log(favMovies);

favMovies.pop(); //Use the method pop( removed last iteam)
console.log(favMovies);

favMovies.push("Guardians of the Galaxy"); // push "Guardians of the Galaxy" (add the iteam)
console.log(favMovies);

favMovies.reverse(favMovies) //Reverse the array (top to bottom, bottom to top)
console.log(favMovies);

favMovies.shift("Fast and Furious"); //Use the shift method to remove "Fast and Furious"(Removed first iteam on list)
console.log(favMovies);

let index = favMovies.indexOf("Django Unchained"); //splice "Django Unchained" and add "Avatar" (replace with avatar)
favMovies.splice(index,1,"Avatar");
console.log(favMovies);


let lastHalf = [];//slice the last half of the array (show only last half)
let length = favMovies.length;
lastHalf = favMovies.slice (Math.floor(length / 2),length +1); 
console.log(lastHalf);
console.log(favMovies);

//Where is Waldo
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert", ["Lucinda", "Jacc", "Neff", "Snoop"], ["Petunia", ["Baked Goods", "Waldo"]]];
                      //       0              1                         2                                3
                      
whereIsWaldo.splice(whereIsWaldo.indexOf("Eggbert"),1);//Remove Eggbert
console.log(whereIsWaldo);

whereIsWaldo[1][2] = "No one";//Change "Neff" to "No One"
console.log(whereIsWaldo);

console.log(whereIsWaldo[2][1][1]);//Access and console.log "Waldo"

// Excited Kitten

const  kittyTalk = ["...human...why you taking pictures of me?...","...the catnip made me do it...","...why does the red dot always get away..." ];
let meow = 0 ;
for (let i =0 ; i <= 20 ; i++)
{
  if (i % 2 == 0){
    meow =  Math.floor(Math.random() * 3) ;
    console.log (kittyTalk[meow]);
    }
    else 
        console.log ( "Love me, pet me! HSSSSSS!");

}

//Find the Median

const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

let calculateMedian = function (arr){
    arr.sort();
    let median = 0;
    let length = arr.length;
    if (length % 2 != 0 )
    median = arr[Math.floor(length / 2)]
    else 
    median = (arr[length/2]+arr[(length/2)-1]) / 2
  return median;  
  }

console.log (calculateMedian(nums))


//Hungry for More

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

  
let kristynsShoe = kristynsCloset.shift();
thomsCloset[2].push (kristynsShoe);
console.log(kristynsCloset);
console.log(thomsCloset);// 

let kristynOutfit = ["cowboy boots", "right sock", "GA hoodie", "green pants", "yellow knit hat", "marshmallow peeps"]
let thomOutfit = [["grey button-up", "dark grey button-up", "light blue button-up", "blue button-up"], ["grey jeans", "jeans", "PJs"], ["wool mittens", "woolscarf", "raybans","left shoe"]]

for (let i=0; i<3; i++) {
    let kristyRandom = Math.floor (Math.random()*6)
    kristynOutfit.push(kristynsCloset[kristyRandom]) 
}

for (let i=0; i<3; i++) {
    let thomsRandom = Math.floor(Math.random()*thomsCloset[i].length)
    thomOutfit.push(thomsCloset[i][thomsRandom]) 
}

console.log(`Kristy will wear "${kristynOutfit[0]}", "${kristynOutfit[1]}", and "${kristynOutfit[2]}"`)

console.log(`Thoms will wear "${thomOutfit[0]}", "${thomOutfit[1]}", and "${thomOutfit[2]}"`)
  
for (const item of kristynsCloset) {
    console.log(`WHIRR: Now washing ${item}`);
}


for (let i=0; i<thomsCloset.length; i++) {
    for (let x=0; x<thomsCloset[i].length; x++) {
    console.log(`Thoms have "${thomsCloset[i][x]}" in his closet`)
    }
} 
