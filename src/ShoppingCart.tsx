import React from "react"
import { useSelector } from "react-redux"

import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Typography
} from "@material-ui/core"
// import DeleteIcon from "@material-ui/icons/Delete"
// import RemoveIcon from "@material-ui/icons/Remove"
import AddIcon from "@material-ui/icons/Add"

import { store, add } from "./store"
import { Product } from "../global"

const ShoppingCart = () => {
  const products = useSelector((state: Product[]) => state)

  return (
    <>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Shopping Cart
      </Typography>
      <Typography component="p" variant="body1">
        You have {products.filter(product => product.added).length} items in your basket
      </Typography>
      <List>
        {products
          .filter(product => product.added)
          .map((product: Product) => (
            <React.Fragment key={product.id}>
              <ListItem alignItems="flex-start">
                
                <ListItemText
                  primary={product.name}
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        color="textPrimary"
                      >
                        ${(product.price / 100).toFixed(2)}
                      </Typography>
                      {` — ${product.quantity} || — subTotal: ${(product.quantity * product.price / 100).toFixed(2)}`}
                    </React.Fragment>
                  }
                />
                <ListItemSecondaryAction>
                  <IconButton
                    aria-label="add"
                    onClick={() => store.dispatch(add({ id: product.id }))}
                  >
                    <AddIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <Divider variant="inset" component="li" />
            </React.Fragment>
          ))}
        <ListItem>
          <Typography variant="subtitle1">
            $
            {(
              products
                .filter(product => product.added)
                .reduce((acc, current) => (acc += current.price * current.quantity), 0) / 100
            ).toFixed(2)}
          </Typography>
        </ListItem>
      </List>
    </>
  )
}

export { ShoppingCart }
