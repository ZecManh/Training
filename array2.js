//array methods
var courses = [
    {
        id:1,
        name:'JS',
        coin:200
    },
    {
        id:2,
        name:'HTMl',
        coin:300
    },
    {
        id:3,
        name:'HTMl,JS',
        coin:400
    },
    {
        id:4,
        name:'Onana',
        coin:20
    }
    
    

]

// courses.forEach(function(course,index){
//   console.log(index,course)
// });  //duyet phan tu trong mang

// var isFree= courses.every(function(course,index){
//   return course.coin ===0;
//   });  //lap qua cac phan tu trong mang den khi co dieu kien sai thi dung lai va tra ve false
//   //kiem tra tat ca phan tu phai thoa man dieu kien j do se tra ve true
//   console.log(isFree)

// var isFree= courses.some(function(course,index){
//     return course.coin ===0;
//     }); // kiem tra tat ca phan tu thoa man dieu kien j do gap phan tu dung tra ve true
//     //chi can 1 ong free thi tra ve true
// console.log(isFree)

    // var course= courses.find(function(course,index){
    //     return course.name === 'Onana';
    //     });
    // console.log(course)
//     //kiem tra tat ca phan tu neu true tra ve phan tu da dc tim kiem
// //mong muon ket qua tra ve 1 phan tu (ko tra ve nhieu phan tu neu trung)
//neu false tra ve undefine


// var course= courses.filter(function(course,index){
//     return course.name === 'Onana';
//     });
// console.log(course)
// //filter gan giong find neu true tra ve tat ca phan tu(danh sach) thoa man dieu kien


//map:chinh sua hoac them trong doi tuong

// var newCourses = courses.map(function(course,index){
//     return{
//         id:course.name,
//         name:`Khoa hoc : ${course.name}`,
//         coin:`Tien : ${course.id}`,
//         index:index,
//         originArray:course,
//     }


// })
// console.log(newCourses)


//reduce:mong muon tra ve ket qua duy nhat
// bien luu tru
//thuc hien viec luu tru

//accumulator:bien luu tru
//0:gia tri khoi tao gan cho acuumulator trong lan chay dau tien




// var totalCoin = courses.reduce(function(accumulator,currentValue){

//     return accumulator + currentValue.coin;

// },0)
var depthArray = [1,2,[3,4],[5,6],[7,8],9]

var flatArray = depthArray.reduce(function(total,currentArray){
    return  total.concat(currentArray)
},[])

console.log(flatArray)


//includes method 

var title = 'Responsive'

console.log(title.includes('web',0)) 

//0: vi tri bat dau tim kiem

//kiem tra xem web co trong title ko, co tra ve tru