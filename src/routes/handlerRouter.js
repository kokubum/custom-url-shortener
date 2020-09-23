const router = require("express").Router();
const handlerController = require("../controllers/handlerController");

router.get("/:urlCode", handlerController.redirectToUrl);

module.exports = router;
