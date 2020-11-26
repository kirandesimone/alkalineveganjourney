import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography  from '@material-ui/core/Typography'
import theme from '../theme'
import frontPic from '../Assets/rsz_front.jpg'
import vegSoup from '../Assets/rsz_all_in_veg_soup.jpg'

const useStyles = makeStyles({
    container: {
        display: "flex"
    },
    main: {
        backgroundColor: theme.palette.primary.dark,
        paddingTop: "5%"
    },
    recipes: {
        paddingTop: "7%",
        paddingBottom: "5%"
    },
    imgWrapper: {
        paddingLeft: "5%",
        overflow: "hidden"
    },
    mainContent: {
        maxWidth: 700,
        marginTop: "7%",
        paddingLeft: "5%",
        
    },
    recipeTitle: {
        marginLeft: "42%",
        paddingBottom: "5%"
    },
    favRecipeContent: {
        marginLeft: "15%",
        paddingTop: "5%"
    },
    favRecipePic: {
        marginLeft: "22%"
    }
    
    
})

export default function Home() {
    const classes = useStyles();
    return (
        <div>
            <section className={classes.main}>
                <div className={classes.container}>
                    <div className={classes.imgWrapper}>
                        <img src={frontPic} alt="pink smoothie"/>
                    </div>
                    <div className={classes.mainContent}>
                        <div style={{paddingBottom: "5%"}}>
                            <Typography variant="h3" component="h3" style={{color: theme.palette.primary.main, fontFamily: theme.typography.fontFamily}}>
                                AlkalineVeganJourney Food & Recipes
                            </Typography>
                        </div>
                        <Typography style={{fontSize:"1.5rem"}}>
                            With the hyper-convenience of modern life, many of us can only operate a microwave. 
                            A home-cooked meal is not a luxury, anyone can do it!
                        </Typography>
                    </div>
                </div>
            </section>
            <section className={classes.recipes}>
                <div className={classes.recipeTitle}>
                    <Typography variant="h3" style={{color:theme.palette.primary.dark, fontFamily: theme.typography.fontFamily}}>
                        Favorite Recipe
                    </Typography>
                </div>
                <div style={{display: "flex"}}>
                    <div className={classes.favRecipeContent}>
                        <Typography variant="h4">
                            All in Vegetable Soup
                        </Typography>
                        <Typography>
                            *Details on Recipes page
                        </Typography>
                    </div>
                    <div className={classes.favRecipePic}>
                        <img src={vegSoup} alt="bowl of soup"/>
                    </div>
                </div>
            </section>
            <section>

            </section>
        </div>
    )
}
