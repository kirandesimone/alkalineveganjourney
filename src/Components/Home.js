import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography  from '@material-ui/core/Typography'
import theme from '../theme'
import frontPic from '../Assets/rsz_front.jpg'
import vegSoup from '../Assets/rsz_all_in_veg_soup.jpg'
import drSebi from '../Assets/dr_sebi.jpg'
import Image from "react-image-enlarger"

const useStyles = makeStyles({
    main: {
        backgroundColor: theme.palette.primary.dark,
        paddingTop: "5%"
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
    recipeTitle: {
        marginLeft: "42%",
        paddingBottom: "5%"
    },
    favRecipeContent: {
        marginLeft: "15%",
        paddingTop: "5%"
    },
    favRecipePic: {
        marginLeft: "22%",
        overflow: "hidden"
    },
    sebiTitle: {
        marginLeft: "40%",
        paddingBottom: "5%"
    },

    
    
})

export default function Home() {
    const classes = useStyles();
    const [zoomed, setZoomed] = React.useState(false);
    return (
        <div>
            <section className={classes.main}>
                <div style={{display: "flex"}}>
                    <div className={classes.imgWrapper}>
                        <img src={frontPic} alt="pink smoothie"/>
                    </div>
                    <div className={classes.mainContent}>
                        <div style={{paddingBottom: "5%"}}>
                            <Typography variant="h3" component="h3" style={{color: theme.palette.primary.main, fontFamily: theme.typography.fontFamily}}>
                                AlkalineVeganJourney Food & Recipes
                            </Typography>
                        </div>
                        <Typography variant="body1" style={{fontSize:"1.5rem"}}>
                            With the hyper-convenience of modern life, many of us can only operate a microwave. 
                            A home-cooked meal is not a luxury, anyone can do it!
                        </Typography>
                    </div>
                </div>
            </section>
            <section className={classes.recipes}>
                <div className={classes.recipeTitle}>
                    <Typography variant="h3" style={{fontFamily: theme.typography.fontFamily}}>
                        Featured Recipe
                    </Typography>
                </div>
                <div style={{display: "flex"}}>
                    <div className={classes.favRecipeContent}>
                        <Typography variant="h4" style={{fontFamily: theme.typography.fontFamily}}>
                            All in Vegetable Soup
                        </Typography>
                        <Typography variant="body1">
                            *Details on Recipes page
                        </Typography>
                    </div>
                    <div className={classes.favRecipePic}>
                        <img src={vegSoup} alt="bowl of soup"/>
                    </div>
                </div>
            </section>
            <section style={{paddingTop: "5%"}}>
                <div>
                    <div className={classes.sebiTitle}>
                        <Typography variant="h3" style={{fontFamily: theme.typography.fontFamily}}>
                            Dr. Sebi Approved
                        </Typography>
                    </div>
                    <div style={{marginLeft: "33.5%", paddingBottom: "5%"}}>
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
