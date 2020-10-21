import React from "react"
// import { Theme, makeStyles, createStyles } from "@material-ui/core/styles"
import { useSelector } from "react-redux"
import ButtonBase from "@material-ui/core/ButtonBase"
import Typography from "@material-ui/core/Typography"

import { Product } from "../global"

import { store, add } from "./store"

const ProductList = () => {
  const products = useSelector((state: Product[]) => state)

  return (
    <React.Fragment>
      {products.map((product: Product) => (
        <ButtonBase
        key={product.id}
        onClick={() => store.dispatch(add(product))}
        >
          <Typography
          component="span">
            {product.name}
          </Typography>
        </ButtonBase>
      ))}
    </React.Fragment>
  )
}

export { ProductList }
