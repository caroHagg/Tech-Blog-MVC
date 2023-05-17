const express = require('express');
const router = express.Router();
const {Post,User} = require('../../models');

router.get("/",(req,res)=>{
    Post.findAll({
        include:[User]
    }).then(postData=>{
        const hbsData = postData.map(post=>post.get({plain:true}));
        res.render("home",{
            allPosts:hbsData,
            logged_in: req.session.logged_in
        })
    })
})

router.get("/post/:id",(req,res)=>{
    Post.findByPk(req.params.id,{
        include:[User]
    }).then(projData=>{
        const hbsData = projData.get({plain:true});
        hbsData.logged_id=req.session.logged_id
        res.render("post-detail",hbsData)
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

    res.render("dashboard")
    if(!req.session.logged_in){
        return res.redirect("/login")
    } else {
        Post.findAll({
            where: {user_id: req.session.user_id}
        }).then(postData=>{
           
            if(!postData){
                res.render("dashboard")
            }
            const hbsData = postData.map(post=> post.get({plain:true}))
            hbsData.logged_in=req.session.logged_in;
            console.log(hbsData)
            res.render("dashboard",hbsData)
        })
    }
})
router.get("/new-post",(req,res) =>{
    if(req.session.logged_in){
        return res.redirect("/login")
    }
    res.render("new-post")

})

module.exports = router;