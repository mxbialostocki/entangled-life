import React from 'react'
import { Container, Box, Typography } from "@material-ui/core"

import { ProductList } from "./ProductList"
import { ShoppingCart } from "./ShoppingCart"

const App = () => {
  return (
    <div>
      <header>
        <Container>
          <Box mt={5} mb={5}>
            <Typography variant="h1">
              Buy Excellent Hardware Here!
            </Typography>
          </Box>
          <Box mt={5} mb={5}>
            <ProductList />
          </Box>
          <Box mt={5} mb={5}>
            <ShoppingCart />
          </Box>
        </Container>
      </header>
    </div>
  );
}

export default App;
