const { getServiceWorkouts } = require("../services");

function getControllerWorkouts() {
  const workouts = getServiceWorkouts();
  console.log("Workouts: ", workouts);
}

module.exports = {
  getControllerWorkouts,
};
