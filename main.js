function create(tagname, text, parent) {
    const element = document.createElement(tagname)
    element.innerText = text
    parent.appendChild(element)
    return element
}
standbutton=document.querySelector("#standButton")
hitbutton=document.querySelector("#hitButton")
var end=document.querySelector("#endButton")
var state=document.querySelector("#state")
var cartes = [2,3,4,5,6,7,8,9,10,10,10,10,"A"]
var hand = []
var dealerhand = []
var canhit= true
var canstand= true
var dillerscore = document.querySelector("#DillerHand")
var playerscore = document.querySelector("#PlayerHand")
var scoredeal=0
var scorejoueur=0
// Sart 
for(let i =0; i<2; i++){
    let rand = Math.floor(Math.random()*13);
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
    let randi = Math.floor(Math.random()*13);
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
scorejoueur+=hand[0]+hand[1]
playerscore.innerText=scorejoueur

// Stand --> if clicked player cant hit or stand anymore

standbutton.addEventListener("click",event =>{
    if(canstand){
        canstand=false
        canhit=false
        scoredeal+=dealerhand[1]
        while (scoredeal<17){
            scoredeal=0
            let rand = Math.floor(Math.random()*13);
            if(cartes[rand]=="A"){
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
            dealerhand.push(cartes[rand])
            }
            
            for (let i = 0; i < dealerhand.length; i++) {
                scoredeal+=dealerhand[i]    
            }
        }
        if (scorejoueur > 21)
        {
            state.innerText = "Busted"
        }
        else if (scorejoueur==scoredeal){
            state.innerText="Draw"
        }
        else if(scoredeal>scorejoueur && scoredeal<=21){
            state.innerText="Loose"
        }
        else if (scoredeal<scorejoueur || scoredeal>21){
            state.innerText = "Win"
        }
        if(scorejoueur == 21){
            state.innerText+= " : Black Jack"
        }
        dillerscore.innerText=scoredeal
        end.classList.remove("snake")
        end.classList.add("visible")
    }
});

//Hit --> add a card while player hand<21

hitbutton.addEventListener("click",event =>{
    if (canhit){
        let rand = Math.floor(Math.random()*13);
        if(cartes[rand]=="A"){
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
        scorejoueur=0
        for (let i = 0; i < hand.length; i++) {
            scorejoueur+=hand[i]
            if (scorejoueur>=21){
                canhit=false
            }
        }
        playerscore.innerHTML=scorejoueur   
    }
});

end.addEventListener("click",event =>{
    location.reload();
})