import React from "react";
import { Grid } from '@material-ui/core';

import Product from "./Product/Product";

const products = [
    {id: 1, name: 'Shoes', description: 'Running shoes.', price:'$5', image: "https://cdn.sweatband.com/head_sprint_team_2.0_mens_tennis_shoes_head_sprint_team_2.0_mens_tennis_shoes_2000x2000.jpg"},
    {id: 2, name: 'Macbook', description: 'Apple macbook.', price:'$10', image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fluxodeals.com%2Fwp-content%2Fuploads%2F2021%2F01%2FApple-MacBook-Air-2020-Apple-M1-Chip-8GB-RAM-256GB-SSD-13.3-Inch8.jpg&f=1&nofb=1"}
]

const Products = ()=> {
    return (
        <main>
        <Grid container justify="center" spacing={4}>
            {products.map((product) =>(
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product}/>
                    </Grid>
            ))}

        </Grid>
    </main>  
    )
    
}

export default Products;