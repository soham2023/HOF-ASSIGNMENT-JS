const input = "We are going to Reverse This String";

function reverseString(input) {
  return input.split("").reverse().join("");
}
const reversed = reverseString(input);

setTimeout(()=>
{
    console.log(reversed);
},2000)







