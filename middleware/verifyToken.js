const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
   try{
    let token = req.headers.authorization;

    if(token){
           token = token.split(" ")[1];
           let user = jwt.verify(token, process.env.JWT_SECRET)
           req.userId = user.id
    }else{
        res.status(401).json({message: "Unauthorized user"})
    }
      next()
   }catch(error){
    console.log(error);
    res.status(401).json({message: "Unauthorized user"})
   }
};

module.exports = verifyToken;
