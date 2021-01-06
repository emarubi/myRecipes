import { expect } from 'chai';

import { slugifyTitle } from 'src/utils';

describe('Recipe slugs', () => {
  describe('structure', () => {
    // tester si c'est une fonction
    it('should be a function', () => {
      expect(slugifyTitle).to.be.a('function');
    });

    // tester si notre fonction renvoie une string
    it('should return a string', () => {
      expect(slugifyTitle('Hello')).to.be.a('string');
    });
  });
  describe('execution', () => {
    it('should return a slugified string', () => {
      expect(slugifyTitle('SALUT tu vas bien')).to.be.equal('salut-tu-vas-bien');
      expect(slugifyTitle('123_salut')).to.be.equal('123-salut');
      expect(slugifyTitle('&éa COUCOU')).to.be.equal('a-coucou');
    });
  });
});
