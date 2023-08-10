/** Cac kieu du lieu:String,number,boolean,symbol,null,undefine*/
// var f = 3 +"2"
// console.log(f)
// var a = 2
// var b = 3
// var c = 'A' && 'B' && 'C' && 'D'
// console.log(c)
// var d = null || NaN || 'C'
// console.log(d)
// if(c){
//     console.log('true')
// }else{
//     console.log('false')
// }
// if(d){
//     console.log('true')
// }else{
//     console.log('false')
// }
// /*chuoi*/ 
// var fullName = "Nham \\"
// console.log(fullName)
// var firstName = "Nham"
// var lastName = "Manh"
// console.log(`Toi la : ${firstName} ${lastName}`)
/** lam viec voi chuoi(string method)*/
var myString = "Hoc JS tai F8!"
console.log(myString.length) //do dai chuoi
console.log(myString.indexOf('JS',6)) //tim vi tri dau tien cua chuoi hoac chuoi dau tien tu vi tri nao do
console.log(myString.lastIndexOf('JS')) //tim vi tri cuoi cung trong chuoi
console.log(myString.search('JS')) //tim kiem theo biue thuc chinh quy
console.log(myString.slice(4,6)) // cat chuoi tu dau den dau
console.log(myString.slice(6)) //cat chuoi tu 6 den het
console.log(myString.replace(/JS/g,'PyTHon')) // thay chuoi nay thanh chuoi khac (/JS/g:bieu thuc chinh quy(tim tat ca chuoi la JS))
console.log(myString.toUpperCase()) // viet hoa tat ca chu cai
console.log(myString.toLowerCase()) //viet thuong tat ca chu cai
console.log(myString.trim()) // loai bo khoang trang thua o dau cuoi
var languages = 'Java, PHP, Ruby'
console.log(languages.split(', ')) //tach chuoi thanh 1 mang
console.log(myString.charAt(0)) // tim ki tu o vi tri bat ki

