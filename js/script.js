

class Destination {


    constructor (nom,prix_jour,continent,ani=false,dej=false) {
        this._nom = nom;
        this._prix = prix_jour;
        this._img = nom.replace(/\s/g, '');

        this._continent = continent;
        this._animaux = ani;
        this._petitdej = dej;

    }

    get nom() { return this._nom; }
    get prix() { return this._prix; }
    get img() { return this._img; }
    get continent() { return this._continent; }
    get animaux() { return this._animaux; }
    get petitdej() { return this._petitdej; }
}

var tabDest = [];

tabDest.push(new Destination('new york',500,'amérique'));
tabDest.push(new Destination('los angeles',100,'amérique'));
tabDest.push(new Destination('paris',400,'europe',false,true));
tabDest.push(new Destination('amsterdam',200,'europe'));
tabDest.push(new Destination('dakar',120,'afrique'));
tabDest.push(new Destination('hawaii',350,'amérique'));
tabDest.push(new Destination('johannesbourg',260,'afrique'));
tabDest.push(new Destination('le caire',420,'afrique'));
tabDest.push(new Destination('miami',410,'amérique'));
tabDest.push(new Destination('noumea',390,'océanie'));
tabDest.push(new Destination('rio',650,'amérique'));
tabDest.push(new Destination('pekin',500,'asie',true));
tabDest.push(new Destination('rome',320,'europe'));
tabDest.push(new Destination('sidney',480,'océanie'));
tabDest.push(new Destination('singapour',500,'océanie'));
tabDest.push(new Destination('tokyo',460,'asie'));

function drawDestinations () {


    let template = document.querySelector("#listeDest");
    let i = 0;
    
    for (const dest of tabDest) {
        /*console.log(dest);*/
        let clone = document.importNode(template.content,true);

        clone.getElementById("imgDest").src = "../images/"+dest.img+".jpg"
        /*console.log("../images/"+dest.img+".jpg");*/

        nom = clone.getElementById("destNom").innerHTML.replace(/{{nom}}/g,dest.nom);
        clone.getElementById("destNom").innerHTML = nom;
        prix = clone.getElementById("destPrix").innerHTML.replace(/{{prix}}/g,dest.prix);
        clone.getElementById("destPrix").innerHTML = prix;


        clone.getElementById("Validator").href = "reservation.html?id="+i;

        clone.getElementById("div").id = "destDiv"+i;

        document.getElementById("section").appendChild(clone);
        i++;
    }
    resetFilter()
    applyFilter()
}

function applyFilter() {

    let form = document.forms["filter"];

    let chosenContinents = [];
    let continents = ["europe","amérique","asie","océanie","afrique"];


    for (cont of continents) {
        if (document.getElementById(cont).checked) {chosenContinents.push(cont);}
    }

    // on change l'affichage du prix
    document.getElementById("prix_min").innerHTML = document.getElementById("range_min").value;
    document.getElementById("prix_max").innerHTML = document.getElementById("range_max").value;

    document.getElementById("range_min").setAttribute("max", document.getElementById("range_max").value);
    document.getElementById("range_max").setAttribute("min", document.getElementById("range_min").value);


    let i=0;
    for (dest of tabDest) {

        let afficher = true;

        // vérification du continent
        if (chosenContinents.includes(dest.continent) == false ) {afficher = false;}

        // vérification des animaux
        if (document.getElementById("animaux").checked && (dest.animaux == false)) {afficher = false;}

        // vérification du petit deg
        if (document.getElementById("petitdej").checked && (dest.petitdej == false)) {afficher = false;}

        // vérification du prix
        if (dest.prix < document.getElementById("range_min").value || dest.prix > document.getElementById("range_max").value) {afficher = false;}

        // on affiche si c'est bon ou on cache
        if (afficher) {
            document.getElementById("destDiv"+i).style.display = "block";
        }
        else {
            document.getElementById("destDiv"+i).style.display = "none";
        }

        i++;
    }

}

function resetFilter() {

  let continents = ["europe","amérique","asie","océanie","afrique"];

  for (cont of continents) {
      document.getElementById(cont).checked = true;
  }
  document.getElementById("animaux").checked = false;
  document.getElementById("petitdej").checked = false;

  // on cherche le prix du voyage le moins cher et celui du plus cher
  let prix_min = tabDest[0].prix;
  let prix_max = tabDest[0].prix;

  for (dest of tabDest) {
    if (dest.prix < prix_min){
      prix_min = dest.prix;
    }
    else if (dest.prix > prix_max){
      prix_max = dest.prix;
    }
  }

  // on change les valeurs des barres de séléction des prix en fonction
  document.getElementById("range_min").setAttribute("min", prix_min)
  document.getElementById("range_min").setAttribute("max", prix_max)
  document.getElementById("range_min").value = prix_min;

  document.getElementById("range_max").setAttribute("min", prix_min)
  document.getElementById("range_max").setAttribute("max", prix_max)
  document.getElementById("range_max").value = prix_max;

  // on change aussi l'affichage
  document.getElementById("prix_min").innerHTML = prix_min;
  document.getElementById("prix_max").innerHTML = prix_max;

  applyFilter();
}
