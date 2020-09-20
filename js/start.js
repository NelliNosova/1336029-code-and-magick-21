'use strict';

var COLD_WIDTH = 420;
var COLD_HEIGHT = 270;
var COLD_X = 100;
var COLD_Y = 10;
var COLD_SHADOW_GAP = 10;

var CONGRATULATIONS_X = 180;
var CONGRATULATIONS_Y = 10;

var PLAYER_NAME_X = 125;
var PLAYER_NAME_Y = 235;

var PLAYER_BAR_X = 125;
var PLAYER_BAR_Y = 70;
var PLAYER_BAR_WIDTH = 40;
var PLAYER_BAR_HEIGHT = 150;

var GAP = PLAYER_BAR_WIDTH + 50;
var TIME_GAP = 15;

var renderCould = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, COLD_WIDTH, COLD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

var getSaturate = function() {
  return 'hsl(' + 223 +', ' + Math.round(Math.random()*100) + '%' + ', 50%)';
};

window.renderStatistics = function(ctx, players, times) {
  renderCould(ctx, COLD_X, COLD_Y, 'rgba(0, 0, 0, 0.3)');
  renderCould(ctx, COLD_X - COLD_SHADOW_GAP, COLD_Y - COLD_SHADOW_GAP, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CONGRATULATIONS_X, CONGRATULATIONS_Y);
  ctx.fillText('Список результатов:', CONGRATULATIONS_X, CONGRATULATIONS_Y + 20);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {

    var playerBarY = PLAYER_BAR_Y + PLAYER_BAR_HEIGHT - (PLAYER_BAR_HEIGHT * times[i]) / maxTime;

    var playerBarHeight = (PLAYER_BAR_HEIGHT * times[i]) / maxTime;
    ctx.fillStyle = '#000';
    ctx.fillText(
      Math.round(times[i]),
      PLAYER_NAME_X + GAP * i,
      playerBarY - TIME_GAP
    );

    if (players[i] !== 'Вы') {
      ctx.fillStyle = getSaturate();
    } else {
      ctx.fillStyle = '#f00';
    }

    ctx.fillRect(
      PLAYER_BAR_X + GAP * i,
      playerBarY,
      PLAYER_BAR_WIDTH,
      playerBarHeight
    );

    ctx.fillStyle = '#000';
    ctx.fillText(
      players[i],
      PLAYER_NAME_X + GAP * i,
      PLAYER_NAME_Y
    );
  }
};
