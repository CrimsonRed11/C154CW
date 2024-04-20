//Registering component in Collider.js
AFRAME.registerComponent("flying-birds",{
    init: function(){
        for(var i = 1; i <= 50; i++){
            //id
            var id =`hurdle${i}`;

            //position Variables 
            var posX = Math.floor(Math.random()* 3000 + -1000);
            var posY = Math.floor(Math.random()* 2 + -1);
            var posZ = Math.floor(Math.random()* 3000 + -1000);
            var position ={ x: posX, y:posY, z: posZ}
            // call the function 
            this.flyingBirds(id, position);
        
        }
    },
    flyingBirds: (id,position) => {
        //Get the terain element 
        var terrainE1 = document.querySelector("#terrain");

        //creating bird model entity 
        var birdE1 = document.createElement("a-entity");

        //setting mu;tiple attributes
        birdE1. setAttribute("id", id);
        birdE1. setAttribute("position", position);
        birdE1.setAttribute("scale", {x:500, y:500, x:500});

        birdE1.setAttribute("gltf-model","./assets/models/flying_bird/scene.gltf")

        //animated models
        birdE1.setAttribute("animation-mixer",{});

        //appent the bird entity as the child of the terain entity

        terrainE1.appendChild(birdE1);



    }
});
