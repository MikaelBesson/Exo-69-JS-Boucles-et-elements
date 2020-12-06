


let buttonEnvoyer = document.getElementById('envoyer');
buttonEnvoyer.addEventListener('click', function (event){
    event.preventDefault();
    let ajoutez = document.getElementById('ajoutez');
    let valueajoutez = ajoutez.value;
    let liste1 = document.getElementById("liste-commissions");
    let item = document.createElement("li");
    item.append(valueajoutez);
    liste1.append(item);
})

let buttonretirer = document.getElementById('suprimer');
buttonretirer.addEventListener('click', function (event){
   event.preventDefault();
   let liste = document.getElementsByTagName('li');
   let listeNb =liste.length;
   let dernierLi = liste[listeNb - 1];
   dernierLi.remove();
})









