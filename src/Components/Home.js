import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography  from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import theme from '../theme'
import frontPic from '../Assets/rsz_front.jpg'
import mblFront from '../Assets/mbl_front.jpg'
import vegSoup from '../Assets/rsz_all_in_veg_soup.jpg'
import mblVegSoup from '../Assets/mbl_all_in.jpg'
import drSebi from '../Assets/dr_sebi.jpg'
import Image from "react-image-enlarger"

const useStyles = makeStyles({
    main: {
        backgroundColor: theme.palette.primary.dark,
        paddingTop: "10%"
    },
    title: {
        color: theme.palette.primary.main, 
        fontFamily: theme.typography.fontFamily, 
        fontSize: "2rem"
    },
    imgWrapper: {
        marginLeft: "5%",
        overflow: "hidden"
    },
    mainContent: {
        maxWidth: 700,
        marginTop: "7%",
        paddingLeft: "5%",
    },
    recipes: {
        backgroundColor: theme.palette.primary.main,
        paddingTop: "7%",
        paddingBottom: "5%"
    },
    recipeTitleWrap: {
        marginLeft: "42%",
        paddingBottom: "10%"
    },
    mblRecipeTitleWrap: {
        marginLeft: "20%",
        paddingBottom: "5%",
    },
    favRecipeTitle: {
        fontFamily: theme.typography.fontFamily,
    },
    mblFavRecipeTitle: {
        fontFamily: theme.typography.fontFamily,
        fontSize: "2rem"
    },
    favRecipeContent: {
        marginLeft: "15%",
        paddingTop: "5%"
    },
    mblFavRecipeContent: {
        marginLeft: "7%",
        paddingTop: "5%",
        paddingBottom: "5%"
    },
    favRecipePic: {
        marginLeft: "22%",
        overflow: "hidden"
    },
    mblFavRecipePic: {
        marginLeft: "3%"
    },
    sebiTitleWrap: {
        marginLeft: "40%",
        paddingBottom: "5%"
    },
    mblSebiTitleWrap: {
        marginLeft: "15%",
        paddingBottom: "10%"
    },
    sebiTitle: {
        fontFamily: theme.typography.fontFamily
    },
    mblSebititle: {
        fontFamily: theme.typography.fontFamily,
        fontSize: "2rem"
    },
    foodListWrap: {
        marginLeft: "33.5%", 
        paddingBottom: "5%"
    },
    mblFoodListWrap: {
        marginLeft: "2%",
        paddingBottom: "5%"
    },
    mblWrapper: {
        zIndex: 5,
        paddingLeft: "3%"
    },
    
    
    
})

export default function Home() {
    const classes = useStyles();
    const [zoomed, setZoomed] = React.useState(false);
    const matches = useMediaQuery('(max-width:600px)');
    return (
        <div>
            <section className={classes.main}>
                <div style={matches ? 
                    {display: 'flex', flexDirection: 'column'} : {display: "flex"}}
                >
                    <div className={matches ? classes.mblWrapper : classes.imgWrapper}>
                        <img src={matches ? mblFront : frontPic} alt="pink smoothie"/>
                    </div>
                    <div className={classes.mainContent}>
                        <div style={{paddingBottom: "5%"}}>
                            <Typography variant="h3" component="h3" className={classes.title}>
                                AlkalineVeganJourney Food & Recipes
                            </Typography>
                        </div>
                        <Typography variant="body1" style={{fontSize:"1.5rem", paddingBottom: "5%"}}>
                            With the hyper-convenience of modern life, many of us can only operate a microwave. 
                            A home-cooked meal is not a luxury, anyone can do it!
                        </Typography>
                    </div>
                </div>
            </section>
            <section className={classes.recipes}>
                <div className={matches ? classes.mblRecipeTitleWrap : classes.recipeTitleWrap}>
                    <Typography variant="h3" className={matches ? classes.mblFavRecipeTitle : classes.favRecipeTitle}>
                        Featured Recipe
                    </Typography>
                </div>
                <div style={matches ? 
                    {display: "flex", flexDirection: 'column'} : { display: 'flex'}
                    }>
                    <div className={matches ? classes.mblFavRecipeContent : classes.favRecipeContent}>
                        <Typography variant="h4" style={{fontFamily: theme.typography.fontFamily}}>
                            All in Vegetable Soup
                        </Typography>
                        <Typography variant="body1">
                            *Details on Recipes page
                        </Typography>
                    </div>
                    <div className={matches ? classes.mblFavRecipePic : classes.favRecipePic}>
                        <img src={matches ? mblVegSoup : vegSoup} alt="bowl of soup"/>
                    </div>
                </div>
            </section>
            <section style={{paddingTop: "5%"}}>
                <div>
                    <div className={matches ? classes.mblSebiTitleWrap : classes.sebiTitleWrap}>
                        <Typography variant="h3" className={matches ? classes.mblSebititle : classes.sebiTitle}>
                            Dr. Sebi Approved
                        </Typography>
                    </div>
                    <div className={matches ? classes.mblFoodListWrap : classes.foodListWrap}>
                        <Image
                            style={{width: 640, height: "auto"}}
                            zoomed={zoomed}
                            src={drSebi}
                            onClick={() => setZoomed(true)}
                            onRequestClose={() => setZoomed(false)}
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}
