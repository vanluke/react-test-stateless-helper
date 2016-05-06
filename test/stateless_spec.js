import {expect} from 'chai';
import wrap from '../src';
import stateLessComponent from './stateless';
import {renderIntoDocument,  scryRenderedDOMComponentsWithTag} from 'react-addons-test-utils';

describe('can test stateless components', () => {
  it('renders a button', () => {
    const props = { name: 'xyz' };
    const component = renderIntoDocument(wrap(stateLessComponent, props));
    const button = scryRenderedDOMComponentsWithTag(component, 'button');
    expect(button.length).to.equal(1);
    expect(button[0].textContent).to.equal('xyz');
  });
});
