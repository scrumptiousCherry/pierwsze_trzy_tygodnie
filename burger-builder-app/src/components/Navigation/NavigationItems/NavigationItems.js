import React from 'react';
import classes from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact >Burger Builder</NavigationItem>
    {props.isAuthenticated
    ? <NavigationItem link="/orders">zamowiles juz:</NavigationItem>
    : null}
    {!props.isAuthenticated
    ? <NavigationItem link="/auth">Zaloguj sie</NavigationItem>
    : <NavigationItem link="/logout">Wyloguj sie</NavigationItem>}
    </ul>
);


export default navigationItems