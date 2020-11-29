import { Typography } from '@material-ui/core';
import React from 'react'
import { useParams } from 'react-router-dom'
import recipesData from '../Data/recipesData.json'
import { makeStyles } from '@material-ui/core/styles'
import theme from '../theme'

const useStyles = makeStyles({
    main: {
        backgroundColor: theme.palette.primary.main,
        display: "flex",
        paddingTop: "5%",
        paddingBottom: "10%",
    },
    dish: {
        paddingTop: "2%",
        paddingLeft: "5%"
    },
    picture: {
        paddingTop: "5%",
    },
    content: {
        paddingTop: "7%",
        paddingLeft: "10%",
        maxWidth: 700
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
    return (
        <div className={classes.main}>
            <div className={classes.dish}>
                <Typography variant="h3" style={{fontFamily: theme.typography.fontFamily}}>
                    { recipe.recipe.dishName }
                </Typography>
                <div className={classes.picture}>
                    <img src={require(`../Assets/${recipe.recipe.picture}`)} alt={recipe.recipe.dishName}/>
                </div>
            </div>
            <div className={classes.content}>
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
                        <Typography variant="body1">
                            - { item }
                        </Typography>
                    )}
                </div>
            </div>
        </div>
        
    )
}
