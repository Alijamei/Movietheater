const express = require('express');
const User = require('../user/Userschema');
const Cart= require('./cartschema');
var mongoose = require('mongoose')


const router = express.Router();

router.get('/cart', async function(req, res, next) {
   if (!req.user) {
//      return res.status(401).send({ error: 'Not authenticated' });
         return req
   }

  const theId = req.user._id;
  let tfind;
  try {
    tfind = await User.findById(theId).populate('carts');
  } catch (err) {
    return res.status(500).send({ error: 'Could not find the item' });
  }

  if (!tfind) {
    return res.status(404).send({ error: 'Could not find the item id' });
  }

  const select = tfind.carts;
  return res.status(200).send(select);
});


  

router.post('/cart',   function(req,res,next){

  // if(req.isAuthenticated()){
   
  //    User.findById(req.user._id,async function(err,theuser){

  //       if(err){
  //           
  //       }
  //       else{
  //            const Ccart = new Cart({
      
  //                 array:req.body,
  //                 userr:theuser._id

  //           })
  //           if(!(theuser.carts.length>0)){
  //               const item = await theuser.populate('carts');
  //               await Ccart.save();                 
  //               theuser.carts.push(Ccart);
  //               await theuser.save();  
  //               res.status(201).send({sla: item});     
  //             }
  //           else{
  //               const item= await theuser.populate('carts')
  //                const itemm= item.carts;
  //                const itemu=itemm.some(item => item.array.title === Ccart.array.title);
  //               if(itemu){
  //                    
  //                    res.json(201).send('itemm');
                     
  //               }
  //               else{

  //                   const item= await theuser.populate('carts')
  //                   await Ccart.save();                 
  //                   theuser.carts.push(Ccart);
  //                   await theuser.save();   
  //                   
  //                   res.status(201).send(theuser);
              
  //               }
              
               
  //           }
  //       }

  //   })
    
  //   }

  if (req.isAuthenticated()) {
    User.findById(req.user._id, async function (err, theuser) {
      if (err) {
        ;
      } else {
        const Ccart = new Cart({
          array: req.body,
          userr: theuser._id,
        });
  
        if (!(theuser.carts.length > 0)) {
          const item = await theuser.populate('carts');
          await Ccart.save();
          theuser.carts.push(Ccart);
          await theuser.save();
          res.status(201).send({ sla: item });
        } else {
          const item = await theuser.populate('carts');
          const itemm = item.carts;
          const itemu = itemm.some((item) => item.array.title === Ccart.array.title);
          if (itemu) {
            ;
            res.status(201).json('itemm');
          } else {
            await Ccart.save();
            theuser.carts.push(Ccart);
            await theuser.save();
            ;
            res.status(201).send(theuser);
          }
        }
      }
    });
  }
  


    });
    
router.delete('/cart/:pid',   function(req,res,next){

        if(req.isAuthenticated()){
                const placeId = req.params.pid;    
                 
                 Cart.findById(placeId,async function(err,theuser){
            
                    if(err){
                        
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

