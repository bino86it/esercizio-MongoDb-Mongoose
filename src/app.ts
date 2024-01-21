import * as orm from "./models/orm";

const mainORM = async() => {

console.log(await orm.getPosts());
console.log(await orm.insertPost("ius primae noctis", "Alessandro Barbero", "è una credenza popolare, infondata."));
console.log(await orm.deletePost("65ac16740ec05ae5edb498c2"));//esempio per verificare funzionamento
}

mainORM();
