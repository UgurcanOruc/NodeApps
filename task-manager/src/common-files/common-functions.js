const checkForValidUpdates = (model, reqBody) => {
  const updates = Object.keys(reqBody);
  var allowedUpdates = Object.keys(model.schema.paths).filter(
    (x) => x !== "_id" && x !== "__v"
  );
  return updates.every((update) => allowedUpdates.includes(update));
};

module.exports = checkForValidUpdates;