let str = "aabbcdfeeejhhhh"
const removeDuplicate = (s) => {
    s = s.split("");
    let obj = {}
    for (var i = 0; i < s.length; i++) {
        let ele = s[i]
        if (!obj[ele]) {
            obj[ele] = 1
        }
        else
            obj[ele]++
    }

    for (let key in obj) {
        console.log(key)
    }
}

// removeDuplicate(str)

// for loop methods

let str1 = "aabbcdfeeejhhhh"
const removeDuplicate2 = (s) => {
    s = s.split("");
    let ans =[]
    for(var i =0;i<s.length;i++){
        let flage = true
        for(var j =i+1;j<s.length;j++){
            if(s[i]===s[j]){
                flage=false
            }
        }
        if(flage){
        ans.push(s[i])
        }
    }
   console.log(ans.join(''))
}

removeDuplicate2(str1)



