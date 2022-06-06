'use strict';

const express = require('express');
const clothesRouter = express.Router();

const { Clothes } = require('../models/index');

// RESTful Route Delectation 
clothesRouter.get('/clothe', getClothe); 
clothesRouter.get('/clothe/:id', getOneClothe); 
clothesRouter.post('/clothe', createClothe);
clothesRouter.put('/clothe/:id', updateClothe); 
clothesRouter.delete('/clothe/:id', deleteClothe); 


async function getClothe(req, res) {
  const allClothes = await Clothes.findAll();
  res.status(200).json(allClothes);
}

async function getOneClothe(req, res) {
  const id = parseInt(req.params.id);
  const clothe = await Clothes.findOne({
    where: {
      id: id
    }
  });
  res.status(200).json(clothe);
}

async function createClothe(req, res) {
  const obj = req.body;
  let clothe = await Clothes.create(obj);
  res.status(201).json(clothe);
}

async function updateClothe(req, res) {
  const id = parseInt(req.params.id);
  const obj = req.body;
  let foundClothe = await Clothes.findOne({ where: { id: id } });
  const updatedClothe = await foundClothe.update(obj);
  res.status(201).json(updatedClothe);
}

async function deleteClothe(req, res) {
  const id = parseInt(req.params.id);
  const deletedClothe = await Clothes.destroy({ where: { id } });
  res.status(204).json(deletedClothe);
}


module.exports = clothesRouter;