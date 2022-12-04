const express = require('express');
const User = require('./Userschema');
const Cart= require('./cartschema');
var mongoose = require('mongoose')


const router = express.Router();
router.get('/cart', async function(req,res){
     const theid=req.user._id;
     let tfind;
     try{
       tfind= await User.findById(theid).populate('carts');
     }
     catch{
        res.status(201).send('couldn^t found the item' ); 
        next(err)
     }
     if(!tfind){
        res.status(201).send('couldn^t found the item id' ); 
        next(err)
     }
     const select=tfind.carts
     res.status(201).send(select);  

});


router.post('/cart',   function(req,res,next){

if(req.isAuthenticated()){
   
    User.findById(req.user._id,async function(err,theuser){

        if(err){
            console.log(err)
        }
        else{
             const Ccart = new Cart({
      
                  array:req.body,
                  userr:theuser._id

            })
            if(!(theuser.carts.length>0)){
               

              const item= await theuser.populate('carts')
               await Ccart.save();                 
               theuser.carts.push(Ccart);
               await theuser.save();  
               res.json(201).send({sla: item});     
                 
            }
            else{
                const item= await theuser.populate('carts')
                 const itemm= item.carts;
                 const itemu=itemm.some(item => item.array.title === Ccart.array.title);
                if(itemu){
                     console.log('Ccart')
                     res.json(201).send('itemm');
                     
                }
                else{

                    const item= await theuser.populate('carts')
                    await Ccart.save();                 
                    theuser.carts.push(Ccart);
                    await theuser.save();   
                    console.log('heeeeeereeeeee')
                    res.status(201).send(theuser);
              
                }
              
               
            }
        }

    })
    
    }
    });
        router.delete('/cart/:pid',   function(req,res,next){

            if(req.isAuthenticated()){
                const placeId = req.params.pid;    
                 
                 Cart.findById(placeId,async function(err,theuser){
            
                    if(err){
                        console.log(err)
                    }
                    else{
                      
                         const item= await theuser.populate('userr')
                         await item.remove();
                         item.userr.carts.pull(item);
                         await item.userr.save()
                         res.status(201).send(item);                                                                                       
                    }
               
                })
                 }
                });
           
module.exports = router;

