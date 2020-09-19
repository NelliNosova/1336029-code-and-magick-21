'use strict';

var COLD_WIDTH = 300;
var COLD_HEIGHT = 250;

var PLAYER_NAME_X = 130;
var PLAYER_NAME_Y = 235;

var PLAYER_BAR_X = 125;
var PLAYER_BAR_Y = 70;
var PLAYER_BAR_WIDTH = 40;
var PLAYER_BAR_HEIGHT = 140;

var GAP = 60;

var playerIndex = 0;
var playerName = 'Вы';


var renderCould = function(ctx, x, y, color) {
  ctx.fillStyle = color;

  ctx.fillRect(x, y, COLD_WIDTH, COLD_HEIGHT);
  ctx.fillRect(x - 120, y + 30, COLD_WIDTH + 200, COLD_HEIGHT - 50);
  ctx.fillRect(x - 180, y + 60, COLD_WIDTH * 2, COLD_HEIGHT - 110);
};

window.renderStatistics = function(ctx) {
  renderCould(ctx, 230, 30, 'rgba(0, 0, 0, 0.3)', 300, 250);
  renderCould(ctx, 220, 20, '#fff', 300, 250);

  ctx.fillStyle = '#000';

  ctx.fillRect(
    PLAYER_BAR_X + GAP*0,
    PLAYER_BAR_Y,
    PLAYER_BAR_WIDTH,
    PLAYER_BAR_HEIGHT
  );
  ctx.fillText(
    'Вы',
    PLAYER_NAME_X + GAP*0,
    PLAYER_NAME_Y
  );

  ctx.fillRect(
    PLAYER_BAR_X + GAP*1,
    PLAYER_BAR_Y,
    PLAYER_BAR_WIDTH,
    PLAYER_BAR_HEIGHT
  );
  ctx.fillText(
    'Иван',
    PLAYER_NAME_X + GAP*1,
    PLAYER_NAME_Y
  );

  ctx.fillRect(
    PLAYER_BAR_X + GAP*2,
    PLAYER_BAR_Y ,
    PLAYER_BAR_WIDTH,
    PLAYER_BAR_HEIGHT
  );
  ctx.fillText(
    'Юлия',
    PLAYER_NAME_X + GAP*2,
    PLAYER_NAME_Y
  );
};

// ctx.fillRect(125, 70, 40, 140);
// ctx.fillText('Вы', 130, 235);

// ctx.fillRect(185, 70, 40, 140);
// ctx.fillText('Иван', 190, 235);

// ctx.fillRect(245, 70, 40, 140);
// ctx.fillText('Юлия', 250, 235);

