const jwt = require("jsonwebtoken");
exports.requireSignin = (req, res, next) => {
    if(req.headers.authorization){
    const token = req.headers.authorization;
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    }
    else{
        return res.status(400).json({message: 'Athorization Required'});
    }
    next();
}

exports.isAdmin = (req, res, next) => {
    if(req.user.role !== 'admin'){
        return res.status(400).json({message: 'Access Denied'});
    }
    next();

};
// exports.isInstructor = (req, res, next) => {
//     if(req.user.role !== 'instructor'){
//         return res.status(400).json({message: 'Access Denied'});
//     }
//     next();

// };