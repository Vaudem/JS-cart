var log= function(data){
	console.log(data);
};	


var Product = function(n,p){
	this.name = n;
	this.price = p;
};

var product1 = new Product("......buns",0.59);
var product2 = new Product("..bacons", 2.39);
var product3 = new Product("cheeses",1.49);
var product4 = new Product("...pickles",1.49);
var product5 = new Product("....onions", 1.29);


log(product1);
log(product2);
log(product3);
log(product4);
log(product5);


var arr = [];
log(arr);

var count = 0;


/*
var addProduct2 = function(){
		count = (count + product2.price)*100/100;
		document.getElementById("listePanier").innerHTML += `${product2.name} | prix : ${product2.price} EUR <br>`;	
		document.getElementById("count").innerHTML = `${count}EUR`;
		return arr.push(product2);	
};


var addProduct3 = function(){
		count = (count + product3.price)*100/100;
		document.getElementById("listePanier").innerHTML += `${product3.name} | prix : ${product3.price} EUR <br>`;	
		document.getElementById("count").innerHTML = `${count}EUR`;
		return arr.push(product3);
};


var addProduct4 = function(){
		count = count + product4.price;
		document.getElementById("listePanier").innerHTML += `${product4.name} | prix : ${product4.price} EUR <br>`;	
		document.getElementById("count").innerHTML = `${count}EUR`;
		return arr.push(product4);
};


var addProduct5 = function(){
		count = (count + product5.price)*100/100; 
		document.getElementById("listePanier").innerHTML += `${product5.name} | prix : ${product5.price} EUR <br>`;	
		document.getElementById("count").innerHTML = `${count}EUR`;
		return arr.push(product5);
};

DON'T REPEAT YOURSELF...
*/


var addProduct = function(product){
		count = count + product.price;
		var countfixed = count.toFixed(2); 
		document.getElementById("listePanier").innerHTML += `${product.name} | prix : ${product.price} EUR <br>`;	
		document.getElementById("count").innerHTML = `${countfixed}EUR`;
		return arr.push(product);
};


var click = function(){
		document.getElementById("un").addEventListener("click", function(){
		addProduct(product1);
		affichePanier();

	});
		document.getElementById("deux").addEventListener("click", function(){
		addProduct(product2);
		affichePanier();
	});
		document.getElementById("trois").addEventListener("click", function(){
		addProduct(product3);
		affichePanier();
	});
		document.getElementById("quatre").addEventListener("click", function(){
		addProduct(product4);
		affichePanier();
	});
		document.getElementById("cinq").addEventListener("click", function(){
		addProduct(product5);
		affichePanier();
	});
};

click();



var affichePanier = function(){
	var divPanier = document.getElementById("panier");
	divPanier.innerHTML = `( ${arr.length} &hearts; ) `;
	log(arr);

};

affichePanier();


