import React from "react"
// import { Theme, makeStyles, createStyles } from "@material-ui/core/styles"
import { useSelector } from "react-redux"
import ButtonBase from "@material-ui/core/ButtonBase"
import { Typography, Grid } from "@material-ui/core"

import { Product } from "../global"

import { store, add } from "./store"

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     imageSrc: {
   
//   })
// ) 

const ProductList = () => {
  // const styles = useStyles()
  const products = useSelector((state: Product[]) => state)

  return (
    <React.Fragment>
      <Grid container spacing={8} >
        <Grid item xs={2}>
          {products.map((product: Product) => (
            <ButtonBase
            key={product.id}
            onClick={() => store.dispatch(add(product))}
            >
              <Typography
              component="span">
                {product.name}
              </Typography>
              <Typography
              component="span">
                ${product.price.toFixed(2)}
              </Typography>
            </ButtonBase>
          ))}
          </Grid>
      </Grid>
    </React.Fragment>
  )
}

export { ProductList }
