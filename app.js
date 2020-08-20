   // source https://scotch.io/tutorials/how-to-use-the-javascript-fetch-api-to-get-data
   // source: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON

   //dino json path
   (async () => {
       //global variables 
       const grid = document.getElementById('grid');
       const gridItem = document.querySelector('.grid-item')

       const dinos = await fetch("dino.json") // retieve dino objects from json 
           .then(result => result.json())
           .then(result => result.Dinos);
       console.log(dinos);

       // Create (Dino)Animal) Constructor
       function Animal(species, weight, height, diet, where, when, fact, image) {
           this.species = species;
           this.weight = weight;
           this.height = height;
           this.diet = diet;
           this.where = where;
           this.when = when;
           this.fact = fact;
           this.image = image;
       }

       const dinosaurs = dinos.map(dinos => new Animal(dinos));
       console.log(dinosaurs);

    })();


   //display random facts
   // Animal.prototype.getRandom = function() {
   //     return this.fact[Math.floor(Math.random() * this.fact.length)];
   // };

   // console.log(dinosaurs);

   // let allDinos = data.Dinos;
   // console.log(allDinos);


   // //Create Human Object
   // const humanObj = new Animal('Humam');
   // console.log(humanObj);   


   // let animalArray = [];
   // animalArray.push({humanObj}, allDinos[0], allDinos[1], allDinos[2], allDinos[3], allDinos[4], allDinos[5], allDinos[6], allDinos[7]);
   // console.log(animalArray);

   // console.log(animalArray[3].weight);                
   // })

   //Generate Tiles for each Dino in Array
   // generateTile() {
   //     tiles.push(animalArray);
   // }





   // .catch(function(error) {
   // })













   // // Create Dino Objects
   // const triceratops = new Animal(
   //     "Triceratops",
   //     13000,
   //     114,
   //     "Herbavor",
   //     "North America",
   //     "Late Cretaceous",
   //     ["First discovered in 1889 by Othniel Charles Marsh", "The Triceratops weighed 13000 lbs.", "The Triceratops is a herbavor"],
   //     "images/triceratops.png"
   // );
   // const tyrannosaurus = new Animal(
   //     "Tyrannosaurus Rex",
   //     11905,
   //     144,
   //     "Carnivor",
   //     "North America",
   //     "Late Cretaceous",
   //     ["The largest known skull measures in at 5 feet long.", "The Tyrannosaurus Rex became famous in Jurasic Park.", "The Tyrannosaurus is a carnivor."],
   //     "images/tyrannosaurus rex.png"
   // );
   // const anklyosaurus = new Animal(
   //     "Anklyosaurus",
   //     10500,
   //     55,
   //     "Herbavor",
   //     "North America",
   //     "Late Cretaceous",
   //     ["Anklyosaurus survived for approximately 135 million years.", "The Anklyosaurus weighed 10500 lbs,", "The Anklyosaurus is from the late creatureArray period."],
   //     "images/anklyosaurus.png"
   // );
   // const brachiosaurus = new Animal(
   //     "Brachiosaurus",
   //     70000,
   //     372,
   //     "Herbavor",
   //     "North America",
   //     "Late Jurasic",
   //     ["An asteroid was named 9954 Brachiosaurus in 1991.", "The Brachiosaurus weighed 70000", "The Brachiosaurus is from the Late jurasic period."],
   //     "images/brachiosaurus.png"
   // );
   // const stegosaurus = new Animal(
   //     "Stegosaurus",
   //     11600,
   //     79,
   //     "Herbavor",
   //     "North America, Europe, Asia",
   //     "Late Jurasic to Early Cretaceous",
   //     ["The Stegosaurus had between 17 and 22 seperate places and flat spines.", "The Stegosaurus is a herbavor", "The Stegosaurus weighs 11600 lbs."],
   //     "images/brachiosaurus.png"
   // );
   // const elasmosaurus = new Animal(
   //     "Elasmosaurus",
   //     16000,
   //     59,
   //     "Carnivor",
   //     "North America",
   //     "Late Cretaceous",
   //     ["Elasmosaurus was a marine reptile first discovered in Kansas.", "The Elasmosaurus is from the late cretaceous period", "The Elasmosaurus weighed 16000 lbs."],
   //     "images/elasmosaurus.png"
   // );
   // const pteranodon = new Animal(
   //     "Pteranodon",
   //     44,
   //     20,
   //     "Carnivor",
   //     "North America",
   //     "Late Cretaceous",
   //     ["Actually a flying reptile, the Pteranodon is not a dinosaur.", "The Pteranodon is from the late cretaceous period", "I was found in North America"],
   //     "images/pteranodon.png"
   // );
   // const pigeon = new Animal(
   //     "Pigeon",
   //     0.5,
   //     9,
   //     "Herbavor",
   //     "World Wide",
   //     "Holocene",
   //     ["All birds are living dinosaurs."],
   //     "images/pigeon.png"
   // );

   // Create Human Object
   // let human = new Animal();

   const humanData = () => {
       // Use IIFE to get human data from form
       //source:https://www.youtube.com/watch?v=NxVCq4p0Kb0
       //https://developer.mozilla.org/en-US/docs/Glossary/IIFE
       (function(human) {
           human.image = "images/human.png";
           human.species = document.getElementById('name').value;
           human.diet = document.getElementById('diet').value;
           human.weight = document.getElementById('weight').value;
           human.feet = document.getElementById('feet').value;
           human.inches = document.getElementById('inches').value;
           human.fact = [getDiet(), getWeight(), getHeightDif()];

           //add objects to an array 
           creatureArray.push(
               triceratops,
               tyrannosaurus,
               anklyosaurus,
               brachiosaurus,
               human,
               stegosaurus,
               elasmosaurus,
               pteranodon,
               pigeon);
       })(human);
   };

   //empty array for Animal objects
   const creatureArray = [];

   // compare methods
   const getWeight = () => {
       if (human.weight < anklyosaurus.weight); {}
       return `The Anklyosaurus weighs ${anklyosaurus.weight - human.weight}lbs more than you!`;
   };

   const getDiet = () => {
       if (human.diet === "Carnivor") {
           return `You have the same diet as a ${pteranodon.species}, ${tyrannosaurus.species}, and the ${elasmosaurus.species}!`;
       } else if (human.diet === "Herbavor") {
           return `You have the same diet as a ${pigeon.species}, ${stegosaurus.species}, ${brachiosaurus.species}, ${anklyosaurus.species}, and a ${triceratops.species}!`;
       } else {
           return `Your diet doesn't match any of these Dinosaurs.`
       }
   };

   const getHeightDif = () => {
       const humanInches = parseInt(human.feet * 12) + parseInt(human.inches);
       if (humanInches > anklyosaurus.height);
       return `You are taller than an ${anklyosaurus.species}!`;
   };

   // Generate Tiles for each Dino in Array
   function createTile() {
       for (let i = 0; i < creatureArray.length; i++) { //loop though array to dynamically add card data
           const newTile = document.createElement('div');
           const tileTitle = document.createElement('h3');
           const tileImg = document.createElement('img');
           const tileFact = document.createElement('p');

           newTile.className = 'grid-item';
           grid.appendChild(newTile);
           newTile.appendChild(tileTitle);
           newTile.appendChild(tileImg);
           newTile.appendChild(tileFact);

           tileTitle.innerHTML = creatureArray[i].species;
           tileImg.setAttribute('src', creatureArray[i].image);
           tileFact.innerHTML = creatureArray[i].getRandom();
       }
   };

   // Remove form from screen
   function toggleForm() {
       const toggleMe = document.getElementById('dino-compare');
       toggleMe.classList.add("hide");
   }

   //On button click, prepare and display infographic
   const compareMe = document.getElementById('btn');
   compareMe.addEventListener('click', function(e) {
       humanData(); //get human data
       createTile(); // Add tiles to DOM
       toggleForm(); //remove form
   })