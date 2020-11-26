import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import CardActionArea from '@material-ui/core/CardActionArea'
import Collapse from '@material-ui/core/Collapse'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import IconButton from '@material-ui/core/IconButton'
import theme from '../theme'
import pic from '../Assets/sunday_smoothie.JPG'



const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        minWidth: 345,
        backgroundColor: theme.palette.primary.main
      },
      media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
      expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      },
      expandOpen: {
        transform: 'rotate(180deg)',
      },
})


export default function RecipeCards(props) {
    const [expanded, setExpanded] = useState(false);
    const classes = useStyles();
    const handleExpand = () => {
        setExpanded(!expanded);
    };
    const { 
        id, 
        recipe: 
        { 
            dishName,
            ingredients,
            directions,
            picture
        } 
    } = props

    return (
        <Card key={id} className={classes.card}>
            <CardHeader title={dishName}/>
            <CardActionArea>
                <CardMedia 
                image={require(`../Assets/${picture}`)} 
                title={dishName}
                className={classes.media}
                />
                <CardContent>
                    <Typography variant="body2" component="p">
                        {directions}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions disableSpacing>
                <IconButton className={clsx(classes.expand, {
                    [classes.expandOpen] : expanded,
                })}
                onClick={handleExpand}
                aria-expanded={expanded}
                aria-label="show more"
                >
                    <ExpandMoreIcon/>
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography variant="h5">
                        Ingredients
                    </Typography>
                    {ingredients.map(ingredient => 
                        <Typography variant="body2" component="p">
                            {ingredient}
                        </Typography>
                    )}
                </CardContent>
            </Collapse>
        </Card>
    );
}
