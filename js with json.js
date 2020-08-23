        "use strict";

        //create dino tiles for grid
        const tiles = []
        const grid = document.getElementById('grid')

        // Create Animal Constructor
        function Animal(species, weight, height, diet, where, when, fact) {
          this.species = species;
          this.weight = weight;
          this.height = height;
          this.diet = diet;
          this.where = where;
          this.when = when;
          this.fact = fact;
          this.image = 
        };

        // source https://scotch.io/tutorials/how-to-use-the-javascript-fetch-api-to-get-data
        // source: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON

        const url = 'dino.json'; //dino json path

        fetch(url) // retieve dino objects from json 
            .then((resp) => resp.json())
            .then(function(data) {
                let allDinos = data.Dinos;
                console.log(allDinos);
   

                //Create Human Object
                const humanObj = new Animal('Humam');
                console.log(humanObj);   


                let animalArray = [];
                animalArray.push({humanObj}, allDinos[0], allDinos[1], allDinos[2], allDinos[3], allDinos[4], allDinos[5], allDinos[6], allDinos[7]);
                console.log(animalArray);

                console.log(animalArray[3].weight);                
                })

                //Generate Tiles for each Dino in Array
                generateTile() {
                    tiles.push(animalArray);
                }



        .catch(function(error) {
        })

    
     // Use IIFE to get human data from form

     getHuman => {
        let name = document.getElementById('name').value;
        let diet = document.getElementById('diet').value;
        let feet = document.getElementById('feet').value;
        let inches = document.getElementById('inches').value;

     }
 
     getHuman(name);
     console.log(name);

    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
    // generateTile(gridItem) => {
    //     return`<li class="grid-item" data-grid-item="">
    //     <h3 class="grid-item"></h3>
    //     <img class="grid-item" src="">
    //     <p class=grid-item></p>
    //     </li>`;
    // }
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic

function compareDino(getWeightDif){
    for (let i = 0; i < justDinos.length; i++){
        console.log(justDinos[i])
}
};
