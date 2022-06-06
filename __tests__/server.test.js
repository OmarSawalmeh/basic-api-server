'use strict';

const {server} = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(server);
const { db } = require('../src/models/index');

// before any of the test create a connection
beforeAll(async () => {
    await db.sync();
});
  
// after all the tests are done
afterAll(async () => {
    await db.drop();
});

describe('Api-Server', ()=>{
    // Check if 404 is handled 
    test('Should respond with 404 status on an invalid method', async ()=>{
        const response = await mockRequest.get('/ynwa');
        expect(response.status).toEqual(404);
    });

    // Check if 500 is handled 
    test('Should respond with 500', async () => {
        const response = await mockRequest.get("/food/?name=");
        expect(response.status).toEqual(500);
    });

    // Test if can Read
    test("Can get all Clothes", async ()=>{
        const response = await mockRequest.get('/clothe');
        expect(response.status).toEqual(200);
    })

    // Test if can Read one Clothe
    test('Can get one Clothe', async ()=>{
        const response = await mockRequest.get('/clothe/2');
        expect(response.status).toEqual(200);
    });

    // Check can add a clothe
    test('Can Add A Clothe', async ()=>{
        const response = await mockRequest.post('/clothe').send({
            "color":"red",
            "size":"M",
            "price":"14"
        });
        expect(response.status).toEqual(201);
    });

    // Test Can Update the clothe
    it('can update a record', async () => {
        const response = await mockRequest.put('/clothe/1');
        expect(response.status).toBe(201);
    });

    // Test Can Delete record from 
    test('Can Delete a record', async ()=>{
        const response = await mockRequest.delete('/clothe/1');
        expect(response.status).toBe(204);
    })

})

  