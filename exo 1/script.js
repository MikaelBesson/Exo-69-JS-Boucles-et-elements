


let buttonEnvoyer = document.getElementById('envoyer');
buttonEnvoyer.addEventListener('click', function (event){
    event.preventDefault();
    let ajoutez = document.getElementById('ajoutez');
    let valueajoutez = ajoutez.value;
    let liste1 = document.getElementById("liste-commissions");
    let item = document.createElement("li");
    item.append(valueajoutez);
    function recette(){
        liste1.append(item);
    }
    recette();

})

let buttonretirer = document.getElementById('suprimer');
buttonretirer.removeEventListener('click', function (event){
   event.preventDefault();


})









