let element = document.getElementsByClassName('jeu');
element.style.backgroundColor = "red";
jeu.addEventListener('click', () => {
    alert('Bouton cliqué!');

    text = jeu.getTextElement;
    const val = ["Pierre, Feuille, Ciseaux"];
    indice = Math.floor((Math.random() * 3));
    if (val[indice] == text){
    
    }


});