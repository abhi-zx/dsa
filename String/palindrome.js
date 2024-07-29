let str ="abba"
const palindrome = (s)=>{
s= s.split("")

for(var i=0,j=s.length-1;i<s.length && j>0;i++,j--){
    if(s[i]!==s[j])
        return false
}
return s.join("")

}

const ans = palindrome(str)
console.log(ans)