var car = require('../car');
var assert = require('assert');

describe('return objects', function() {

    it('colours of cars and number of passengers', function() {
        var result = car.carData();
        assert.deepEqual( { colour: 'Red', passenger: 2 },
                                 { colour: 'Green', passenger: 5 };
				// 				 { colour: 'Blue', passenger: 3 },
				// 				 { colour: 'Gold', passenger: 1 },
				// 				 { colour: 'White', passenger: 6 },
				// 				 { colour: 'Pink', passenger: 2 });
    });
})