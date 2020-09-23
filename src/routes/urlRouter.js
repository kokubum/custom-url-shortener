const urlController = require("../controllers/urlController");

const router = require("express").Router();

router.post("/shorten", urlController.shortenUrl);

module.exports = router;
