const router = require('express').Router();
const { Post,User,Comment } = require('../../models');

router.post('/', async (req, res) => {
    try {
        console.log(...req.body + "+++++++++++++++++")
      const newComment = await Comment.create({
        ...req.body,
        user_id: req.session.user_id,
      });
      console.log(newComment)
  
      res.status(200).json(newComment);
    } catch (err) {
      res.status(400).json(err);
    }
  });


  module.exports = router;