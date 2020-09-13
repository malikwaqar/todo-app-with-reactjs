import React from 'react';
import './Todo.css';
import { List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';

function Todo(props) {
    return (
        <List>
            <ListItem>
                <ListItemAvatar> 
                </ListItemAvatar>
                <ListItemText primary={props.text }></ListItemText>
            </ListItem>
        </List>
    )
}

export default Todo;
