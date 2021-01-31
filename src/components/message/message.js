import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

const Message = props => {
    const {openDialog, messageText, severity, closeMessage  } = props;
    const classes = useStyles();

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        closeMessage();
    }

    return (
        <div className={classes.root}>
            <Snackbar open={openDialog} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={severity}>
                    {messageText}
                </Alert>
            </Snackbar>
        </div>
    )
}

export default Message;