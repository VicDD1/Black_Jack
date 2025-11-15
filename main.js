function create(tagname, text, parent) {
    const element = document.createElement(tagname)
    element.innerText = text
    parent.appendChild(element)
    return element
}
standbutton=document.querySelector("#standButton")
hitbutton=document.querySelector("#hitButton")

var cartes = [2,3,4,5,6,7,8,9,10,10,10,10,"A"]
var hand = []
var dealerhand = []
var canhit= true
var canstand= true
var dillerscore = document.querySelector("#DillerHand")
var playerscore = document.querySelector("#PlayerHand")
var scoredeal=0
var scorejoueur=0

for(let i =0; i<2; i++){
    const rand = Math.floor(Math.random()*13);
    if(cartes[rand]=="A" ){
        let sum=0 
        for (let i = 0; i < hand.length; i++) {
            sum += hand[i]
        }
        if (sum+11>21){
            hand.push(1)
        }
        else{
            hand.push(11)
        }
    
    }
    else{
        hand.push(cartes[rand])
    }
    console.log("Main joueur : ",hand)
    const randi = Math.floor(Math.random()*13);
    if(cartes[randi]=="A" ){
        let sum=0 
        for (let i = 0; i < dealerhand.length; i++) {
            sum += dealerhand[i]
        }
        if (sum+11>21){
            dealerhand.push(1)
        }
        else{
            dealerhand.push(11)
        }
    
    }
    else{
        dealerhand.push(cartes[randi])
    }
    console.log("Main dealer : ",dealerhand)
}
scoredeal+=dealerhand[0]
dillerscore.innerText=scoredeal
standbutton.addEventListener("click",event =>{
    if(canstand){
        canstand=false
        canhit=false
        scoredeal+=dealerhand[1]
        dillerscore.innerHTML=scoredeal
        while (scoredeal<17)
        {
            let cartesdeal=2
            const randi = Math.floor(Math.random()*13);
            if(cartes[randi]=="A" ){
                let sum=0 
                for (let i = 0; i < dealerhand.length; i++) {
                    sum += dealerhand[i]
                }
                if (sum+11>21){
                    dealerhand.push(1)
                }
                else{
                        dealerhand.push(11)
                }
            }
            else{
                dealerhand.push(cartes[randi])
            }

            scoredeal+=dealerhand[cartesdeal]
            dillerscore.innerText=scoredeal
            cartesdeal+=1
        }
    }
});
hitbutton.addEventListener("click",event =>{
    if(canhit){
    const rand = Math.floor(Math.random()*13);
    if(cartes[rand]=="A" ){
        let sum=0 
        for (let i = 0; i < hand.length; i++) {
            sum += hand[i]
        }
        if (sum+11>21){
            hand.push(1)
        }
        else{
            hand.push(11)
        }

    }
    else{
        hand.push(cartes[rand])
    }
    let sum_total=0
    for(let i =0; i<hand.length; i++){
        for (let i = 0; i < hand.length; i++) {
            sum_total+= hand[i]
        }
        if (sum_total>=21){
            canhit=false
        }
        else{
            canhit=true
        }
    }
    }
    console.log("Main joueur : ",hand)
});
