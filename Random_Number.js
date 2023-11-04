const randomNumber = (dealy) =>
{
    let time = dealy;
    let intervel;

    console.log("The Random Number is Generating in "+time+"S!");

    intervel = setInterval(()=>
    {
        time--
        if (time === 0)
        {
            clearInterval(intervel);
            const num = Math.floor((Math.random()*1000)+1);
            console.log("The Random Number is Generated "+num);
        }
        else 
        {
            console.log("The Random Number is Generating in "+time+"S!"); 
        }
    },1000);
}

let dealy = 3;
randomNumber(dealy);

