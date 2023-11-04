const  valid_Url =(url) => {

    const pattern = /^(https?|http):\/\/[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/gi;
  
    return pattern.test(url);
  }

  const url ="https://www.google.com/";
  
  if (valid_Url(url)) {
    console.log("Valid URL");
  } else {
    console.log("Invalid URL");
}
