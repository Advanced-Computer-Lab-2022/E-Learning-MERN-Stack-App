const Guest = require('../models/guest');
const Cart = require('../models/cart');
const jwt = require('jsonwebtoken');
const Course = require('../models/course');
exports.signup = (req, res) => {
    Guest.findOne({email: req.body.email})
   .exec((error, guest) => {
    if(error) return res.status(400).json({
        message: 'an error occured' 
    });
    
    if(guest) return res.status(400).json({
           message: 'User already registered' 
       });

       const _guest = new Guest({
           firstName: req.body.firstName,
           lastName: req.body.lastName,
           userName: req.body.userName,
           email: req.body.email,
           password: req.body.password,
           country: req.body.country,
           gender: req.body.gender
 
       });
       _guest.save((error, data) => {
           if(error){
           return res.status(400).json({
               message: 'Something went wrong'
           });
       }
       if(data){
           const _cart = new Cart({
               owner: data._id

           });
           _cart.save((error, cart) => {
               if(error) return res.status(400).json({message: "something went wrong..!"});
               if(cart) return res.status(201).json({message: "user registered & cart initialized"});
           });
      
       }
    });
       
   });
}

exports.signin = (req, res) => {
    Guest.findOne({userName: req.body.userName})
    .exec((error, guest) =>{
        if(error) return res.status(400).json({error});
        if(guest){
            if(guest.authenticate(req.body.password)){
                const token = jwt.sign({_id:guest._id, role: guest.role}, process.env.JWT_SECRET, {expiresIn: '1d'});
                return res.status(200).json({
                    token,
                    guest
                });

            }
            else{
                return res.status(400).json({
                    message: 'Invalid password'

                });
            }
        }
        else return res.status(400).json({message: 'something went wrong'});

    });
};
exports.addToCart = (req, res) => {
    const course = req.body.item;
    Cart.findOneAndUpdate({owner: req.user._id, "items.course": course},  {
        "$push":{"items": course}
    })
    .exec((error, cart) => {
        if(error) return res.status(400).json({error});
        if(cart) return res.status(200).json({message: "item added to cart"});
    });


};




// exports.removeFromCart = (req, res) => {
//     const course = req.body.item;
//     Cart.findOneAndUpdate({owner: req.user._id, "items.course": course},  {
//         "$push":{"items": course}
//     })
//     .exec((error, cart) => {
//         if(error) return res.status(400).json({error});
//         if(cart) return res.status(200).json({message: "item added to cart"});
//     });

// };
// exports.emptyCart = (req, res) => {

// };
