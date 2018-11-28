"use strict"

class Nodo {
	constructor(valor){
		this.raiz = valor;
		this.nodoIzq = null;
		this.nodoDer = null;
	}

	getNodoIzquierdo(){
		return this.nodoIzq;
	}

	getNodoDerecho(){
		return this.nodoDer;
	}

	getRaiz(){
		return this.raiz;
	}

	setNodoIzquierdo(raiz){
		this.nodoIzq = raiz;
	}

	setNodoDerecho(raiz){
		this.nodoDer = raiz;
	}
}

class MetodoArbol {
	constructor(raiz){
		this.raiz = raiz;
	}

	preOrden(raiz) {
		if (raiz !== null) {
			console.log(raiz.getRaiz());
			this.preOrden(raiz.getNodoIzquierdo());
			this.preOrden(raiz.getNodoDerecho());
		};
	}
}

function preOrden(raiz){
		if (raiz !== null) {
			console.log(raiz.getRaiz());
			preOrden(raiz.getNodoIzquierdo());
			preOrden(raiz.getNodoDerecho());
		};
}

class Main {
	insertar() {
		let raiz = new Nodo(1);
		let nodo2 = new Nodo(2);
		let nodo3 = new Nodo(3);

		nodo3.setNodoDerecho(new Nodo(6));
		nodo3.setNodoIzquierdo(new Nodo(5));

		nodo2.setNodoIzquierdo(new Nodo(4));

		raiz.setNodoIzquierdo(nodo2);
		raiz.setNodoDerecho(nodo3);

		//let arbol = new preOrden(raiz);
		const arbol = new MetodoArbol(raiz);
		arbol.preOrden(arbol.raiz);
	}
}

let main = new Main();
main.insertar();
	


