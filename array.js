//create array
var languages = [
    'Java',
    'PHP',
    'Ruby',
]
// console.log(languages)
// console.log(languages.length)//do dai mang
// console.log(languages[0]) //lay phan tu trong mang tu vi tri bat ky
// console.log(Array.isArray({})) // kiem tra xem co phai kieu array ko

//JS array method

var languages2 =[
    'JS',
    'PHP',
    'Ruby',
]
console.log(languages2.toString()) //covert array to string
console.log(languages2.join('-'))  //chuyen mang ve chuoi va ngan cach nhau bang -
console.log(languages2.pop())  //xoa element cuoi mang va tra ve phan tu da xoa
console.log(languages2.push('Dart')) //them 1 hoac nhieu phan tu cua mang va tra ve do dai moi cua mang
console.log(languages2.shift()) //xoa phan tu dau mang tra ve gia tri da xoa
console.log(languages2.unshift('Dart'))  //them 1 hoac nhieu phan tu vao dau mang va tra ve do dai moi cua mang
console.log(languages2.splice(1,1,'Dart')) //xoa 1 vi tri bat ki trong array(vi tri,so phan tu muon xoa,pha tu duoc them vao tai vi tri )

console.log(languages.concat(languages2)) //hop nhat mang

console.log(languages2.slice(1,2))  //cat mang(vi tri bat dau, vi tri ket thuc)
console.log(languages2.slice(0))  //copy mang
console.log(languages2.slice(-2,-1))
