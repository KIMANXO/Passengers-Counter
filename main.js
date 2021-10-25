let peopleEntered = 0
function incrementPassangers() {
    peopleEntered += 1
    document.getElementById("count").innerText = peopleEntered;
    console.log("One More Passenger Entered !");
}
function Decrement() {
    peopleEntered -=  1
    document.getElementById("count").innerText = peopleEntered;
    if (peopleEntered < 0) {
        document.getElementById("count").innerText = 0;
        alert("There Are No Passengers Left To Decrement")
    }
}
function Reset() {
    peopleEntered = 0
    document.getElementById("count").innerText = peopleEntered;
}
function Save() {
    document.getElementById("prv").innerText += "  " + peopleEntered + ",";
    peopleEntered = 0;
    
}