var i = 0;
var lg = ["JS", "PSP", "ĐÂ"];
// while(i<1000){
//     i++;
//     console.log(i);

// }
while (i < lg.length) {
  console.log(lg[i]);
  i++;
}

//do while : dung hay sai van chay it nhat 1 lan
var a = 0;

var isSuccess = false;

do {
  i++;
  console.log("Nap the lan" + i);
  //thanh cong
  if (true) { //that bai: if(false)
    isSuccess = true;
  }
} while (!isSuccess && i < 3);

//break:thoat khoi vong lap
//continue:tiep tuc lap va bo qua dk ko thoa man

var myArray = [
    [1,2],
    [3,4],
    [5,6]
]
for(var i =0;i<myArray.length;i++){
    for(j=0;j<myArray[i].length;j++){
        console.log(myArray[i][j])
    }
}

for(var i =100;i>0;i-=5){
    console.log(i)
}