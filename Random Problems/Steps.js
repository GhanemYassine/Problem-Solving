//Sol 1
// function Steps(n){
//     for(let row=0; row<n; row++){
//         let stair='';
//         for(let col=0; col<n; col++){
//             if(col<=row){
//                 stair+="#";
//             }else{
//                 stair+=' ';
//             }
//         }
//         console.log(stair);
//     }
// }

//Sol 2
function Steps(n, row=0 , stair=''){
    if(n===row){
        return;
    }
    if(n===stair.length){
        console.log(stair);
        return Steps(n , row+1);
    }
    const add = stair.length<= row ? '#' : ' ';
    Steps(n , row , stair + add);
}

console.log(Steps(3));