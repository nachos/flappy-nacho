'use strict';

var game = new Phaser.Game(288, 505, Phaser.AUTO, 'flappy-nacho');

// Game States
game.state.add('boot', Boot);
game.state.add('menu', Menu);
game.state.add('play', Play);
game.state.add('preload', Preload);

game.state.start('boot');

