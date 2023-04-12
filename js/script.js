// Copyright (c) 2023 Santiago Hewett All rights reserved
//
// Created by: Santiago Hewett
// Created on: April 2023
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates the Amount of goals and assists neede to become to soccer player ever.
 */
function calculate() {  
  
  // Data being collected 
  let goalsPerGame = parseFloat(document.getElementById('goalsPerGame').value);
  let gamesPlayed = parseFloat(document.getElementById('gamesPlayed').value);

  //Data being processed
  let goals = goalsPerGame * gamesPlayed;
  
  // Data being shown
  document.getElementById('degreesInCelsius').innerHTML = 'The degrees in celsius is ' + goals.toFixed(0) + "°"
}