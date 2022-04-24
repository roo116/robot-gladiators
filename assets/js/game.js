//set up player's robot
var playerName = window.prompt("What is your robot's name");
var playerHealth = 100;
var playerAttack = 10;

//log values in console.log
console.log(playerName, playerAttack, playerHealth);

// set up enemy robot
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

// creating a fight function expression
var fight = function () {
    window.alert("Welcome to Robot Gladiators!");

    // Subtract the the value of playerAttack from the value of enemyHealth and use that result to update the value in enemyHealth var
        enemyHealth = enemyHealth - playerAttack;
    // log result
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
        //  check enemy health
            if (enemyHealth <=0) {
                window.alert(enemyName + " had died!");
            } else {
                window.alert(enemyName + " still has " + enemyHealth + " left!");
            }   
   
    // subtract enemyAttack from playerHealth, update playerHealth var
        playerHealth = playerHealth - enemyAttack;
    // log result
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.")
        // check player's health
           if(playerHealth <= 0) {
               window.alert(playerName + " has died!")
           } else {
               window.alert(playerName + " still has " + playerHealth + " left!")
           }
};


fight();

