'use strict';

const express = require('express');
const foodRouter = express.Router();

const { Food } = require('../models/index');

// RESTful Route Delectation 
foodRouter.get('/food', getFood);
foodRouter.get('/food/:id', getOneFood);
foodRouter.post('/food', createFood);
foodRouter.put('/food/:id', updateFood);
foodRouter.delete('/food/:id', deleteFood);

async function getFood(req, res){
    const allFood = await Food.findAll();
    res.status(200).json(allFood);
}

async function getOneFood(req, res){
    const id = parseInt(req.params.id);
    const food = await Food.findOne({where:{id:id}});
    res.status(200).json(food);
}

async function createFood(req, res){
    const obj = req.body;
    let food = await Food.create(obj);
    res.status(201).json(food);
}

async function updateFood(req, res){
    const id = parseInt(req.params.id);
    let food = await Food.findOne({where:{id:id}});

    const obj = req.body;
    const updatedFood = await food.update(obj);
    res.status(201).json(updatedFood);
}

async function deleteFood(req, res) {
    const id = parseInt(req.params.id);
    const deletedFood = await Clothes.destroy({ where: { id } });
    res.status(204).json(deletedFood);
  }

module.exports = foodRouter;