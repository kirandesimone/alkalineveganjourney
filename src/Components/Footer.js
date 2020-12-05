import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { SiInstagram } from 'react-icons/si'

const useStyles = makeStyles({
    footerContent: {
        display: "flex",
        paddingTop: "2%",
        paddingBottom: "2%",
        
    }
})

export default function Footer() {
    const classes = useStyles();
    return (
        <footer style={{display: "flex", justifyContent: "center"}}>
            <div className={classes.footerContent}>
            <a 
                    href="https://www.instagram.com/alkalineveganjourney/?hl=en" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{color: "black"}}
                >
                    <SiInstagram size="1.5rem"/>
                </a>
            </div>
       </footer>
    )
}
