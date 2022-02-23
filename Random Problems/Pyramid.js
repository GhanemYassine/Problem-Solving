//Sol 1
function Steps(n){
    for(let row=0; row<n; row++){
        let level='';
        for(let col=0; col<((n*2)-1); col++){
            if(col<=row){
                level+="#";
            }else{
                level+=' ';
            }
        }
        console.log(level);
    }
}