'use strict'

const properties =require('../package.json')
const childInfo = require('');//add from whre to get the info

const controllers = {

    root: (req,res) => {
        const rootInfo = {
            // information from child from json file 
            //for eg name: properties.name

        }
        res.json(rootInfo);
    },

getChildInfo: (req, res) => {
    childInfo.find(req,res, (err, info) => {
        if(err){
            res.send(err);
            res.jason(info);
        }


    });

},



};

module.exports = controllers;