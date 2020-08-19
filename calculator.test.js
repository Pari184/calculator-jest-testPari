const { add, subtract, multiply, divide, equals, clearAllfields } = require("./calculator")
const { TestScheduler } = require("jest")
    //Testing adding two integers
describe("valid additions", () => {
    test("1 + 2 = 3", () => {
        expect(add(1, 2)).toEqual(3);
    });
    // Testing adding two decimal values
    test("4.2 + 2 = 6.2", () => {
        expect(add(4.2, 2)).toEqual(6.2);
    });
});
//Testing subtracting two integers
describe("valid subtractions", () => {
    test("6 - 2 = 2", () => {
        expect(subtract(6, 2)).toEqual(4);
    });
    //Testing subtracting two decimals
    test("8.2 - 5 = 3.2", () => {
        expect(subtract(8.2, 5)).toBeCloseTo(3.2, 2);
    });

});
//Testing Multiplying two integers
describe("valid Multiply", () => {
    test("3 * 3 = 9", () => {
        expect(multiply(3, 3)).toEqual(9);
    });
    //Testing multiplying a string with integer.
    // test("2 * '5' not equal to 10 it should throw an error", () => {
    //     expect(() => {
    //         multiply(2, "5");
    //     }).toThrow("Input must be a number");
    // });
    test("20 * 10 = Throws error", () => {
        expect(() => {
            multiply("20", "10");
        }).toThrow('Strings are not accepted');
    });


});
//Testing Divide two integers
describe("valid Division", () => {
    test("9 / 3 = 3", () => {
            expect(divide(9, 3)).toEqual(3);
        })
        //Testing Divide a number by zero
        // test("Divide by 0 must throw an error", () => {
        //     expect(() => {
        //         divide(8, 0);
        //     }).toThrow('Do not divide by zero');
        // });
    test("Divide by 0 must throw an error", () => {
        expect(() => {
            divide(9, 0);
        }).toThrow('Do not divide by zero');
    });

});
//Test for equals function
describe("valid equals", () => {
    //Do division when only two numbers and '/' is entered.
    test("8/2 = 4", () => {
        expect(equals(8, '/', 2)).toBe(4);
    });
    //Do division when only one number and '/' is entered.
    test("16 / = 1", () => {
        expect(equals(16, '/')).toBeCloseTo(1.0000);
    });
});

//Test for clearAll function
describe("clear display area or display 0", () => {
    //Clear the numbers and display 0.
    test("8/2 AC", () => {
        expect(clearAllfields()).toBeCloseTo(0.0000);
    });
});