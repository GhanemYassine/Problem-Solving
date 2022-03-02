// //Sol 1
// function Pyramid(n){
//     const midPoint = Math.floor((2*n-1)/2);
//     for(let row=0; row<n; row++){
//         let level='';
//         for(let col=0; col<2*n-1; col++){
//             if(midPoint - row <= col && midPoint + row >= col){
//                 level+='#';
//             }else {
//                 level+=' ';
//             }
//         }
//         console.log(level);
//     }
// }

//Sol 2
function Pyramid(n , row=0, level=''){
    if(n===row){
        return;
    }

    if(level.length === 2*n-1){
        console.log(level);
        return Pyramid(n, row + 1 );
    }

    const midPoint = Math.floor((2*n-1)/2);
    let add;
    if(midPoint - row <= level.length && midPoint + row >= level.length){
         add = "#";
    }else {
        add = " ";
    }
    Pyramid(n,row, level + add);
}
console.log(Pyramid(5));