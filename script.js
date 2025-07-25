
document.getElementById("monBouton").onclick = function() {

    document.getElementById("message").innerHTML = "🎉 Bravo! Tu es un vrai développeur maintenant !";
    
    // Change la couleur du bouton
    this.style.backgroundColor = "#8ba9acff";
    this.style.color = "#021f02f8";
};

document.getElementById("deuxiemeBouton").onclick = function() {
    
document.getElementById("message2").innerHTML = "Congratulations you're one step closer!";
    
    this.style.backgroundColor = "#4ecdc4";
    this.style.color = "#021f02";
};

document.getElementById("verifier").onclick = function() {
    let reponse = document.getElementById("reponse").value.toLowerCase();
    let resultat = document.getElementById("resultat-exercice");
    
    if (reponse === "school") {
        resultat.innerHTML = "🎉 Correct ! Well done !";
        resultat.style.color = "green";
    } 
    else {
        resultat.innerHTML = "❌ Essaie encore ! (Indice : ça commence par 'sch')";
        resultat.style.color = "red";
    }
};