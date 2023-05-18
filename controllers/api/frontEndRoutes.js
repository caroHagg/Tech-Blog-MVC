const express = require('express');
const router = express.Router();
const {Post,User,Comment} = require('../../models');

router.get("/",(req,res)=>{
    Post.findAll({
        include:[User]
    }).then(postData=>{
        const hbsData = postData.map(post=>post.get({plain:true}));
       
        res.render("home",{
            allPost:hbsData,
            logged_in: req.session.logged_in
        })
    })
})

router.get("/post/:id",(req,res)=>{
    Post.findByPk(req.params.id,{
        include:[{model:Comment,include:[User]}],
    }).then(projData=>{
        const hbsData = projData.get({plain:true});
        hbsData.logged_in=req.session.logged_in
        console.log(hbsData.comments)
        res.render("post-detail",{
            allPost:hbsData,
            allComments:hbsData.comments
        })
    })
})

router.get("/login",(req,res)=>{
    if(req.session.logged_in){
        return res.redirect("/dashboard")
    }
    res.render("login",{
        logged_in:req.session.logged_in
    })
})

router.get("/dashboard",(req,res)=>{

    if(!req.session.logged_in){
        return res.redirect("/login")
    } else {
        Post.findAll({
            where: {user_id: req.session.user_id}
        }).then(postData=>{
           console.log(postData)
            if(!postData){
                res.render("dashboard")
            }
            const hbsData = postData.map(post=> post.get({plain:true}))
            res.render("dashboard",{
                allPost:hbsData,
                logged_in:req.session.logged_in
            })
        })
    }
});
router.get("/update-post",(req,res)=>{
    res.render("update-post")
})
router.get("/new-post",(req,res) =>{
    res.render("new-post");
})

module.exports = router;