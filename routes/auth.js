var express = require("express");
var router=express.Router()
var db=require("../models");
var User=db.User;
// const ensureLoggedIn = require("connect-ensure-login").ensureLoggedIn;

module.exports=function(passport){
    router.post("/signup",function(req,res){
        User.find({email:req.body.email}).then((err,data)=>{
            if(data){
              console.log("uh oh")
                res.json("server error or user found")
            }
            else{
              var user=new User()
                User.create({
                    email:req.body.email,
                    password:user.hashPassword(req.body.password),
                    description:req.body.description,
                    shopName:req.body.shopName
                }).then((dat)=> {
                  console.log(dat);
                  res.json(dat)
                }).catch(err=>res.json(err))
            }
        })
      })

    router.post("/login",(req,res,next)=>{
        passport.authenticate('local',(err,user,info)=>{
            if(err){
                return next(err)
            }
            else if (user){
                req.login(user,(err)=>{
                    next(err)
                })
                res.json({success:req.user?"Yes":"No",user:req.user})
            }
            else{
                res.json("server error")
            }
        })
    })

    router.get("/logout",function(req,res){
        const old_user=req.user;
        req.logout();
        res.json({success:(req.user?"NO":"Yes"),user:req.user,OldUser:old_user})
    })

    return router;
}

