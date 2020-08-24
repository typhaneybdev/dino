   // source https://scotch.io/tutorials/how-to-use-the-javascript-fetch-api-to-get-data
   // source: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON
   const createDinoGraph = () => { //create dinographic
       (async () => { //dino json path
           const dino = await fetch("dino.json") // retieve dino objects from json 
               .then(result => result.json())
               .then(result => result.Dinos);

           //grid vairables
           const grid = document.getElementById('grid');
           const gridItem = document.querySelector('.grid-item')


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

           // Create Dino Objects
           const dinosaurs = dino.map(dino => new Animal(
               dino.species,
               dino.weight,
               dino.height,
               dino.diet,
               dino.where,
               dino.when,
               dino.fact,
               dino.image));

           // Create human Object
           const human = new Animal();
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
                   human.fact = [getWeight(), getDiet(), getHeightDif()];
               })(human);
           };

           // compare methods       
           const getWeight = () => {
               if (human.weight < dino.weight);
               return `The ${dino[2].species} weighs ${dino[2].weight - human.weight} lbs more than you!`;
           };

           const getDiet = () => {
               if (human.diet === "Carnivor") {
                   return `You have the same diet as a ${dino[1].species}, ${dino[5].species}, and ${dino[6].species}`;
               } else if (human.diet === "Herbavor") {
                   return `You have the same diet as a ${dino[0].species}, ${dino[2].species}, ${dino[3].species}, ${dino[4].species}, and a ${dino[7].species}!`;
               } else {
                   return `Your diet doesn't match any of these Dinosaurs.`
               }
           };

           const getHeightDif = () => {
               const humanInches = parseInt(human.feet * 12) + parseInt(human.inches);
               if (humanInches < dino[1].height);
               return `You are ${dino[1].height - humanInches} inches shorter than an ${dino[1].species}!`;
           };

           // Generate Tiles 
           const createTile = () => {

               // add human to array
               const creatureArray = dino.splice(4, 0, human);
               //loop though array to dynamically add card data
               for (let i = 0; i < dino.length; i++) {
                   const newTile = document.createElement('div');
                   const tileTitle = document.createElement('h3');
                   const tileImg = document.createElement('img');
                   const tileFact = document.createElement('p');

                   newTile.className = 'grid-item';
                   grid.appendChild(newTile);
                   newTile.appendChild(tileTitle);
                   newTile.appendChild(tileImg);
                   newTile.appendChild(tileFact);

                   tileTitle.innerHTML = dino[i].species;
                   tileImg.setAttribute('src', dino[i].image);

                   //random fact
                   tileFact.innerHTML = dino[i].fact[Math.floor(Math.random() * dino[i].fact.length)];
               }
           };
           // create tiles with human data;
           return createTile(humanData());
       })();
   };

   // Remove form from screen
   function toggleForm() {
       const toggleMe = document.getElementById('dino-compare');
       toggleMe.classList.add("hide");
   }

   //On button click, prepare and display infographic
   const compareMe = document.getElementById('btn');
   compareMe.addEventListener('click', function(e) {
       toggleForm(); //remove form
       createDinoGraph(); // Add tiles to DOM

   })