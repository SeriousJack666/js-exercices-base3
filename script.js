
var books = [
{
  title: 'CSS: The Definitive Guide',
  author: 'Eric Meyer',
  image: 'https://covers.oreillystatic.com/images/0636920012726/lrg.jpg',
  type: 'css'
},
{
  title: 'CSS Development with CSS3',
  author: 'Zachary Kingston',
  image: 'https://covers.oreillystatic.com/images/0636920057970/lrg.jpg',
  type: 'css'
},
{
  title: 'You Don\'t Know JS: Up & Going',
  author: 'Kyle Simpson',
  image: 'https://covers.oreillystatic.com/images/0636920039303/lrg.jpg',
  type: 'js'
},
{
  title: 'Programming JavaScript Applications',
  author: 'Eric Elliott',
  image: 'https://covers.oreillystatic.com/images/0636920033141/lrg.jpg',
  type: 'js'
},
{
  title: 'Modern JavaScript Develop and Design',
  author: 'Ullman Larry',
  image: 'https://www.booktopia.com.au/http_coversbooktopiacomau/big/9780321812520/modern-javascript.jpg',
  type: 'js'
}
] ;



var  arrKeys, arrKeysEntries, boX, divBook, ulBook, liBook;

boX = document.getElementById("listBox");


//______________pour chaque livre, créé une div
for (var i = 0; i < books.length; i++) {
	
	var book = books[i];
	divBook = document.createElement("DIV");
	divBook.setAttribute("id", "book"+(i+1));	
	boX.appendChild(divBook);

	//__________dans cette div, créé un ul
	ulBook = document.createElement("UL");
	ulBook.setAttribute("id", "listKeys"+(i+1));
	divBook.appendChild(ulBook);
	
	arrKeysEntries = Object.entries(books[i]);
	arrKeys = Object.keys(books[i]);

	//__________dans cet ul, créé les li
	for (var j = 0; j < arrKeysEntries.length; j++) {
		liBook = document.createElement("LI");
		liBook.setAttribute("id", arrKeys[j]);
		liBook.appendChild(document.createTextNode(arrKeysEntries[j][0]+" /_________/ "+ arrKeysEntries[j][1]));
		ulBook.appendChild(liBook);
	}
}

 

//__________________au clic du bouton JS
document.getElementById("js").addEventListener("click", event => {
	for ( var i = 0; i < books.length; i++ ){
		var book = books[i];
		if ( book.type == "css"){
			document.getElementById("book"+(i+1)).style.display = "none";
		}
		else {
			document.getElementById("book"+(i+1)).style.display = "";
		}
	}
});


//________________au clic du bouton CSS
document.getElementById("css").addEventListener("click", event => {
	for ( var i = 0; i < books.length; i++ ){
		var book = books[i];
		if ( book.type == "js"){
			document.getElementById("book"+(i+1)).style.display = "none";
		}
		else {
			document.getElementById("book"+(i+1)).style.display = "";
		}
	}
});