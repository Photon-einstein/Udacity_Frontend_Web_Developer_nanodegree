/* eslint-disable no-undef */
// test/shuffle.test.js

// Import the expect assertion library from Chai
import { expect } from "chai";
// Import the shuffle function from its source file
import { shuffle } from "../src/shuffle.js";

// Define an initial array of cards for testing.
let cards = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// Create a deep copy of the initial array.
const cardsInitial = [...cards];

// Describe block for the shuffle function tests.
// This groups related tests together.
describe("Shuffle Function", () => {
  // Test case 1: Verify that the shuffled array's order is different from the original.
  it("should return an array with a different order than the original", () => {
    const shuffledCards = shuffle([...cards]);
    expect(shuffledCards).to.not.deep.equal(cardsInitial);
  });

  // Test case 2: Verify that the shuffled array contains the same elements
  it("should contain the same elements as the original array", () => {
    const shuffledCards = shuffle([...cards]);
    expect(shuffledCards).to.have.lengthOf(cardsInitial.length);
    expect(shuffledCards).to.have.members(cardsInitial);
  });

  // Test case 3: Should return an empty array after shuffling if a given empty array is given as input
  it("should return an empty array if given an empty array", () => {
    const emptyArray = [];
    const shuffledEmptyArray = shuffle(emptyArray);
    expect(shuffledEmptyArray).to.deep.equal([]);
    expect(shuffledEmptyArray).to.have.lengthOf(0);
  });

  // Test case 4: Should return the same array if a single element array is given as input to the shuffle function
  it("should return the same array if given a single-element array", () => {
    const singleElementArray = [42];
    const shuffledSingleElementArray = shuffle(singleElementArray);
    expect(shuffledSingleElementArray).to.deep.equal([42]);
    expect(shuffledSingleElementArray).to.have.lengthOf(1);
  });
});
