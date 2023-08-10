// //fuction:1 khoi ma thuc thi 1 viec cu the

// /**
//  * -khong thuc thi khi dc dinh nghia
//  * - se thuc thi khi dc goi
//  * - co the nhan tham so
//  * - co the tra ve 1 gia tri
//  */
// function showDialog() {
//     alert('Hi Manh')
// }
// showDialog()

// /**
//  * Tham so: la 1 gia tri dc truyen vao khi goi fuction
//  * kieu du lieu:khong gioi han
//  * Tinh private:chi su dung dc bien message trong function
//  * 
//  */
// function writeLog(message,message2){ //trong qua trinh dinh nghia message:tham so
//     if(message){
//         console.log(message)
//     }
// }
// writeLog('dawdawd',2);  //khi dc goi dawdawd la doi so

// /**
//  * argument
//  */

// function writeLog2() {
//     console.log(arguments)
// }
// writeLog2('Log1','Log2')

// function writeLog3 (){
//     var myString = '';
//     for(var param of arguments){
//         myString += `${param} -`
//     }
//     console.log(myString)
// }
// writeLog3('log1','log2','log3')

// function add(a,b){
//     return a+b;
// }
// var result = add(6,10)
// console.log(result)

function writeLog4 (){
    var myString =''
    for(var param of arguments){
        myString = myString +' '+ `${param} +`
    }
    console.log(myString)
}
writeLog4('1','2','3')

