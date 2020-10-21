import React from "react"
import { useSelector } from "react-redux"
import { Theme, makeStyles, createStyles } from "@material-ui/core/styles"
import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Typography
} from "@material-ui/core"
import DeleteIcon from "@material-ui/icons/Delete"
import RemoveIcon from "@material-ui/icons/Remove"
import AddIcon from "@material-ui/icons/Add"

import { store, add, remove, deleteProduct } from "./store"
import { Product } from "../global"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    primary: {
      color: "#f50057"
    }
  })
) 

const ShoppingCart = () => {
  const styles = useStyles()
  const products = useSelector((state: Product[]) => state)

  return (
    <>
      <Typography component="h2" variant="h2" className={styles.primary} gutterBottom>
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
                  primary={`${product.name} || $${(product.price).toFixed(2)}`}
                  secondary={
                    <React.Fragment>
                      
                      {` You have x${product.quantity} in your cart || — subTotal: $${(product.quantity * product.price).toFixed(2)}`}
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
                  <IconButton
                    aria-label="remove"
                    onClick={() => store.dispatch(remove({ id: product.id }))}
                  >
                    <RemoveIcon />
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    onClick={() => store.dispatch(deleteProduct({ id: product.id }))}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <Divider variant="inset" component="li" />
            </React.Fragment>
          ))}
        <ListItem>
          <Typography variant="subtitle1">
            Total: $
            {(
              products
                .filter(product => product.added)
                .reduce((acc, current) => (acc += current.price * current.quantity), 0)).toFixed(2)}
          </Typography>
        </ListItem>
      </List>
    </>
  )
}

export { ShoppingCart }
