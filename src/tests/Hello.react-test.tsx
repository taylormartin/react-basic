import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Hello from '../components/Hello';

test('h1 changes class when hovered', () => {

  const component = renderer.create(
    <Hello compiler="Typescript" framework="React" />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.props.onMouseEnter();

  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.props.onMouseLeave();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});