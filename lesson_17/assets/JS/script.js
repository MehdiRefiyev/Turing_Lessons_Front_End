// Tapşırıq: Rest operatorundan (...) istifadə edərək istənilən sayda arqument qəbul edən və onların cəmini qaytaran sumAll funksiyasını yazın.

function sumAll(...numbers) {
	return numbers.reduce((accumulator, current) => {
		return accumulator += current;
	});
};

console.log(sumAll(1,2,3,4,5));


// Tapşırıq: [1, 2, 3, 4, 5] array-i verildikdə, array destructuring və rest operatoru istifadə edərək ilk iki elementi dəyişənlərə təyin edin, qalanları isə üçüncü bir dəyişənə yığın.

let arr_1 = [1, 2, 3, 4, 5];

let [a] = arr_1

console.log("birinci teyin olumus element: " + a);

let [,b] = arr_1

console.log("ikinci teyin olumus element: " + b);

let [,,...res] = arr_1

console.log(`ikinci teyin olumus element: ${res}`);





// Tapşırıq: { name: 'John', age: 30, city: 'New York', profession: 'Engineer' } obyektini nəzərə alaraq, rest operatorundan istifadə edərək name və age məlumatlarını çıxarın, qalan xassələri isə başqa bir obyektə yığın.

let person = { name: 'John', age: 30, city: 'New York', profession: 'Engineer' };

const { name , age , ...rest } = person

console.log(name);

console.log(age);

let newObj = {...rest};

console.log(newObj);


// Tapşırıq: İki array qəbul edən və spread operatorundan istifadə edərək onları birləşdirən yeni bir array qaytaran combineArrays funksiyasını yazın.

function combineArrays(a,b){
    return [...a , ...b]
}
console.log(combineArrays([1,10] , [3,4]));

// Tapşırıq: name və age xassələri olan person adlı bir obyekt yaradın. Spread operatorundan istifadə edərək bu obyekti klonlayan və city adlı yeni bir xassə əlavə edən bir funksiyanı yazın.

let newPerson = {name:"Mehdi" , age :20}

function personClon(){
    let newObj = {
        ...newPerson,
        city : 'Quba'
    }
    console.log(newObj);
    
}

personClon();

// Tapşırıq: İki obyekt verilmişdir: { name: 'Alice' } və { age: 25 }. Onları spread operatorundan istifadə edərək tək bir obyektə birləşdirin.Yüksək Səviyyəli Tapşırıqlar

console.log({ ...{ name: 'Alice' } , ...{ age : 25 }});


// Tapşırıq: İstənilən sayda array qəbul edən və onları spread və rest operatorları ilə bir array-ə birləşdirən mergeAndMultiply funksiyasını yazın. Sonra həmin birləşdirilmiş array-dəki bütün ədədlərin hasilini qaytarın.



// Tapşırıq: name və age xassələri olan obyektlərdən ibarət bir array qəbul edən funksiyanı yazın. Rest və spread operatorları ilə hər bir obyektə əlavə sahə əlavə edin və dəyişdirilmiş array-i qaytarın.


// Tapşırıq: Birinci arqument olaraq vurğu qəbul edən və istənilən sayda əlavə arqument qəbul edən multiplyBy funksiyasını yazın. Spread və rest operatorları istifadə edərək, hər bir arqumenti (vurğudan sonra) vurğu ilə vurub array qaytarın.Real Dünyada İstifadə Tapşırığı

function multiplyBy( x , ...variables){

    let  sum = variables.map( i => i*x);

    return sum
}

console.log(multiplyBy(5 , 1,2,3));



// obj ve class arasindaki ferq 

// constructor nedi?