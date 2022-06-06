'use strict';

const logger = require('../src/middleware/logger');

describe("Logger Middleware.....", ()=>{
    let consoleSpy; // Initialize 
    let req = {};
    let res = {};
    let next = jest.fn();


    beforeEach(()=>{
        consoleSpy = jest.spyOn(console, "log")
    });

    test("It Is Loggong", ()=>{
        logger(req, res, next);
        expect(consoleSpy).toHaveBeenCalled();

    });

    test("It Is Callling Next", ()=>{
        expect(next).toHaveBeenCalled();
    })
})