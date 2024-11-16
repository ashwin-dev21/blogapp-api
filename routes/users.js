const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt")

//update
router.put("/:id",async(req,res)=>{
    if(req.body.userId === req.params.id){
        
        try{
            await User.findByIdAndDelete(req.params.id)
            res.status(200).json("user has been deleted")
        }catch(err){
            res.status(500).json(err)
        }
    }else{
        res.status(401).json("unauthorized update")
    }
}
);



//delete
router.delete("/:id",async(req,res)=>{
    if(req.body.userId === req.params.id){
        try{
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("user has been deleted")
        }catch(err){
            res.status(500).json(err)
        }
    }else{
        res.status(401).json("unauthorized delete")
    }
}
);

//get user

router.get("/:id",async(req,res)=>{
    try{
        const user = await User.findById(req.params.id)
        res.status(200). json(user)
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router;
