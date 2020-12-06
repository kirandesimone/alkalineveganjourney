import React from 'react'
import { useParams } from 'react-router-dom'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import recipesData from '../Data/recipesData.json'
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import theme from '../theme'

const useStyles = makeStyles({
    main: {
        backgroundColor: theme.palette.primary.main,
        display: "flex",
        paddingTop: "5%",
        paddingBottom: "10%",
    },
    mblMain: {
        backgroundColor: theme.palette.primary.main,
        display: "flex",
        flexDirection: "column",
        paddingTop: "5%",
        paddingBottom: "10%",
    },
    dish: {
        paddingTop: "10%",
        paddingLeft: "5%"
    },
    mblDish: {
        paddingTop: "2%",
        paddingLeft: "3%"
    },
    dishName: {
        fontFamily: theme.typography.fontFamily
    },
    mblDishName: {
        fontFamily: theme.typography.fontFamily,
        fontSize: "1.85rem"
    },
    picture: {
        paddingTop: "5%",
    },
    content: {
        paddingTop: "15%",
        paddingLeft: "10%",
        maxWidth: 700
    },
    mblContent: {
        paddingTop: "7%",
        paddingLeft: "3%",
        maxWidth: 500
    },
    directions: {
        paddingBottom: "4%"
    },
})

export default function Recipe() {
    let { id } = useParams();
    const recipeId = parseInt(id);
    const recipe = recipesData.filter(data => recipeId === data.id).pop();
    const classes = useStyles();
    const matches = useMediaQuery('(max-width:600px)');

    return (
        <div className={matches ? classes.mblMain : classes.main}>
            <div className={matches ? classes.mblDish : classes.dish}>
                <Typography variant="h3" className={matches ? classes.mblDishName : classes.dishName}>
                    { recipe.recipe.dishName }
                </Typography>
                <div className={classes.picture}>
                    <img src={ matches ? 
                    require(`../Assets/${recipe.recipe.mbl_pic}`) : 
                    require(`../Assets/${recipe.recipe.picture}`)} 
                    alt={recipe.recipe.dishName}
                    />
                </div>
            </div>
            <div className={matches ? classes.mblContent : classes.content}>
                <div className={classes.directions}>
                    <Typography variant="h5" style={{paddingBottom: "2%", fontFamily: theme.typography.fontFamily}}>
                        Directions:
                    </Typography>
                    <Typography variant="body1">
                        { recipe.recipe.directions }
                    </Typography>
                </div>
                <div className={classes.ingredients}>
                    <Typography variant="h5" style={{paddingBottom: "2%", fontFamily: theme.typography.fontFamily}}>
                        Ingredients:
                    </Typography>
                    { recipe.recipe.ingredients.map(item => 
                        <Typography key={recipe.recipe.ingredients.indexOf(item)} variant="body1">
                            - { item }
                        </Typography>
                    )}
                </div>
            </div>
        </div>
        
    )
}
