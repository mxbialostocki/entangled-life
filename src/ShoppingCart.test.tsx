import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux'
import { store } from './store'
import { ShoppingCart } from './ShoppingCart';

const renderComponent = (): RenderResult => {
  render(
    <Provider store={store}>
      <ShoppingCart />
    </Provider>
  )
}

test('Renders Shopping Cart Component', () => {
  const { getByText } = render(renderComponent())
  const title = getByText(/Shopping Cart/i)
  expect(title).toBeInTheDocument()
})

test('Total should be initialised at Zero', () => {
  const { getByText } = render(renderComponent())
  const cartTotal = getByText(/Total: \$0/i)
  expect(cartTotal).toBeInTheDocument()
})

// This is the direction I'd want to go in when I had some deeper testing environments set up, with the equivalent of components having mounted etc...

// test('renders add button element', () => {
//   const { getByLabelText } = render(renderComponent());
//   const addButton = getByLabelText(/add/i);
//   expect(addButton).toBeInTheDocument();
// });

// test('renders remove button element', () => {
//   const { getByLabelText } = render(renderComponent());
//   const removeButton = getByLabelText(/remove/i);
//   expect(removeButton).toBeInTheDocument();
// });

