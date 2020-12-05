import React from 'react'
import theme from '../theme'
import { makeStyles } from '@material-ui/core/styles'
import Typography  from '@material-ui/core/Typography'
import aboutPic from '../Assets/rsz_about.jpg'


const useStyles = makeStyles({
    about: {
        backgroundColor: theme.palette.primary.dark,
        paddingTop: "10%",
        paddingBottom: "5%",
        display: "flex"
    },
    imgWrapper: {
        marginLeft: "5%",
        overflow: "hidden",
        paddingRight: "8%"
    },
    contentWrapper: {
        maxWidth: 700,
        paddingTop: "10%"
    },
    title: {
        paddingBottom: "5%",
        color: theme.palette.primary.main,
        fontFamily: theme.typography.fontFamily
    },
    
});

export default function About() {
    const classes = useStyles();

    return (
        <div>
            <section className={classes.about}>
                <div className={classes.imgWrapper}>
                    <img src={aboutPic} alt="food"/>
                </div>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <div className={classes.contentWrapper}>
                        <Typography variant="h2" className={classes.title}>
                            About...
                        </Typography>
                        <Typography variant="body1" style={{fontSize: "1.2rem"}}>
                            AlkalineVeganJourney is a resource to help you live better through your vegan journey. It's about simple, great, 
                            and wholesome recipes to enjoy with your family and friends. We take your favorite recipes and simplify them to the essentials, 
                            always with an alkaline plant-based approach.
                        </Typography>
                    </div>
                    <div className={classes.contentWrapper}>
                        <Typography variant="h3" className={classes.title}>
                            The Author
                        </Typography>
                        <Typography variant="body1" style={{fontSize:"1.2rem"}}>
                            I started my Alkaline Vegan Journey two years ago looking for a solution to my chronic pain and inflammation. 
                            Dr. Sebi's methodology gave me hope and actually helped me mitigate my chronic symptoms.
                        </Typography>
                    </div>
                </div>
            </section>
        </div>
    )
}
