

class Destination {


    constructor (nom,prix_jour) {
        this._nom = nom;
        this._prix = prix_jour;
        this._img = nom.replace(/\s/g, '');
        
    }

    get nom() { return this._nom; }
    get prix() { return this._prix; }
    get img() { return this._img; }
}

var tabDest = [];

tabDest.push(new Destination('new york',500));
tabDest.push(new Destination('los angeles',100));
tabDest.push(new Destination('paris',400));
tabDest.push(new Destination('amsterdam',200));
tabDest.push(new Destination('dakar',120));
tabDest.push(new Destination('hawaii',350));
tabDest.push(new Destination('johannesbourg',260));
tabDest.push(new Destination('le caire',420));
tabDest.push(new Destination('miami',410));
tabDest.push(new Destination('noumea',390));
tabDest.push(new Destination('pekin',500));
tabDest.push(new Destination('rio',650));
tabDest.push(new Destination('rome',320));
tabDest.push(new Destination('sidney',480));
tabDest.push(new Destination('singapour',500));
tabDest.push(new Destination('tokyo',460));



function drawDestinations () {


    let template = document.querySelector("#listeDest");
    let i = 0
    for (const dest of tabDest) {
        console.log(dest);
        let clone = document.importNode(template.content,true);

        clone.getElementById("imgDest").src = "../images/"+dest.img+".jpg"
        console.log("../images/"+dest.img+".jpg");

        nom = clone.getElementById("destNom").innerHTML.replace(/{{nom}}/g,dest.nom);
        clone.getElementById("destNom").innerHTML = nom;
        prix = clone.getElementById("destPrix").innerHTML.replace(/{{prix}}/g,dest.prix);
        clone.getElementById("destPrix").innerHTML = prix;


        clone.getElementById("Validator").href = "reservation.html?id="+i;

        document.getElementById("section").appendChild(clone);
        i++;
    }
}