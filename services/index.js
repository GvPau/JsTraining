const { getWorkouts } = require("../models");

function getServiceWorkouts() {
  return getWorkouts();
}

module.exports = {
  getServiceWorkouts,
};
