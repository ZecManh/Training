/**
 * for:lap voi dieu kien dung
 * for/in: lap qua key cua doi tuong
 * for/of:lap qua value cua doi tuong
 * while :lap khi dieu kien dung
 * do/while:lap it nhat 1 lan , sau do lap khi dieu kien dung
 */
for (var i = 1; i <= 1000; i++) {
  console.log(`i = ${i}`);
}

var myArray = ["JS", "PHP", "SQL"];
var araylength = myArray.length;
for (var i = 0; i < araylength; i++) {
  console.log(myArray[i]);
}

//for/in
var myInfo = {
    name:'manh',
    age:18,
    address:'Hanoi'
}
for (var key in myInfo){ // thuoc tinh trong doi tuong gan vao key theo dang chuoi

    console.log(myInfo[key])
}
var languages = ['Java','PHP']

for(var key in languages){
    console.log(languages[key])
}

var myString = 'Javascript'
for(var key in myString){
    console.log(myString[key])
}

//for/of(ko su dung voi object neu dung phai bien doi 1 chut)
var languages2 = ['JS','PHP','SQd']
var languages3 = 'dădawdawd'

for (var value of languages2){
    console.log(value)
}
for (var value2 of languages3){
    console.log(value2)
}

var myInfo2 = {
    name2:'Son Dang',
    age:18
}
for(var key of Object.keys(myInfo2)){
    console.log(myInfo[key])
}
for(var key of Object.values(myInfo2)){
    console.log(key)
}

