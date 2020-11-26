import React from 'react'
import RecipeCards from './RecipeCards'
import Typography from '@material-ui/core/Typography'
import recipesData from '../Data/recipesData.json'
import { makeStyles } from '@material-ui/core/styles'
import theme from '../theme'

const useStyles = makeStyles({
    main: {
        backgroundColor: theme.palette.primary.dark,
        paddingTop: "10%",
        paddingBottom: "10%"
    },
    headerWrapper: {
        paddingBottom: "10%",
        paddingLeft: "42%"
    },
    header: {
        color: theme.palette.primary.main,
        fontFamily: theme.typography.fontFamily
    },
    recipeContainer: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        paddingLeft: "10%",
        paddingRight: "10%",
    }
})

export default function Recipes() {
    const classes = useStyles();
    return (
        <div className={classes.main}>
            <div className={classes.headerWrapper}>
                <Typography variant="h1" className={classes.header}>
                    Recipes
                </Typography>
            </div>
            <div className={classes.recipeContainer}>
                { recipesData.map(recipe =>
                <div>
                    <RecipeCards { ...recipe } />
                </div>
                )}
            </div>
        </div>
    );
}
