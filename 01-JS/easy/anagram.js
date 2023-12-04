function isAnagram(str1,str2)
{
    let l1 = str1.length;
    let l2 = str2.length;

    if(l1 != l2)
    {
        return false;
    }
        
    str1.sort();
    str2.sort();

    for(let i=0;i<l1;i++)
    {
        if(str1[i] != str2[i])
            return false;
    }
    return true;
}

let str1 = ['l','i','s','t','e','n'];
let str2 = ['s','i','l','e','n','t'];

if(isAnagram(str1,str2))
console.log("The strings are Anagram");
else
console.log("the string is not an Anagram");

module.exports = isAnagram;