import React from 'react'
import RecipeCards from './RecipeCards'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'
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
        marginLeft: "42%"
    },
    mblHeaderWrapper: {
        paddingBottom: "10%",
        marginLeft: "27%"
    },
    header: {
        color: theme.palette.primary.main,
        fontFamily: theme.typography.fontFamily
    },
    mblHeader: {
        color: theme.palette.primary.main,
        fontFamily: theme.typography.fontFamily,
        fontSize: "3rem"
    },
    recipeContainer: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        paddingLeft: "10%",
        paddingRight: "10%",
    },
    mblRecipeContainer: {
        marginLeft: '3.75%',
    },
    mblRecipeSpace: {
        paddingBottom: "5%"
    }

})

export default function Recipes() {
    const classes = useStyles();
    const matches = useMediaQuery('(max-width:600px)');

    return (
        <div className={classes.main}>
            <div className={matches ? classes.mblHeaderWrapper : classes.headerWrapper}>
                <Typography variant="h1" className={matches ? classes.mblHeader : classes.header}>
                    Recipes
                </Typography>
            </div>
            <div className={matches ? classes.mblRecipeContainer : classes.recipeContainer}>
                { recipesData.map(recipe =>
                <div key={recipe.id} className={matches ? classes.mblRecipeSpace : " "}>
                    <RecipeCards { ...recipe } />
                </div>
                )}
            </div>
        </div>
    );
}
