
var aragorn = {
    name: "Aragorn",
    health: 150,
    attack: 8,
    counter: 20,
    gifPic: '<img class="card-img-top img-fluid" src="./assets/images/aragorn.gif">',

    charCard: '<button class="card" id="character1"><img class="card-img-top img-fluid roster" src="./assets/images/aragorn.gif"><div class="card-body"><h5 class="card-title">Aragorn</h5><p class="card-text">150</p></div></button>',
};
var eowyn = {
    name: "Eowyn",
    health: 120,
    attack: 8,
    counter: 15,
    gifPic: '<img class="card-img-top img-fluid" src="./assets/images/eowyn2.gif">',

    charCard: '<button class="card" id="character2"><img class="card-img-top img-fluid roster" src="./assets/images/eowyn2.gif"><div class="card-body"><h5 class="card-title">Eowyn</h5><p class="card-text">120</p></div></button>',
};
var goblin = {
    name: "Moria Goblin",
    health: 100,
    attack: 14,
    counter: 5,
    gifPic: '<img class="card-img-top img-fluid" src="./assets/images/MoriaGoblin.gif">',

    charCard: '<button class="card" id="character3"><img class="card-img-top img-fluid roster" src="./assets/images/MoriaGoblin.gif"><div class="card-body"><h5 class="card-title">Moria Goblin</h5><p class="card-text">100</p></div></button>',
};
var witchking = {
    name: "Witchking of Angmar",
    health: 180,
    attack: 7,
    counter: 25,
    gifPic: '<img class="card-img-top img-fluid" src="./assets/images/witchking.gif">', 
    
    charCard: '<button class="card" id="character4"><img class="card-img-top img-fluid roster" src="./assets/images/witchking.gif"><div class="card-body"><h6 class="card-title">Witchking of Angmar</h6><p class="card-text">180</p></div></button>',
};

var defeatedEnemies = [];



function playerChoice(choice){
    $("#readyPlayerOne").html(choice.charCard);
        $("#character1").hide();
        $("#character2").hide();
        $("#character3").hide();
        $("#character4").hide();
        $("#enemy1").show();
        $("#enemy2").show();
        $("#enemy3").show();

    if(choice.charCard === aragorn.charCard){
        enemyRoster(eowyn, goblin, witchking);
        setYourCombatStats(aragorn);
    }
    else if(choice.charCard === eowyn.charCard){
        enemyRoster(aragorn, goblin, witchking);
        setYourCombatStats(eowyn);
    }
    else if(choice.charCard === goblin.charCard){
        enemyRoster(aragorn, eowyn, witchking);
        setYourCombatStats(goblin);
    }
    else if(choice.charCard === witchking.charCard){
        enemyRoster(aragorn, eowyn, goblin);
        setYourCombatStats(witchking);
    };
};



function enemyRoster(choice1, choice2, choice3){
    $("#enemy1").html(choice1.charCard);
    $("#enemy2").html(choice2.charCard);
    $("#enemy3").html(choice3.charCard);
};

function combatantChoice(fighter){
    $("#combatant").html(fighter.charCard);

    if(fighter == aragorn){
        setEnemyCombatStats(aragorn)
    }
    else if(fighter == eowyn){
        setEnemyCombatStats(eowyn)
    }
    else if(fighter == goblin){
        setEnemyCombatStats(goblin)
    }
    else if(fighter == witchking){
        setEnemyCombatStats(witchking)
    }
};

function setEnemyCombatStats(enemy){
    $("#enemypic").replaceWith(enemy.gifPic);
    $("#enemyhealth").text(enemy.health);
    $("#enemydamage").text(enemy.counter);
    $("#enemyname").text(enemy.name + "'s Health");
    $("#stats").show();
    $("#attackrow").show();
    $("#thefight1").hide();
    $("#thefight2").hide();
}

function setYourCombatStats(you){
    $("#yourpic").replaceWith(you.gifPic);
    $("#yourhealth").text(you.health);
    $("#yourdamage").text(you.attack);
    $("#yourname").text(you.name + "'s Health");
}




