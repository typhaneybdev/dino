
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
        };


    // Create Dino Objects
    const triceratops  = new Animal(
            "Triceratops",
            13000,
            114,
            "herbavor",
            "North America",
            "Late Cretaceous",
            "First discovered in 1889 by Othniel Charles Marsh",
            "images/triceratops.png"
            );
    const tyrannosaurus  = new Animal(
            "Tyrannosaurus Rex",
            11905,
            144,
            "carnivor",
            "North America",
            "Late Cretaceous",
            "The largest known skull measures in at 5 feet long.",
            "images/tyrannosaurus rex.png"
        );
    const anklyosaurus  = new Animal(
            "Anklyosaurus",
            10500,
            55,
            "herbavor",
            "North America",
            "Late Cretaceous",
            "Anklyosaurus survived for approximately 135 million years.",
            "images/anklyosaurus.png"
        );
    const brachiosaurus  = new Animal(
            "Brachiosaurus",
            70000,
            "372",
            "herbavor",
            "North America",
            "Late Jurasic",
            "An asteroid was named 9954 Brachiosaurus in 1991.",
            "images/brachiosaurus.png"
        );
    const stegosaurus  = new Animal(
            "Stegosaurus",
            11600,
            79,
            "herbavor",
            "North America, Europe, Asia",
            "Late Jurasic to Early Cretaceous",
            "The Stegosaurus had between 17 and 22 seperate places and flat spines.",
            "images/brachiosaurus.png"
        );
    const elasmosaurus  = new Animal(
            "Elasmosaurus",
            16000,
            59,
            "carnivor",
            "North America",
            "Late Cretaceous",
            "Elasmosaurus was a marine reptile first discovered in Kansas.",
            "images/elasmosaurus.png"
        );
    const pteranodon  = new Animal(
            "Pteranodon",
            44,
            20,
            "carnivor",
            "North America",
            "Late Cretaceous",
            "Actually a flying reptile, the Pteranodon is not a dinosaur.",
            "images/pteranodon.png"
        );
    const pigeon  = new Animal(
            "Pigeon",
            0.5,
            9,
            "herbavor",
            "World Wide",
            "Holocene",
            "All birds are living dinosaurs.",
            "images/pigeon.png"
        );
      
    // Create Human Object
    const human = new Animal();
    
    //add objects to an array 
    const creatureArray = [];
    creatureArray.push(triceratops,tyrannosaurus,anklyosaurus,brachiosaurus,human,stegosaurus,elasmosaurus, pteranodon, pigeon);
        
     
    // Use IIFE to get human data from form
    //source:https://www.youtube.com/watch?v=NxVCq4p0Kb0
    //https://developer.mozilla.org/en-US/docs/Glossary/IIFE

    const humanData = (function() {
            human.image = "images/human.png";
            species = document.getElementById('name').value;

                    
                   // const getHumanData = function() {
                   //     species = document.getElementById('name').value;
                        
                   //  };
                    // const species = "document.getElementById('name').value;";
                    
                    // human.diet = document.getElementById('diet').value;
                    // human.fact = //pick from compare method
                   
                    // human.weight = document.getElementById('weight').value;  
                    // human.fact = ""  
                    // human.fact = document.getElementById('fact').value;  
                    //need to caculate feet and inches for height
                    //let feet = document.getElementById('feet').value;
                    //let inches = document.getElementById('inches').value;    
            
        })(human);
    console.log(creatureArray);
        
    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
     // Add tiles to DOM
    const grid = document.getElementById('grid');
    const gridItem = document.querySelector('.grid-item')
    

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
            tileFact.innerHTML = creatureArray[i].fact; //needs to display random facts for dinos only object keys math.random
            }
    };


    // Remove form from screen
    function toggleForm() { 
    const toggleMe = document.getElementById('dino-compare');
    toggleMe.remove(toggleMe);
    }

    //add to click
    //toggleForm() 

    //On button click, prepare and display infographic
    const compareMe = document.getElementById('btn');
    
    compareMe.addEventListener('click', toggleForm);
    compareMe.addEventListener('click', createTile);
    compareMe.addEventListener('click', humanData);
  
        













