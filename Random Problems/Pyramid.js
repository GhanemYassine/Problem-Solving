//Sol 1
function Pyramid(n){
    for(let row=0; row<n; row++){
        let level='';
        for(let col=0; col<((n*2)-1); col++){
            if(col<=(Math.floor(n*2)-1)/2){
                level+=' ';
            }else{
                level+='#';
            }
        }
        console.log(level);
    }
}
console.log()