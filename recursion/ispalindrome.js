function ispalindrome(str){
    if(!str.length) return true;
    if(str[0]!== str[str.length-1]) return false;
    return  ispalindrome(str.slice(1,-1));
    
}
console.log(ispalindrome('amanaplanacanalpanama'));
console.log(ispalindrome('amanaplanacanalpandemonium'));
console.log(ispalindrome('yasay'));
console.log(ispalindrome('zyayz'));

