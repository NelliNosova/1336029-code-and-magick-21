"use strict";
/* eslint-disable no-unused-vars */

let fireballSize = 22;
let wizardSpeed = 3;
let wizardWidth = 70;


const getFireballSpeed = (isMovingLeft) => {
  /* if (isMovingLeft) {
    return 2;
  }

  return 5; */
  return isMovingLeft ? 2 : 5;
};

const getWizardHeight = () => {
  return wizardWidth * 1.337;
};

const getWizardX = (gameFieldWidth) => {
  return (gameFieldWidth - wizardWidth) / 2;
};

const getWizardY = (gameFieldHeight) => {
  return gameFieldHeight / 3;
};
