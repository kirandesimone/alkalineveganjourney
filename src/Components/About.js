import React from 'react'
import theme from '../theme'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { makeStyles } from '@material-ui/core/styles'
import Typography  from '@material-ui/core/Typography'
import aboutPic from '../Assets/rsz_about.jpg'
import mblAboutPic from '../Assets/mbl_about.jpg'


const useStyles = makeStyles({
    about: {
        display: "flex",
        backgroundColor: theme.palette.primary.dark,
        paddingTop: "10%",
        paddingBottom: "5%",
    },
    mblAbout: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: theme.palette.primary.dark,
        paddingTop: "10%",
        paddingBottom: "5%",
    },
    imgWrapper: {
        marginLeft: "5%",
        overflow: "hidden",
        paddingRight: "8%"
    },
    mblImgWrapper: {
        marginLeft: "3%",
        overflow: "hidden",
    },
    contentWrapper: {
        maxWidth: 700,
        paddingTop: "10%"
    },
    mblContentWrapper: {
        maxWidth: 600,
        marginLeft: "2.5%",
        paddingTop: "10%"
    },
    title: {
        paddingBottom: "5%",
        color: theme.palette.primary.main,
        fontFamily: theme.typography.fontFamily
    },
    mblTitle: {
        paddingBottom: "5%",
        color: theme.palette.primary.main,
        fontFamily: theme.typography.fontFamily,
        fontSize: "2.2rem"
    }
    
});

export default function About() {
    const classes = useStyles();
    const matches = useMediaQuery('(max-width:600px)');

    return (
        <div>
            <section className={matches ? classes.mblAbout : classes.about}>
                <div className={matches ? classes.mblImgWrapper : classes.imgWrapper}>
                    <img src={matches? mblAboutPic : aboutPic} alt="food"/>
                </div>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <div className={matches ? classes.mblContentWrapper : classes.contentWrapper}>
                        <Typography variant="h2" className={matches ? classes.mblTitle : classes.title}>
                            About...
                        </Typography>
                        <Typography variant="body1" style={{fontSize: "1.2rem"}}>
                            AlkalineVeganJourney is a resource to help you live better through your vegan journey. It's about simple, great, 
                            and wholesome recipes to enjoy with your family and friends. We take your favorite recipes and simplify them to the essentials, 
                            always with an alkaline plant-based approach.
                        </Typography>
                    </div>
                    <div className={matches ? classes.mblContentWrapper : classes.contentWrapper}>
                        <Typography variant="h3" className={matches ? classes.mblTitle : classes.title}>
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
