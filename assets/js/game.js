//set up player's robot
var playerName = window.prompt("What is your robot's name");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//log values in console.log
console.log(playerName, playerAttack, playerHealth);

// set up enemy robot
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

// creating a fight function expression
var fight = function () {
    
    window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?  Enter 'FIGHT' or 'SKIP' to choose.");
        console.log(promptFight)
        // if player chooses to fight then fight
        if(promptFight === "FIGHT" || promptFight ==="fight") {

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
        //end fight section

        //if play skips
        } else if(promptFight === "SKIP" || promptFight === "skip") {
            var confirmSkip = window.confirm("are you sure you want to skip the fight?  It's gonna cost you.");
            //if yes TRUE, leave the fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight.  Goodbye!")
                //subtract the cost for skipping
                playerMoney=playerMoney - 2
            }
            // if no FALSE ask the question again
            else {
                fight()
            }

        } else {
            window.alert("You need to choose a valid option.  Try again!");
        } 
        //end skip section       
};

fight();

