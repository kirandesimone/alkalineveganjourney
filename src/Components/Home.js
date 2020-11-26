import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography  from '@material-ui/core/Typography'
import theme from '../theme'
import frontPic from '../Assets/rsz_front.jpg'

const useStyles = makeStyles({
    container: {
        display: "flex"
    },
    main: {
        backgroundColor: theme.palette.primary.dark,
        paddingTop: "5%"
    },
    recipes: {
        paddingTop: "20%"
    },
    imgWrapper: {
        paddingLeft: "5%",
        overflow: "hidden"
    },
    
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
                    <div>
                        <Typography>
                            AlkalineVeganJourney Food & Recipes
                        </Typography>
                        <Typography>
                            With the hyper-convenience of modern life, many of us can only operate a microwave. 
                            A home-cooked meal is not a luxury, anyone can do it!
                        </Typography>
                    </div>
                </div>
            </section>
            <section className={classes.recipes}>
                <div className={classes.container}>
                    <Typography>
                        Recipes
                    </Typography>
                </div>
            </section>
        </div>
    )
}
