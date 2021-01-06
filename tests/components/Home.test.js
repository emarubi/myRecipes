import { expect } from 'chai';
import React from 'react';

import Home from 'src/components/Home';

import recipesData from 'src/data';

// équivalent du render de react-dom
// permettre de simuler un rendu dans un environnement testable
import { shallow } from 'enzyme';

describe('Composant Home', () => {
  const wrapper = shallow(<Home recipes={recipesData} />);
  // on s'attend à avoir un élement avec une classe home
  it('contiens an element with a .home class', () => {
    // find = genre de querySelectorAll
    // a ne surtout pas confondre avec array.find
    // ici find est une méthode de wrapper, fournie par enzyme (shallow)
    // on en veut un seul
    expect(wrapper.find('.home')).to.have.lengthOf(1);
  });

  it('renders 2 .home-card elements when given 2 recipes', () => {
    expect(wrapper.find('.home__card')).to.have.lengthOf(2);
  });
});
