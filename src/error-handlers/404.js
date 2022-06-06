'use strict';

module.exports = (req, res, next)=>{
    res.status(404).send({
        Code: 404,
        Route: req.path,
        Message: 'Page not found'
    })
};