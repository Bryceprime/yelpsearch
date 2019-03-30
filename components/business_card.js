import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function business_card(props) {
    let {
        name, ratings
    } = props;

    const [open, setOpen] = useState(false);

    return (
        <Card>
            <CardHeader
                title={name}
                subheader={ratings}
            />
            <CardContent>
                <Typography component="p">
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton
                    onClick={() => setOpen(!open)}
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <CardContent>

                </CardContent>
            </Collapse>
        </Card>
    );
}


export default business_card