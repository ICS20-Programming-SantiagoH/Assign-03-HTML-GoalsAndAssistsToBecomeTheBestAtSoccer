// Copyright (c) 2023 Santiago Hewett All rights reserved
//
// Created by: Santiago Hewett
// Created on: April 2023
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates the Amount of goals and assists neede to become to soccer player ever.
 */
function calculateGoals() {  
  
  // initialize variables
  let statmentGoals1 = ""
  let statmentGoals2 = ""
  
  // Data being collected 
  let goalsPerGame = parseFloat(document.getElementById('goalsPerGame').value);
  let gamesPlayedGoals = parseFloat(document.getElementById('gamesPlayedGoals').value);
  
  //Data being processed
  let goals = goalsPerGame * gamesPlayed;
  let goalsToBeTheBestAtGoals = goals - 834;

  // If statments
  if (goalsToBeTheBestAtGoals > 834) {
    statmentGoals1 = "Congratulations, you are already the best goal scorer!"
  }

  if (goalsToBeTheBestAtGoals < 0) {
    statmentGoals2 = "goalsToBeTheBestAtGoals * -1"
  }
  
  // Data being shown
  document.getElementById('goalsNeeded').innerHTML = 'You need ' + goalsToBeTheBestAtGoals.toFixed(2) + 'goals to become the greatest goal scorer of all time'
}

function calculateAssists() {  
  
  // initialize variables
  let statmentAssists1 = ""
  let statmentAssists2 = ""
  
  // Data being collected 
  let assistsPerGame = parseFloat(document.getElementById('assistsPerGame').value);
  let gamesPlayedAssists = parseFloat(document.getElementById('gamesPlayedAssists').value);
  
  //Data being processed
  let assists = assistsPerGame * gamesPlayedAssists;
  let assistsToBeTheBestAtAssists = assists - 300;

  // If statments
  if (assistsToBeTheBestAtAssists > 300) {
    statment = "Congratulations, you are already the best assister!"
  }

  if (assistsToBeTheBestAtAssists < 0) {
    statmentAssists2 = "assistsToBeTheBestAtAssists * -1"
  }
  
  // Data being shown
  document.getElementById('assistsNeeded').innerHTML = 'You need  ' + assistsToBeTheBestAtAssists.toFixed(2) + ' assists to become to greatest assister of all time.'
}