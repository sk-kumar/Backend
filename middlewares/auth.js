const jwt = require('jsonwebtoken');
//Verify Token
const auth = async (req, res, next) => {
    try {
        //Check token in header
        const bearerHeader = req.headers['authorization'];
        //check if bearer is undefined
        if (typeof bearerHeader == 'undefined') {
            //Fobidden
            return res.sendStatus(403);
        }
            //split the space at the bearer
            const bearer = bearerHeader.split(' ');
            //Get token from string
            const bearerToken = bearer[1];
            //set the token
            req.token = bearerToken;

            // verify token
        const decoded = jwt.verify(bearerToken, 'secretkey');

        if (!decoded) {
            return res.status(403).send("Unauthorize access");
        }
        //next middleweare or route
        next();

    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {auth}
