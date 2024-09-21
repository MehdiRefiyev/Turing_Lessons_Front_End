// Saitləri Say: Bir string götürün və string-də olan saitlərin (a, e, i, o, u) sayını qaytaran funksiya yazın.
// ---------------------------------------

var str = 'Salam menim adim Mehdi-di' ;

function getSaitler(str){

    let newarr = []

    for (let i = 0;  i < str.length; i++) {
        const element = str[i];
        if (element == 'a' || element == 'e' || element == 'i' || element == 'o' || element == 'u' ) {
            newarr.push(element);
        }
    }
    
    console.log(newarr.length);
};

getSaitler(str);

// GPT Version 
// var str = 'Salam menim adim Mehdi-di';

// function getSaitler(str) {
//     let vowels = 'aeiou'; // define a string of vowels
//     let vowelCount = str.split('').filter(char => vowels.includes(char)).length; // split the string and filter based on vowels
//     console.log(vowelCount);
// }

// getSaitler(str);



//  Bir string götürün və onu tərsinə çevirən funksiya yazın.
// -----------------------------------------------------

function reverseText(str) {
    return str.split("").reverse().join("");
}

console.log(reverseText(str));


//  Verilmiş string-in palindrom olub-olmadığını (ön tərəfdən və tərsinə oxuduqda eyni olub-olmadığını) yoxlayan funksiya yazın.
// -----------------------------------------------------
function arrayEquals(a, b){

	if (a.length !== b.length) return false;

	for (var i = 0; i < a.length; i++) {
		if (a[i] !== b[i]) return false;
	}

	return true;
};
function palidrom(str){

    let normalText = str.split('');

    let resversStr =  normalText.reverse();

    console.log(arrayEquals(normalText , resversStr));
     
}

palidrom("mama")


// const doc = document;
// console.log(document);


// String-dəki hər sözün ilk hərfini böyük yazan funksiya yazın.
// -----------------------------------------------------

// String-də təkrarlanan simvolları silən funksiya yazın. Məsələn, "salam" stringi "salm" olmalıdır.
// -----------------------------------------------------
// Bir cümlə və bir söz götürən və həmin sözün cümlədə neçə dəfə təkrarlanmasını qaytaran funksiya yazın.
// --------------------------------------------------------------
//  Bir string və iki simvol götürən, string-də birinci simvolu ikinci simvolla əvəzləyən funksiya yazın.
// --------------------------------------------------------------
// String-dəki ən uzun sözü tapan funksiya yazın.
// --------------------------------------------------------------
// Verilmiş string-dən bütün rəqəmləri çıxaran funksiya yazın.