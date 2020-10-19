function formulaire() {
    var a = document.forms["informations"]["lastname"].value;
    var b = document.forms["informations"]["firstname"].value;
    var c = document.forms["informations"]["email"].value;
    var d = document.forms["informations"]["tel"].value;
    var e = document.forms["informations"]["datedépart"].value;
    var f = document.forms["informations"]["dateretour"].value;
    var g = document.forms["informations"]["adultes"].value;
    var h = document.forms["informations"]["enfants"].value;
    var i = document.forms["informations"]["petitdej"].value;
    var j = document.forms["informations"]["renseignements"].value;
}




function prix() {
    var i = document.getElementById("ad").value;
    var j = document.getElementById("en").value;
    var k = document.getElementById("pe").value;
    if (k=false) {
        l = 0;
    } else {
        l = 1;
    }
    P = ((i*x)+(j*(40/100)*x)+(i+j)*12*l);
    document.getElementById("prix").innerHTML= "Prix total : " + P + "€";
}




function test() {
document.getElementById(id1).innerHTML = a;
}

function completer() {
    document.getElementById("nom").innerHTML= "Nom : " + a;
    document.getElementById("prenom").innerHTML= "prénom : " + b;
    document.getElementById("mail").innerHTML= "Adresse email : " + c;
    document.getElementById("tel").innerHTML= "Numéro de téléphone : " + d;
    document.getElementById("depart").innerHTML= "Date de départ : " + e;
    document.getElementById("arrivee").innerHTML= "Date d'arrivée : " + f;
    document.getElementById("adulte").innerHTML= "Nombre d'adultes : " + g;
    document.getElementById("enfant").innerHTML= "Nombre d'enfants : " + h;
    document.getElementById("petitdej").innerHTML= "Petit déjeuner inclus ? " + i;
    if (j!="Rensignements") {
        document.getElementById("renseignements").innerHTML= "Renseignements supplémentaires : " + j;
    }
}