const express = require('express');
const User = require("../models/user");
const router = new express.Router();
const checkForValidUpdates = require('../common-files/common-functions');

router.post("/users", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post('/user/login', async (req, res) => {
  try {
    const user = await User.findByCredentials(req.body.email, req.body.password); 
    res.send(user);
  } catch (e) {
    res.status(400).send();
  }
});

router.get("/users", async (req, res) => {
  const users = await User.find({});
  try {
    res.send(users);
  } catch (e) {
    res.status(500).send();
  }
});

router.get("/users/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const user = await User.findById(_id);
    res.send(user);
  } catch (error) {
    res.status(500).send();
  }
});

router.patch("/users/:id", async (req, res) => {
  if (!checkForValidUpdates(User, req.body)) {
    return res.status(400).send({ error: "Invalid updates!" });
  }
  try {
    const _id = req.params.id;
    const user = await User.findById(_id);
    Object.keys(req.body).forEach((update) => user[update] = req.body[update]);
    await user.save();
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.delete("/users/:id", async (req, res) => {
  try {
    const user = await User.findOneAndDelete({ _id: req.params.id });

    if (!user) {
      return res.status(404).send();
    }

    res.send(user);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;