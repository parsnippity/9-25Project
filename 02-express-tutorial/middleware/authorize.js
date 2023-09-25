const authorize = (req, res, next) => {
    //an example of how an api key can be used. NOT PROPER FOR REAL USE. This is just a small example for now
    const {apiKey} = req.query;
    if(apiKey === "ping"){
        console.log("Authorized Access Granted");
        //this modifies the request object for the next response
        req.user = {name: "Jimmy Johns", id:123456}
        next()
    } else {
        console.log("Authorized Access Denied");
        res.send({results: [], status:401, message:"Access Denied"})
        // next();
    }
}

module.exports = authorize;