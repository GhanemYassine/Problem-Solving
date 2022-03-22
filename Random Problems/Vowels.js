    function vowels(str) {
        const vow=["a","e","i","o","u"];
        let cnt=0;
        for(let i of str) {
            if(vow.includes(i)){
                cnt+=1;
            }
        }
        return cnt;
    }

console.log(vowels('aeiouhhhhhhhhhhhhhuuuuuuu'));