import React from 'react';
import './Todo.css';
import { List, ListItem, ListItemAvatar, ListItemText, Button } from '@material-ui/core';
import db from '../firebase';

function Todo(props) {
    return (
        <List>
            <ListItem>
                <ListItemAvatar> 
                </ListItemAvatar>
                <ListItemText primary={props.todo.todo }></ListItemText>
            </ListItem>
            <Button onClick={event => db.collection('todos').doc(props.todo.id).delete() }>DELETE</Button>
        </List>
    )
}

export default Todo;
