import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux'
import { store } from './store'
import { ProductList } from './ProductList';


const renderComponent = (): RenderResult => {
  render(
    <Provider store={store}>
      <ProductList />
    </Provider>
  )
}

test('Renders Shopping Cart Component', () => {
  const { getByText } = render(renderComponent())
  const productListTitle = getByText(/Buy Excellent Hardware Here!/i)
  expect(productListTitle).toBeInTheDocument()
})

test('Render product with id 1', () => {
  const { getByTestId } = render(renderComponent())
  const productIdOne = getByTestId(/1/i)

  expect(productIdOne).toBeInTheDocument()
})

test('Render products with id 3', () => {
  const { getByTestId } = render(renderComponent())
  const productIdThree = getByTestId(/3/i)

  expect(productIdThree).toBeInTheDocument()
})
