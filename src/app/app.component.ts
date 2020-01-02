import { Component } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practicasAngular';
  
}

let promesa1 = new Promise ( function (resolve, reject ){

  setTimeout(() => {
    console.log("Promesa Terminada");
    // resolve();
    reject();
  }, 1500)
})
console.log("Paso 1");

promesa1.then( function () {
  console.log("Ejecutar cuando se termine bien");
},
function(){
  console.error("Ejecutar si sale mal");
})

console.log("Paso 2")
// function getNombre( nombre:string, objeto:string = 'parametros', momento?:string){

//   let mensaje:string;

//   if( momento ){

//     mensaje = ` ${nombre} activo los ${objeto} en la ${momento}`;
//   }else{
//     mensaje = ` ${nombre} activo los ${objeto}`;
//   }

  

//   console.log(mensaje);
// }

// let infoAlumn = {
//   nombre: "Alan",
//   apellido: "Cruz",
//   fechaNa: "06/05/1995",
//   edad: "24 años", 
//   matricula: 201426184
// }
// let {nombre, apellido, fechaNa, edad, matricula} =  infoAlumn;

// console.log( nombre, apellido, fechaNa, edad, matricula);

// let heroes:string[] = ["Batman, Super, Hulk"];

// let [ bruce, banner, thompson] = heroes;

// console.log(bruce, banner, thompson);
// interface Microsoft{
//   nombre: string,
//   poder: string
// }

// function mision(guerrero:Microsoft){
//   console.log("Enviando a:" + guerrero.nombre);
// };

// function bienvenida(guerrero:Microsoft){
//   console.log("Bienvenido :" + guerrero.nombre);
// };


// let halo:Microsoft ={
//   nombre:" MasterChief",
//   poder:" SuperFuerza"
// }
// mision(halo);
// bienvenida(halo);

// class hombre{
//   nombre: string = undefined;
//   sexo: string = undefined;
//   tieneHermanos: boolean = true;
//   cantidad:number = 2;

//   constructor( nombre:string, sexo:string){
//     this.nombre = nombre;
//     this.sexo = sexo;
//   }
// }

// let humano: hombre = new hombre("Roberto", "Masculino");
// console.log(humano);

function control( constructor: Function){
  console.log(constructor);

}
@control

class Videojuegos{
  constructor(public nombre:string){
  }
}