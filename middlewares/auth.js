const jwt = require('jsonwebtoken');
//Verify Token
const auth = async (req, res, next) => {
    try {
        //Check token in header
        const token = req.header('x-auth-key');
        //check if token not available
        if (!token) {
            //Fobidden
            return res.status(403).send({ message: "Missing authentication token" });
        }
        // verify token
        const decoded = jwt.verify(token, 'secretkey');
        if (!decoded) {
            return res.status(403).send("Unauthorize access");
        }
        //next middleweare
        next();

    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {auth}