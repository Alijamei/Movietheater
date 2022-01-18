const express = require('express');
const User = require('./Userschema');
const Cart= require('./cartschema');
const Post= require('./postschema');
var mongoose = require('mongoose')


const router = express.Router();

router.get("/onceupontimepost",  async function(req,res,next){

    if(req.isAuthenticated()){
        const theid=req.user._id;
        let find;
        try{
          find= await Post.aggregate([   
               {$match: {}},
               { $lookup: { from: 'users', localField: 'user', foreignField: '_id', as: 'user' } },            
               {$group: {_id: {id: '$_id'},  posts:{$push:{post:{ $ifNull: [ "$postsupontime",  null ]},name:"$user.name",review:"$review"}}}}
        

          ])
         }
        catch{
           res.status(201).send('couldn^t found the item' ); 
           next(error)
        }
        if(!find){
           res.status(201).send('couldn^t found the item id' ); 
           next(err)
        }
        const select=  find.filter((element) => 
        element.posts.some((subElement) => subElement.post != null))
        const mappin = select.map(x => x.posts[0].name[0])
            
     //    find.map(x => x.posts.filter(x=>x.post!=null))
        res.status(201).send(select);  
    }      
            
            
   



})
router.get("/sopranopost",  async function(req,res,next){

 
    if(req.isAuthenticated()){
        const theid=req.user._id;
        let find;
        try{
          find= await Post.aggregate([   
               {$match: {}},
               { $lookup: { from: 'users', localField: 'user', foreignField: '_id', as: 'user' } },            
               {$group: {_id: {id: '$_id'},  posts:{$push:{post:{ $ifNull: [ "$postssoprano",  null ]},name:"$user.name",review:"$review"}}}}
             // { $project: { "user.hash":0,"user.salt":0 } }

          ])
         }
        catch{
           res.status(201).send('couldn^t found the item' ); 
           next(error)
        }
        if(!find){
           res.status(201).send('couldn^t found the item id' ); 
           next(err)
        }
        const select=  find.filter((element) => 
        element.posts.some((subElement) => subElement.post != null))
        const mappin = select.map(x => x.posts[0].name[0])
            
     //    find.map(x => x.posts.filter(x=>x.post!=null))
        res.status(201).send(select);  
    }      
            
         
   
   
   
   })
   router.get("/goodfellaspost",  async function(req,res,next){

 
    if(req.isAuthenticated()){
           const theid=req.user._id;
           let find;
           try{
             find= await Post.aggregate([   
                  {$match: {}},
                  { $lookup: { from: 'users', localField: 'user', foreignField: '_id', as: 'user' } },            
                  {$group: {_id: {id: '$_id'},  posts:{$push:{post:{ $ifNull: [ "$postsfella",  null ]},name:"$user.name",review:"$review"}}}}
               

             ])
            }
           catch{
              res.status(201).send('couldn^t found the item' ); 
              next(error)
           }
           if(!find){
              res.status(201).send('couldn^t found the item id' ); 
              next(err)
           }
           const select=  find.filter((element) => 
           element.posts.some((subElement) => subElement.post != null))
           const mappin = select.map(x => x.posts[0].name[0])
               
        //    find.map(x => x.posts.filter(x=>x.post!=null))
           res.status(201).send(select);  
       }      
               
         
   
   
   
   })
router.get("/allposts",  async function(req,res,next){
            
    if(req.isAuthenticated()){
        const theid=req.user._id;
        let find;
        try{
          find= await Post.aggregate([   
               {$match: {}},
            //    { $lookup: { from: 'users', localField: 'user', foreignField: '_id', as: 'user' } },           
            //    {$unwind: '$user'}, 
            //    {$group: {_id: {name: '$user.name'},  posts:{$push:{post:{ $ifNull: [ "$postsfella",  null ]}}}}}
               
               

          ])
         }
        catch{
           res.status(201).send('couldn^t found the item' ); 
           next(error)
        }
        if(!find){
           res.status(201).send('couldn^t found the item id' ); 
           next(err)
        }
        const select=  find
       
            
     //    find.map(x => x.posts.filter(x=>x.post!=null))
        res.status(201).send(select);  
    }      
})

