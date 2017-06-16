/*
  Design, text, images and code by Richard K. Herz, 2017
  Copyrights held by Richard K. Herz
  Licensed for use under the GNU General Public License v3.0
  https://www.gnu.org/licenses/gpl-3.0.en.html
*/

// ----------------- HANDLE UI CONTROLS ----------------------

// HANDLE RUN-PAUSE BUTTON CLICK
function runThisLab() {
  // uses object simParams from file process_units.js
  // CALLED BY UI RUN-PAUSE BUTTON DEFINED IN HTML
  // TOGGLE runningFlag FIRST before doing stuff below
  simParams.toggleRunningFlag(); // toggle runningFlag true-false
  // TOGGLE runningFlag FIRST before doing stuff below
  var runButtonID = simParams.runButtonID;
  var runningFlag = simParams.runningFlag;
  var loggerURL = simParams.loggerURL;
  if (runningFlag) {
    eval(runButtonID + '.value = "Pause"');
    runSimulation();
    // $.post(loggerURL,{webAppNumber: "7"});
    // $.post(loggerURL,{webAppNumber: "7dev"}) .done( function(data) { alert( "Data Loaded: " + data ); } );
    $.post(loggerURL,{webAppNumber: "7"}) .done(function(data) {
      document.getElementById("field_run_counter").innerHTML = "<i>Total runs = " + data + "</i>"; } );
    } else {
    eval(runButtonID + '.value = "Run"');
  }
} // END OF function runThisLab

// HANDLE RESET BUTTON CLICK
function resetThisLab() {
  // uses object simParams from file process_units.js
  // input argument is the RUN button ID, not the reset button ID
  var runButtonID = simParams.runButtonID;
  simParams.stopRunningFlag();
  simParams.resetSimTime();
  resetFlag = 1; // 0 for no reset, 1 for reset lab
  updateProcessUnits(resetFlag);
  updateDisplay(resetFlag);
  eval(runButtonID + '.value = "Run"');
  // do NOT update process nor display again here (will take one step)
} // END OF function resetThisLab
