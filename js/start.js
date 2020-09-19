'use strict';

var COLD_WIDTH = 300;
var COLD_HEIGHT = 250;

var PLAYER_NAME_X = 125;
var PLAYER_NAME_Y = 235;

var PLAYER_BAR_X = 125;
var PLAYER_BAR_Y = 70;
var PLAYER_BAR_WIDTH = 40;
var PLAYER_BAR_HEIGHT = 150;

var GAP = PLAYER_BAR_WIDTH + 50;

// var playerIndex = 0;
// var playerName = 'Вы';




var renderCould = function(ctx, x, y, color) {
  ctx.fillStyle = color;

  ctx.fillRect(x, y, COLD_WIDTH, COLD_HEIGHT);
  ctx.fillRect(x - 120, y + 30, COLD_WIDTH + 200, COLD_HEIGHT - 50);
  ctx.fillRect(x - 180, y + 60, COLD_WIDTH * 2, COLD_HEIGHT - 110);
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

window.renderStatistics = function(ctx, players, times) {
  renderCould(ctx, 230, 30, 'rgba(0, 0, 0, 0.3)', 300, 250);
  renderCould(ctx, 220, 20, '#fff', 300, 250);




  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {

    var playerBarY = PLAYER_BAR_Y + PLAYER_BAR_HEIGHT - (PLAYER_BAR_HEIGHT * times[i]) / maxTime;

    var playerBarHeight = (PLAYER_BAR_HEIGHT * times[i]) / maxTime;
    ctx.fillStyle = '#000';
    ctx.fillText(
      Math.round(times[i]),
      PLAYER_NAME_X + GAP * i,
      playerBarY - 7
    );
    ctx.fillRect(
      PLAYER_BAR_X + GAP * i,
      playerBarY,
      PLAYER_BAR_WIDTH,
      playerBarHeight
    );
    ctx.fillText(
      players[i],
      PLAYER_NAME_X + GAP * i,
      PLAYER_NAME_Y
    );
  }
};
