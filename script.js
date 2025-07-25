// Quand quelqu'un clique sur le bouton
document.getElementById("monBouton").onclick = function() {
    // Change le texte du paragraphe avec id "message"
    document.getElementById("message").innerHTML = "🎉 Bravo! Tu es un vrai développeur maintenant !";
    
    // Change la couleur du bouton
    this.style.backgroundColor = "#8ba9acff";
    this.style.color = "#021f02f8";
};

document.getElementById("deuxiemeBouton").onclick = function() {
    
    document.getElementById("message2").innerHTML = "Congratulations you're one step closer!";
    
     this.style.backgroundColor = "#4ecdc4";
    this.style.color = "#022202f8";
};