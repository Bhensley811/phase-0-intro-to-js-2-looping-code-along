

const recipient = ["Guadalupe", "Ollie", "Aki"]

function writeCards(recipient){
    
    let greetings = []

    for (let i = 0; i < recipient.length; i++){
         greetings.push(`Thank you, ${recipient[i]}, for the wonderful surprise gift!`)
         
    }
    
    return greetings
}

writeCards(recipient)


function countDown(){
    let countdown = 10;
    while (countdown  >= 0) {
      console.log(countdown--);
    }

}