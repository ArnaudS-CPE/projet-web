

class Destination {


    constructor (nom,prix_jour,continent,ani=false,dej=false) {
        this._nom = nom;
        this._prix = prix_jour;
        this._img = nom.replace(/\s/g, '');

        this._continent = continent;
        this._animaux = ani;
        this._ptidej = dej;
        
    }

    get nom() { return this._nom; }
    get prix() { return this._prix; }
    get img() { return this._img; }
    get continent() { return this._continent; }
    get animaux() { return this._animaux; }
    get ptidej() { return this._ptidej; }
}

var tabDest = [];

tabDest.push(new Destination('new york',500,'amérique'));
tabDest.push(new Destination('los angeles',100,'amérique'));
tabDest.push(new Destination('paris',400,'europe'));
tabDest.push(new Destination('amsterdam',200,'europe'));
tabDest.push(new Destination('dakar',120,'afrique'));
tabDest.push(new Destination('hawaii',350,'amérique'));
tabDest.push(new Destination('johannesbourg',260,'afrique'));
tabDest.push(new Destination('le caire',420,'afrique'));
tabDest.push(new Destination('miami',410,'amérique'));
tabDest.push(new Destination('noumea',390,'océanie'));
tabDest.push(new Destination('pekin',500,'asie'));
tabDest.push(new Destination('rio',650,'amérique'));
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
}

function applyFilter() {

    let form = document.forms["filter"];

    let chosenContinents = [];
    let continents = ["europe","amérique","asie","océanie","afrique"];

    console.log(form.elements);

    for (cont of continents) {
        if (document.getElementById(cont).checked) {chosenContinents.push(cont);}
    }
    console.log(chosenContinents);

    let i=0;
    for (dest of tabDest) {

        let afficher = true;

        if (chosenContinents.includes(dest.continent) ) {
            a=0;
        }
        else {afficher = false;}


        if (afficher) {
            document.getElementById("destDiv"+i).style.display = "block";
        }
        else {
            document.getElementById("destDiv"+i).style.display = "none";
        }

        i++;
    }

}