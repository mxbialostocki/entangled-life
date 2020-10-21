import React from "react"
import { Theme, makeStyles, createStyles } from "@material-ui/core/styles"
import { useSelector } from "react-redux"
import ButtonBase from "@material-ui/core/ButtonBase"
import { Typography, Grid } from "@material-ui/core"

import { Product } from "../global"

import { store, add } from "./store"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    productButton: {
      padding: "1rem",
      border: ".1px solid #f50057",
      borderRadius: "10px"
    }
  })
) 

const ProductList = () => {
  const styles = useStyles()
  const products = useSelector((state: Product[]) => state)

  return (
    <React.Fragment>
      <Typography component="h1" variant="h2">
        Buy Excellent Hardware Here!
      </Typography>
      <Grid container spacing={2} direction="column" >
          {products.map((product: Product) => (
            <Grid item xs={3} key={product.id}>
              <ButtonBase
              focusRipple
              data-testid={product.id}
              className={styles.productButton}
              onClick={() => store.dispatch(add(product))}
              >
                <Typography variant="body1">
                  {product.name}, ${product.price.toFixed(2)}
                </Typography>
              </ButtonBase>
            </Grid>
          ))}
      </Grid>
    </React.Fragment>
  )
}

export { ProductList }
