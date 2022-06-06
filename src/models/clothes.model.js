'use strict';

// Our table schema
const Clothes = (sequelize, DataTypes)=> sequelize.define('clothes',{
    color:{
        type: DataTypes.STRING,
        allowNull: false 
    },
    size:{
        type: DataTypes.STRING,
        allowNull: false 
    },
    price:{
        type: DataTypes.INTEGER
    }
});

module.exports = Clothes;