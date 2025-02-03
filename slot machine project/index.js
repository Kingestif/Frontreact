var slot1;
var slot2;
var slot3;
var account = 0;

const prompt = require('prompt-sync')(); 

console.log("Welcome user");
while (true) {
    console.log("1. Deposit");
    console.log("2. Spin");
    console.log("3. Check Balance");
    console.log("4. Quit")
    


    const choice = prompt("Choose......", "4");
    

    if (choice === "1") {
        const add = prompt("How much are you Depositing??", 0);
        account += Number(add);
        console.log("Deposit Successful!!");
    }
    else if (choice === "2") {
        if (account < 5) {
            console.log("Please Deposit atleast $5 in your account");
            continue;
        }

        account -= 5
        slot1 = Math.floor(Math.random() * 6) + 1;
        slot2 = Math.floor(Math.random() * 6) + 1;
        slot3 = Math.floor(Math.random() * 6) + 1;
        console.log("slot1: " + slot1, "slot2: " + slot2, "slot3: " + slot3);
        if (slot1 === slot2 && slot2 === slot3) {
            console.log("Congratulation!! you Earned " + slot1);
            account += (slot1 * 5);
        }else{
            console.log("oops!! you lost try again");
        }
    }else if(choice === "3"){
        console.log("Current Balance: " + account);
    }
    else {
        break;
    }
}


