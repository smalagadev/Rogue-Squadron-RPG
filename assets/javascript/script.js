const x_wing = { type:'X-Wing', health: 50,  status: '',
  attack: 5,  armor: 5,  speed: 5, img:'assets/images/x-wing.jpg' };

const y_wing = { type:'Y-Wing', health: 50,  status: '',
 attack: 4,  armor: 7, speed: 4, img:'assets/images/y-wing.jpeg' };

const a_wing = { type:'A-Wing', health: 50,  status: '',
 attack: 4,  armor: 4,  speed: 7, img:'assets/images/a-wing.png' };

const tie_fighter = { type:'TIE Fighter ', health: 50, status: '',
 attack: 5, armor: 5, speed:5, img:'assets/images/tie-fighter.jpeg' };

const tie_bomber = { type:'TIE Bomber', health: 50, status: '',
 attack: 4, armor: 7, speed: 4, img:'assets/images/tie-bomber.jpeg' };

const tie_interceptor = { type:'TIE Interceptor', health: 50, status: '',
 attack: 4, armor: 4, speed: 7, img:'assets/images/tie-interceptor.jpg' };


const squadronOptions = [x_wing, y_wing, a_wing];
const enemySquadronOptions = [tie_fighter, tie_bomber, tie_interceptor];


var userSquadron = {
  units: [],
  health: 0, attack: 0, armor: 0, speed: 0,

  setStats: function(){
    for(i=0; i<this.units.length; i++){
      this.health += this.units[i].health;
      this.attack += this.units[i].attack;
      this.armor += this.units[i].armor;
      this.speed += this.units[i].speed;
    }
  },

  loadTeam: function(){
    for(i=0; i < this.units.length; i++){
      var avatar = '<div class="ship" id="user-' + i +'"><img class="ship-image" src="" alt=""><h6 class="ship-type"></i></h6></div>';
      $('#user-team').append(avatar);
      $('#user-' + i).find('.ship-image').attr('src', this.units[i].img);
      $('#user-' + i).find('.ship-type').text(this.units[i].type);
    }
  }
};

var enemySquadron = {
  units: [],
  health:0, attack: 0, armor: 0, speed: 0,

  generate: function(){
    for(i=0; i < 5; i++){
      this.units[i] = enemySquadronOptions[Math.floor(Math.random() * 3)];
    }
  },

  setStats: function(){
    for(i=0; i<this.units.length; i++){
      this.health += this.units[i].health;
      this.attack += this.units[i].attack;
      this.armor += this.units[i].armor;
      this.speed += this.units[i].speed;
    }
  },
  loadTeam: function(){
    for(i=0; i < this.units.length; i++){
      var avatar = '<div class="ship" id="enemy-' + i +'"><img class="ship-image" src="" alt=""><h6 class="ship-type"></h6></div>';
      $('#enemy-team').append(avatar);
      $('#enemy-' + i).find('.ship-image').attr('src', this.units[i].img);
      $('#enemy-' + i).find('.ship-type').text(this.units[i].type);
    }
  }
}

var game = {
  damage: 0,

  attack: function(offense,defense){
    this.damage = offense.attack * 3 - defense.armor * 2;
    defense.health -= this.damage;
  },

  reset: function(){
    $('#squadron-selection')
    userSquadron.units = [];
    enemySquadron.units = [];

  }

}


$(document).ready(function(){
  $('body').scrollspy({ target: '#dialogue-box' });
  const dialogueOpen = '<li class="list-group-item bg-dark">';
  const dialogueClose = '</li>';

  // Load Squadron Options
  for(i=0; i<squadronOptions.length; i++){
    var opt = '<div id="selection-' + (i) + '" class="card"><img src="" class="card-img-top ship-image" alt="..."><ul class="list-group list-group-flush"><li class="list-group-item type"></li><li class="list-group-item health"></li><li class="list-group-item attack"></li><li class="list-group-item armor"></li><li class="list-group-item speed"></li></ul></div>';
    $('#squadron-selection').append(opt);
    $('#selection-' + i).find('.card-img-top').attr("src", squadronOptions[i].img);
    $('#selection-' + i).find('.type').text(squadronOptions[i].type);
    $('#selection-' + i).find('.health').text("Health: " + squadronOptions[i].health);
    $('#selection-' + i).find('.attack').text("Attack: " + squadronOptions[i].attack);
    $('#selection-' + i).find('.armor').text("Armor: " + squadronOptions[i].armor);
    $('#selection-' + i).find('.speed').text("Speed: " + squadronOptions[i].speed);
  }

// Team selection
  $('#selection-0').on('click', function(){
    if(userSquadron.units.length < 5){
      userSquadron.units.push(x_wing);
      $('#dialogue-box').append(dialogueOpen + ('Select ' + (5 - userSquadron.units.length) + ' more ships.') + dialogueClose);
    }
    else{
      if(confirm('Do you want to continue with your team?')){
        userSquadron.setStats();
        enemySquadron.generate();
        enemySquadron.setStats();
        userSquadron.loadTeam();
        enemySquadron.loadTeam();
        $('#attack').show();
        $('#squadron-selection').hide();
      }
      else{
          userSquadron.units = [];
      }
    }
  });
  $('#selection-1').on('click', function(){
    if(userSquadron.units.length < 5){
      userSquadron.units.push(y_wing);
      $('#dialogue-box').append(dialogueOpen + ('Select ' + (5 - userSquadron.units.length) + ' more ships.') + dialogueClose);
    }
    else{
      if(confirm('Do you want to continue with your team?')){
        userSquadron.setStats();
        enemySquadron.generate();
        enemySquadron.setStats();
        userSquadron.loadTeam();
        enemySquadron.loadTeam();
        $('#attack').show();
        $('#squadron-selection').hide();
      }
      else{
          userSquadron.units = [];
      }
    }
  });
  $('#selection-2').on('click', function(){
    if(userSquadron.units.length < 5){
      userSquadron.units.push(a_wing);
      $('#dialogue-box').append(dialogueOpen + ('Select ' + (5 - userSquadron.units.length) + ' more ships.') + dialogueClose);
    }
    else{
      if(confirm('Do you want to continue with your team?')){
        userSquadron.setStats();
        enemySquadron.generate();
        enemySquadron.setStats();
        userSquadron.loadTeam();
        enemySquadron.loadTeam();
        $('#attack').show();
        $('#squadron-selection').hide();
      }
      else{
          userSquadron.units = [];
      }
    }
  });

  $('#attack').on('click', function(){
    game.attack(userSquadron, enemySquadron);
    $('#dialogue-box').append(dialogueOpen + ('Enemy took' + game.damage + 'damage.') + dialogueClose);
    if(enemySquadron.health <= 0 && confirm('Destroyed enemy squad. Do you want to play again?')){
      game.reset();
    };
    game.attack(enemySquadron, userSquadron);
    $('#dialogue-box').append(dialogueOpen + ('You took' + game.damage + 'damage.') + dialogueClose);
    if(userSquadron.health <= 0 && confirm('Your squad was destroyed. Do you want to play again?'){
      game.reset();
    }
  });

});
