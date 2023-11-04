const valid_Url = (url) => {
    const pattern = /^(https?):\/\/(www\.)?linkedin\.com\/\w+/;
    return pattern.test(url);
}

const url1 = "https://www.google.com/";
const url2 = "https://www.linkedin.com/in/soham-bhunia-00000000a/";

const checkUrl = (url) => {
    if (valid_Url(url)) {
        console.log("Valid URL");
    } else {
        console.log("Invalid URL");
    }
}

checkUrl(url1);
checkUrl(url2);

