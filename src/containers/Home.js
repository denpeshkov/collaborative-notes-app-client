import React from "react";
import {Typography} from '@material-ui/core';
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import AppToolbar from "../components/AppToolbar";

const useStyles = makeStyles(theme => ({
    Home: {
        padding: theme.spacing(8, 0, 6),
        flexWrap: "wrap"
    }
}));

export default function Home(props) {
    const classes = useStyles();

    return (
        <>
            <AppToolbar type="home" {...props}/>
            <Container component="main" className={classes.Home}>
                <Typography variant="h1" align="center" color="textPrimary" gutterBottom>
                    ShareNotes
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary">
                    Простое приложение для создания заметок
                </Typography>
            </Container>
        </>
    );
}