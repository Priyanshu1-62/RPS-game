let rock=document.querySelector("#i0");
let paper=document.querySelector("#i1");
let scissors=document.querySelector("#i2");

function solve(val){
    let rando=Math.floor(Math.random() * 3);
    let o1, col;
    if(rando===val){
        o1="Its a Draw! Lucky"
        col="#081b31";
    }
    else if(rando===(val+1)%3){
        o1="You lost..Try Again!!"
        col="red";
        document.querySelector("#cc").innerText++;
    }
    else{
        o1="You Won, Lets GOO !!";
        col="green";
        document.querySelector("#uc").innerText++;
    }
    document.querySelector("#res").innerText=o1;
    document.querySelector("#res").style.backgroundColor=col;
}

rock.addEventListener("click", () => {
    solve(0);
});
paper.addEventListener("click", () => {
    solve(1);
});
scissors.addEventListener("click", () => {
    solve(2);
});
