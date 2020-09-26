'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_SHADOW_GAP = 10;
var CLOUD_COLOR = '#fff';
var CLOUD_SHADOW_COLOR = 'rgba(0, 0, 0, 0.3)';

var CONGR_X = 180;
var CONGR_Y = 10;
var CONGR_TITLE1 = 'Ура вы победили!';
var CONGR_TITLE2 = 'Список результатов:';

var PLAYER_NAME_X = 125;
var PLAYER_NAME_Y = 235;

var PLAYER_BAR_X = 125;
var PLAYER_BAR_Y = 70;
var PLAYER_BAR_WIDTH = 40;
var PLAYER_BAR_HEIGHT = 150;

var GAP = PLAYER_BAR_WIDTH + 50;
var TIME_GAP = 15;

var TEXT_FONT = '16px PT Mono';
var TEXT_COLOR = '#000';
var MY_COLUMN_COLOR = '#f00';


var renderCould = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

var getColumnColor = function (myName) {
  return (myName === 'Вы') ? MY_COLUMN_COLOR : 'hsl(' + 223 + ', ' + Math.round(Math.random() * 100) + '%' + ', 50%)';
};

window.renderStatistics = function (ctx, players, times) {
  renderCould(ctx, CLOUD_X, CLOUD_Y, CLOUD_SHADOW_COLOR);
  renderCould(ctx, CLOUD_X - CLOUD_SHADOW_GAP, CLOUD_Y - CLOUD_SHADOW_GAP, CLOUD_COLOR);

  ctx.fillStyle = TEXT_COLOR;
  ctx.font = TEXT_FONT;
  ctx.textBaseline = 'hanging';
  ctx.fillText(CONGR_TITLE1, CONGR_X, CONGR_Y);
  ctx.fillText(CONGR_TITLE2, CONGR_X, CONGR_Y + 20);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var playerBarY = PLAYER_BAR_Y + PLAYER_BAR_HEIGHT - (PLAYER_BAR_HEIGHT * times[i]) / maxTime;
    var playerBarHeight = (PLAYER_BAR_HEIGHT * times[i]) / maxTime;
    var playerBarX = PLAYER_NAME_X + GAP * i;

    ctx.fillStyle = TEXT_COLOR;
    ctx.fillText(Math.round(times[i]), playerBarX, playerBarY - TIME_GAP);
    ctx.fillText(players[i], playerBarX, PLAYER_NAME_Y);

    ctx.fillStyle = getColumnColor(players[i]);

    ctx.fillRect(PLAYER_BAR_X + GAP * i, playerBarY, PLAYER_BAR_WIDTH, playerBarHeight);
  }
};
