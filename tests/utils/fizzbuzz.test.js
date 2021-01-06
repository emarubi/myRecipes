import { expect } from 'chai';

import { fizzBuzz } from 'src/utils';

describe('fizzBuzz', () => {
  it('should work for a length of 5', () => {
    expect(fizzBuzz(5)).to.be.equal(
      '012Fizz4Buzz',
    );
    it('should work for a length of 7', () => {
      expect(fizzBuzz(7)).to.be.equal(
        '012Fizz4BuzzFizz7',
      );
    });
    it('should work for a length of 15', () => {
      expect(fizzBuzz(15)).to.be.equal(
        '012Fizz4BuzzFizz78FizzBuzz11Fizz1314FizzBuzz',
      );
    });
  });
});
