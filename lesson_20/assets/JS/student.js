// : Student adlı bir konstruktor funksiyası yaradın ki, bu funksiya tələbə obyektləri yarada bilsin və aşağıdakı xüsusiyyətlərə malik olsun:
// name: Tələbənin adı.
// grade: Tələbənin ilkin qiyməti (əgər göstərilməyibsə, 0 olaraq təyin edilsin).
// subject: Tələbənin oxuduğu fənn.
// :
// Student funksiyası yeni tələbə obyektləri yaratmağa imkan vermək üçün new açar sözündən istifadə etməlidir.
// Hər bir tələbə aşağıdakı metodlara malik olmalıdır:
// study(hours): Tələbə neçə saat çalışdığına əsasən qiymətinə bal əlavə edir (1 saat = 5 bal).
// getGrade(): Tələbənin cari qiymətini qaytarır.
// changeSubject(newSubject): Tələbənin fənnini dəyişməyə imkan verir.
// :
// new açar sözündən istifadə edərək yeni tələbə yaradın və metodlardan istifadə edərək qiyməti yeniləyin, fənni dəyişdirin və cari qiyməti göstərin.


function Student(name , grade = 0 , subject ){

    this.name = name;
    this.grade = grade;
    this.subject = subject;

    return{
        study(hours){
            return grade += hours * 5;
        },
        getGrade(){
            return console.log(`telebenin adi ${name} , telebenin bali : ${grade}`);
        },
        changeSubject(newSubject){
            return subject = newSubject;
        },
        getAllData(){
            console.log(name , grade , subject);     
        }
    }

}

let mehdi = new Student("mehdi",50,"Riyaziyat");

mehdi.study(4)

mehdi.getGrade();

mehdi.changeSubject("Fizika");

mehdi.getAllData();

console.log("///////////////////////////////////////////////////////////////////////////////");