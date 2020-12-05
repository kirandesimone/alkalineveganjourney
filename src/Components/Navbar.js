import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import theme from '../theme'
import Button from '@material-ui/core/Button'
import { SiInstagram } from 'react-icons/si'

const useStyles = makeStyles({
    root: {
        position: "fixed",
        width: "100%",
        display: "flex",
        overflow: "hidden",
        backgroundColor: theme.palette.primary.dark,
        zIndex: 10
        
    },
    logo: {
        paddingLeft: "5%",
        marginTop: "2.5%"
    },
    navbar: {
        listStyleType: "none",
        display: "flex",
        paddingLeft: "55%",
        marginTop: "3%"
    },
    logoText: {
        textDecoration: "none",
        color: theme.palette.primary.light,
        fontFamily: theme.typography.fontFamily,
        fontSize: "2.2rem",
        fontWeight: "bold"
    },
    text: {
        textDecoration: "none",
        color: theme.palette.primary.light,
        fontFamily: theme.typography.fontFamily,
        fontSize: "1.2rem"
    },
});


export default function Navbar() {
    const classes = useStyles();

    return (
        <div>
            <nav className={classes.root}>
                <div className={classes.logo}>
                    <Link to="/" className={classes.logoText}>
                        AlkalineVeganJourney
                    </Link>
                </div>
                <ul className={classes.navbar}>
                    <li>
                        <Button>
                            <Link to="/about" className={classes.text}>
                                About
                            </Link>
                        </Button>
                    </li>
                    <li style={{paddingLeft: "7%"}}>
                        <Button>
                            <Link to="/recipes" className={classes.text}>
                                Recipes
                            </Link>
                        </Button>
                    </li>
                    <li style={{paddingTop: "5%", paddingLeft: "7%"}}>
                            <a 
                            href="https://www.instagram.com/alkalineveganjourney/?hl=en" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{color: theme.palette.primary.light}}
                            >
                                <SiInstagram size="1.5rem"/>
                            </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