function combat(){

    var playerH = $("#yourhealth").text();
    var enemyH = $("#enemyhealth").text();
    var aTK = $("#yourdamage").text();
    var cTR = $("#enemydamage").text();

    var yH = parseInt(playerH);
    var eH = parseInt(enemyH);
    var atkVAL = parseInt(aTK);
    var ctrVAL = parseInt(cTR);

    var playerDMG;
    var enemyDMG;

    if(playerH == aragorn.health){
        playerDMG = aragorn.attack;
        player = aragorn; 
    }
    else if(playerH == eowyn.health){
        playerDMG == eowyn.attack;
        player = eowyn;
    }
    else if(playerH == goblin.health){
        playerDMG == goblin.attack;
        player = goblin;
    }
    else if(playerH == witchking.health){
        playerDMG == witchking.attack;
        player = witchking;
    }

    if(enemyH == aragorn.health){
        enemyDMG = aragorn.counter;
        enemy = aragorn; 
    }
    else if(enemyH == eowyn.health){
        enemyDMG == eowyn.counter;
        enemy = eowyn; 
    }
    else if(enemyH == goblin.health){
        enemyDMG == goblin.counter;
        enemy = goblin; 
    }
    else if(enemyH == witchking.health){
        enemyDMG == witchking.counter;
        enemy = witchking; 
    }

    if (enemyH < 0){
        alert("Enemy defeated!");
        defeatedEnemies.push(enemy);
        $("#stats").hide();
        $("#attackrow").hide();
        $("#roster1").show();
        $("#roster2").show();
        $("#enemypic").remove();

    }

    if(defeatedEnemies.length == 3){
        alert("All enemies defeated. You've Won!");
        confirm("Hit 'OK' to restart!");
        location.reload();
    }

    function damage(){

        

        var levelUp = atkVAL + player.attack;
        var newPlayerHealth;
        var newEnemyHealth;

        if(atkVAL === player.attack){    
            newEnemyHealth = eH - atkVAL;
            newPlayerHealth = yH - ctrVAL;

            var attackMessage = "You attacked " + player.name + " for " + atkVAL + " damage.";
            var counterAttackMessage = enemy.name + " attacked you back for " + ctrVAL + " damage.";

            $("#yourhealth").text(newPlayerHealth);
            $("#enemyhealth").text(newEnemyHealth);
            $("#yourdamage").text(levelUp);
            $("#battlefeed1").text(attackMessage);
            $("#battlefeed2").text(counterAttackMessage);





        }
        else if(atkVAL > player.attack){
            newEnemyHealth = eH - levelUp;
            newPlayerHealth = yH - ctrVAL;

            var attackMessage = "You attacked " + enemy.name + " for " + atkVAL + " damage.";
            var counterAttackMessage = enemy.name + " attacked you back for " + ctrVAL + " damage.";

            $("#yourhealth").text(newPlayerHealth);
            $("#enemyhealth").text(newEnemyHealth);
            $("#yourdamage").text(levelUp);
            $("#battlefeed1").text(attackMessage);
            $("#battlefeed2").text(counterAttackMessage);
        }


       



    }
    damage();




};

function winLoss(){};




function startUp(){

$("#enemy1").hide();
$("#enemy2").hide();
$("#enemy3").hide();
$("#combatant").hide();
$("#stats").hide();
$("#attackrow").hide();

}

startUp();







$("#character1").on('click', function(){
        playerChoice(aragorn);
});  
$("#character2").on('click', function(){
        playerChoice(eowyn);
});  
$("#character3").on('click', function(){
        playerChoice(goblin);
});  
$("#character4").on('click', function(){
        playerChoice(witchking);
});  



$("#enemy1").on('click', function(){

    var fighter = $("#enemy1").html();
    $("#enemy1").hide();
    $("#combatant").show();
    $("#you1").hide();
    $("#you2").hide();
    $("#roster1").hide();
    $("#roster2").hide();

    if(fighter == aragorn.charCard){
        combatantChoice(aragorn);
    }
    else if(fighter == eowyn.charCard){
        combatantChoice(eowyn);
    }
    else if(fighter == goblin.charCard){
        combatantChoice(goblin);
    }
    else if(fighter == witchking.charCard){
        combatantChoice(witchking);
    }
    
});  
$("#enemy2").on('click', function(){

    var fighter = $("#enemy2").html();
    $("#enemy2").hide();
    $("#combatant").show();
    $("#you1").hide();
    $("#you2").hide();
    $("#roster1").hide();
    $("#roster2").hide();

    if(fighter == aragorn.charCard){
        combatantChoice(aragorn);
    }
    else if(fighter == eowyn.charCard){
        combatantChoice(eowyn);
    }
    else if(fighter == goblin.charCard){
        combatantChoice(goblin);
    }
    else if(fighter == witchking.charCard){
        combatantChoice(witchking);
    }
    
});  
$("#enemy3").on('click', function(){

    var fighter = $("#enemy3").html();
    $("#enemy3").hide();
    $("#combatant").show();
    $("#you1").hide();
    $("#you2").hide();
    $("#roster1").hide();
    $("#roster2").hide();

    if(fighter == aragorn.charCard){
        combatantChoice(aragorn);
    }
    else if(fighter == eowyn.charCard){
        combatantChoice(eowyn);
    }
    else if(fighter == goblin.charCard){
        combatantChoice(goblin);
    }
    else if(fighter == witchking.charCard){
        combatantChoice(witchking);
    }
    
});  

$("#atkbtn").on('click', function(){
    combat();
});
  
    // else if($("#character td:last-child").attr('id')){
    //     playerChoice(eowyn);
    // }
    // else if($("#character td:last-child").attr('id')){
    //     playerChoice(eowyn);
    // }
    // else if($("#character td:last-child").attr('id')){
    //     playerChoice(eowyn);
    // }

