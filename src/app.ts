import * as orm from "./models/orm";

const mainORM = async() => {

console.log(await orm.getPosts());
console.log(await orm.insertPost("ius primae noctis", "Alessandro Barbero", "è una credenza popolare, infondata."));
console.log(await orm.insertPost("Impero", "Alberto Angela", "l'impero romano attraverso il viaggio di una moneta"));
console.log(await orm.deletePost("65ad297a4d0c7cad0a2e5c03"));//esempio per verificare funzionamento
console.log(await orm.updatePost("65ad26d80c61c494fc4df5c4",{ titolo: "Quando eravamo padroni del mondo", autore: "Aldo Cazzullo", testo: "gli strascichi dell'impero" } ));
}

mainORM();
