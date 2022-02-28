import "../css/componentes.css";
// import webPackLogo from "../assets/img/webpack-logo.png";


export const saludar = ( nombre ) => {

    console.log("Creando etiqueta h1");

    const h1 = document.createElement ("h1");
    h1.innerText = `Hola, ${ nombre } !!!`;

    document.body.append (h1);

   
   //**FORMA UTILIZADA EN REACT */
    // // img
    // console.log(webPackLogo);
    // const img = document.createElement("img");
    // img.src = webPackLogo;
    // document.body.append (img);



}