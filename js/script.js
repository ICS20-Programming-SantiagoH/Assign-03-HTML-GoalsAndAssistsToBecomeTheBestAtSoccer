// Copyright (c) 2023 Santiago Hewett All rights reserved
//
// Created by: Santiago Hewett
// Created on: April 2023
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates the Amount of goals and assists neede to become to soccer player ever.
 */
function calculateGoalsAndAssits() {  
  
  // initialize variables
  let resultGoals = ""
  let resultAssists = ""
  
  // Data being collected 
  let goalsPerGame = parseFloat(document.getElementById('goalsPerGame').value);
  let gamesPlayed = parseFloat(document.getElementById('gamesPlayed').value);
  let assistsPerGame = parseFloat(document.getElementById('assistsPerGame').value);
  
  //Data being calculated for goals and assists
  let goals = goalsPerGame * gamesPlayed;
  let goalsToBeTheBestAtGoals = goals - 834;
  let assists = assistsPerGame * gamesPlayed;
  let assistsToBeTheBestAtAssists = assists - 300;


  // If statments for goals
  if (goalsToBeTheBestAtGoals > 834) {
    resultGoals = "Congratulations, you are already the best goal scorer!"
  }
  else {

    if (goalsToBeTheBestAtGoals < 0) {
      goalsToBeTheBestAtGoals = goalsToBeTheBestAtGoals * -1
      resultGoals = 'You need ' + goalsToBeTheBestAtGoals.toFixed(0) + ' goals to become the greatest goal scorer of all time.'
    }
    else {
      resultGoals =  'You need ' + goalsToBeTheBestAtGoals.toFixed(0) + ' goals to become the greatest goal scorer of all time.'
    }
  }
  
  // If statments for assists
  if (assistsToBeTheBestAtAssists > 300) {
    resultAssists = "Congratulations, you are already the best assister!"
  }
  else {

    if (assistsToBeTheBestAtAssists < 0) {
      assistsToBeTheBestAtAssists = assistsToBeTheBestAtAssists * -1
      resultAssists = 'You need  ' + assistsToBeTheBestAtAssists.toFixed(0) + ' assists to become to greatest assister of all time.'
    }
    else {
    resultAssists = 'You need  ' + assistsToBeTheBestAtAssists.toFixed(0) + ' assists to become to greatest assister of all time.'
    }
  }

  document.getElementById('goalsNeeded').innerHTML = resultGoals
  document.getElementById('assistsNeeded').innerHTML = resultAssists
}