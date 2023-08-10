//object(trong object co key and value)
let myInfo = {
  name:'Manh',
  age:22,
  address:'Ha Noi',
  [emailKey]:'dawdawdwwda',
  getName : function(){
    return this.name;
  }
}
myInfo.email = 'sondn@gmail.com' //tao key and value moi
myInfo['email-title'] = 'daw'  //tao key dac biet
console.log(myInfo.age) 
//lay key theo 2 cach
console.log(myInfo.name)
console.log(myInfo['email-title'])
//
var myKey = 'address'
console.log(myInfo[myKey])
//tao key va dua vao object
var emailKey = 'email'
//xoa key value trong object
delete myInfo.address
console.log(myInfo.getName())
//fuction --> phuong thuc /method
//others --> thuoc tinh / property

//object constructor

//tao mo ta ve doi tuong
function User (firstName,lastName,avatart){
  this.firstName =firstName;
  this.lastName = lastName
  this.avatart = avatart;

  this.getName = function (){
    return `${this.firstName} ${this.lastName}`
  }
}
//tao doi tuong
var author = new User('Nham','Manh','dawd')
var author2 = new User('Nam','da','dawd')

author.title  ='chia se f8' //them thuoc tinh moi cho doi tuong
author2.comment = 'lieu co khoa' //them thuoc tinh moi cho doi tuong
console.log(author)
console.log(author2)

//object prototype

function User (firstName,lastName,avatart){
    this.firstName =firstName;
    this.lastName = lastName
    this.avatart = avatart;
  
    this.getName = function (){
      return `${this.firstName} ${this.lastName}`
    }
  }
User.prototype.className = 'F8'  //them 1 thuoc tinh ben ngoai ham tao
User.prototype.getClassName = function(){ //them phuong thuc vao ham tao
    return this.className;
}


//Math object

/**
 * Math.PI():so pi
 * Math.round():lam tron
 * Math.abs():tri tuyet doi
 * Math.ceil():lam tron tren
 * Math.floor():lam tron duoi
 * Math.random():random so tu 0 -> 0.99999
 * Math.min():so nho nhat
 * Math.max():so lon nhat
 */



