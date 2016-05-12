
window.gotChars = [
	"Arya Stark",
	"Bran Stark",
	"Brienne",
	"Bronn",
	"Tyrion",
	"Lady Olenna",
	"Catelyn Stark",
	"Cersei Lannister",
	"Cersei",
	"Daarlo Naharis",
	"Daenerys Targaryen",
	"Davos",
	"Davos Seaworth",
	"Drogo",
	"Eddard Stark",
	"Ellaria Sand",
	"High Sparro",
	"Jaime Lannister",
	"Jon Snow",
	"Joffery Baratheon",
	"Petyr Baelish",
	"Robb Stark",
	"Robert Baratheon",
	"Samwell Tarly",
	"Sansa Stark",
	"Sansa",
	"Varys",
	"Tyrion Lannister",
	"Tywin Lannister",
	"Stannis",
	"Khaleesis",
	"Littlefinger",
	"Sam Tarly",
	"Ned Stark",
	"Lyanna Stark",
	"Lyanna",
	"Arya",
	"Lord Bolton",
	"Tommen",
	"High Sparrow",
	"Ramsay Bolton",
	"Theon Greyjoy"
];

window.kardashians = [
	"Kim Kardashian",
	"Khloé Kardashian",
	"Kylie Jenner",
	"Kris Jenner",
	"Kourtney Kardashian",
	"Caitlin Jenner",
	"Rob Kardashian"
];
walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;
	
	if (node.tagName && (node.tagName.toLowerCase() == 'input' || node.tagName.toLowerCase() == 'textarea'
	    || node.classList.contains('ace_editor'))) {
		return;
	}

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	//http://stackoverflow.com/questions/5915096/get-random-item-from-javascript-array
	var v = textNode.nodeValue;
	var re = new RegExp("\\b" + window.gotChars.join("|") +"\\b" ,"g");
	v = v.replace(re, window.kardashians[Math.floor(Math.random()*kardashians.length)]);
	textNode.nodeValue = v;
}


