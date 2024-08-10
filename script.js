let x = document.querySelector(".submit");
let y = document.querySelector(".clear");
let output = document.querySelector(".output");

x.addEventListener("click",()=>{
    let date = parseInt(document.querySelector(".date").value);
    let month = parseInt(document.querySelector(".month").value)-1; // -1 because js mein 0 based indexing hota hai
    let year = parseInt(document.querySelector(".year").value);
    const todayDate = new Date();
    let displayYear = todayDate.getFullYear() - year;
    let displayMonth = todayDate.getMonth() - month;
    if(todayDate.getDay() < date){ //agar date kam hai toh month ek kam ho jayega
        displayMonth -= 1;
    }
    if(todayDate.getMonth() < month) { // agar month kam hai toh year kam hoga aur voh year ke 12 months ko month mein add kardo
        displayYear -= 1;
        displayMonth += 12;
    }
    output.innerHTML = `${displayYear} Year and ${displayMonth} Month`;
})
y.addEventListener("click",()=>{
    output.innerHTML = ``;
    document.querySelector(".date").value = "";
    document.querySelector(".month").value = "";
    document.querySelector(".year").value = "";
})