router.post('/onceupontimepost',   function(req,res,next){

    if(req.isAuthenticated()){
       
               
               
       
    
        User.findById(req.user._id,async function(err,theuser){
    
            if(err){
                console.log(err)
            }
            else{
            
           
               if(theuser){
                      const newpost = new Post({
                          
                        review:req.body.review,
                        postsupontime:req.body.postsupontime,
                        user:theuser._id,
                         
                        
  
             })
             if(newpost.postsupontime.length !== 0 && Number.isInteger(newpost.review)  ){
                    const item= await theuser.populate('posts')
                
                    try{
                     find= await Post.aggregate([   
                          {$match: {}},
                          { $lookup: { from: 'users', localField: 'user', foreignField: '_id', as: 'user' } },           
                          {$unwind: '$user'}, 
                          {$group: {_id: {name: '$user.name'},  posts:{$push:{post:{ $ifNull: [ "$postsupontime",  null ]}}}}}
               
                          
           
                     ])
                    }
                   catch{
                      res.status(201).send('couldn^t found the item' ); 
                      next(error)
                   }
                   if(!find){
                      res.status(201).send('couldn^t found the item id' ); 
                      next(err)
                   }
                   const post=   find.filter((element) => 
                   element.posts.some((subElement) => subElement.post != null)).some((Element) => Element._id.name === theuser.name)
                   if(post!=true){
                     await newpost.save();                 
                     theuser.posts.push(newpost);
                      await theuser.save();                   
                      res.status(201).json({slatt: item});

                   }
                   else{
                     res.status(201).send(null);  
                   }
                    }
             }
             else{
                 res.status(201).send(null);  
             }
             
         }
 
     })
     
     }
     });
       
                router.post('/sopranopost',   function(req,res,next){

                    if(req.isAuthenticated()){
                                
                               
                        
                       
                    
                        User.findById(req.user._id,async function(err,theuser){
                    
                            if(err){
                                console.log(err)
                            }
                            else{
                            
                           
                               if(theuser){
                                  
                                    const newpost = new Post({
                                        
                                          postssoprano:req.body.postssoprano,
                                          review:req.body.review,
                                          user:theuser._id,
                                   
                                      })
                                   if(newpost.postssoprano.length !== 0 && Number.isInteger(newpost.review)  ){
                                    const item= await theuser.populate('posts')
                                   
                                    try{
                                     find= await Post.aggregate([   
                                          {$match: {}},
                                          { $lookup: { from: 'users', localField: 'user', foreignField: '_id', as: 'user' } },           
                                          {$unwind: '$user'}, 
                                          {$group: {_id: {name: '$user.name'},  posts:{$push:{post:{ $ifNull: [ "$postssoprano",  null ]}}}}}
               
                                          
                           
                                     ])
                                    }
                                   catch{
                                      res.status(201).send('couldn^t found the item' ); 
                                      next(error)
                                   }
                                   if(!find){
                                      res.status(201).send('couldn^t found the item id' ); 
                                      next(err)
                                   }
                                   const post=   find.filter((element) => 
                                   element.posts.some((subElement) => subElement.post != null)).some((Element) => Element._id.name === theuser.name)
                                   if(post!=true){
                                     await newpost.save();                 
                                     theuser.posts.push(newpost);
                                      await theuser.save();                   
                                      res.status(201).json({slatt: item});

                                   }
                                   else{
                                     res.status(201).send(null);  
                                   }
                                    }
                             }
                             else{
                                 res.status(201).send(null);  
                             }
                             
                         }
                 
                     })
                     
                     }
                     });
                        router.post('/goodfellaspost',   function(req,res,next){

                            if(req.isAuthenticated()){
                                        
                                       
                                
                               
                            
                                User.findById(req.user._id,async function(err,theuser){
                            
                                    if(err){
                                        console.log(err)
                                    }
                                    else{
                                    
                                   
                                       if(theuser){
                                          
                                            const newpost = new Post({

                                                  review:req.body.review,
                                                  postsfella:req.body.postsfella,
                                                  user:theuser._id,
                                             
                                           
                                              })
                                           if(newpost.postsfella.length !== 0 && Number.isInteger(newpost.review)  ){
                                               const item= await theuser.populate('posts')
                                            
                                               try{
                                                find= await Post.aggregate([   
                                                     {$match: {}},
                                                     { $lookup: { from: 'users', localField: 'user', foreignField: '_id', as: 'user' } },           
                                                     {$unwind: '$user'}, 
                                                     {$group: {_id: {name: '$user.name'},  posts:{$push:{post:{ $ifNull: [ "$postsfella",  null ]}}}}}
               
                                                     
                                      
                                                ])
                                               }
                                              catch{
                                                 res.status(201).send('couldn^t found the item' ); 
                                                 next(error)
                                              }
                                              if(!find){
                                                 res.status(201).send('couldn^t found the item id' ); 
                                                 next(err)
                                              }
                                              const post=  find.filter((element) => 
                                              element.posts.some((subElement) => subElement.post != null)).some((Element) => Element._id.name === theuser.name)
               
                                              if(post!=true){
                                                await newpost.save();                 
                                                theuser.posts.push(newpost);
                                                 await theuser.save();                   
                                                 res.status(201).json({slatt: item});

                                              }
                                              else{
                                                res.status(201).send(null);  
                                              }
                                               }
                                        }
                                        else{
                                            res.status(201).send(null);  
                                        }
                                        
                                    }
                            
                                })
                                
                                }
                                });
                               
                                router.patch('/goodfellaspost',   function(req,res,next){

                                    if(req.isAuthenticated()){
                                        User.findByIdAndUpdate(user_id, { name: 'Gourav' },
                                        function (err, docs) {
                                                if (err){
                                                    console.log(err)
                                                }
                                                else{
                                                    console.log("Updated User : ", docs);
                                                }
                                            });
                                                            



                                    }
                                });
                                router.delete('/get/:pid',   function(req,res,next){

                                    if(req.isAuthenticated()){
                                       
                                        const Id = req.params.pid;  
                                       
                                    
                                        Post.findById(Id,async function(err,theuser){
                                    
                                            if(err){
                                                console.log(err)
                                            }
                                            else{
                                                const item= await theuser.populate('user')
                                                await item.remove();
                                                item.user.posts.pull(item);
                                                await item.user.save()    
                                                res.status(201).send(theuser);
                                                
                                        }
               
                                    })
                                     }
                                    });
                    
                              
                             
                    

                        


module.exports = router;



