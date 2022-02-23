//Sol 1
function Steps(n){
    for(let row=0; row<n; row++){
        let stair='';
        for(let col=0; col<n; col++){
            if(col<=row){
                stair+="#";
            }else{
                stair+=' ';
            }
        }
        console.log(stair);
    }
}