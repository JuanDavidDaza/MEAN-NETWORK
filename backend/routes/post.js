const express = require("express");
const router = express.Router();
const PostController = require("../controllers/post");
const Auth = require("../middleware/auth");
const ValidateUser = require("../middleware/validateUser");

router.post("/registerPost", Auth, ValidateUser, PostController.registerPost);
router.delete(
  "/deletePost/:_id",
  Auth,
  ValidateUser,
  PostController.deletePost
);

router.get("/listPost/:name?", Auth, ValidateUser, PostController.listPost);

module.exports = router;
