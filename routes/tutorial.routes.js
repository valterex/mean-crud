module.exports = (app) => {
  const tutorials = require("../controllers/tutorial.controller.js");
  const router = require("express").Router();

  // *** GET
  router.get("/:id", tutorials.findOne);
  router.get("/", tutorials.findAll);
  router.get("/published", tutorials.findAllPublished);

  // *** POST
  router.post("/", tutorials.create);

  // *** PUT
  router.put("/:id", tutorials.update);

  // *** DELETE
  router.delete("/:id", tutorials.delete);
  router.delete("/", tutorials.deleteAll);

  app.use("/api/tutorials", router);
};
