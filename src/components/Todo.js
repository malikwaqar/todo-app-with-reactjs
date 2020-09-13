import React, { useState } from 'react';
import './Todo.css';
import { Button, List, ListItem, ListItemAvatar, ListItemText, Modal } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import db from '../firebase';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2,4,3),
    },
}));

function Todo(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState();
    // const handleOpen = () => {
    //     setOpen(true);
    // };
    const updateTodo = () => {
        db.collection('todos').doc(props.todo.id).set({
            todo: input
        }, { merge: true})
        setOpen(false);
    }
    return (
        <div>
        <Modal
        open = {open}
        onClose = { e => setOpen(false) } > 
        <div className={classes.paper}>
            <h1>Edit Todo</h1>
            <input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)} />
            <Button onClick= {updateTodo}>Update</Button>
        </div>
        </Modal>
        <List className="todo__list">
            <ListItem className="todo__listItem">
                <ListItemAvatar> 
                </ListItemAvatar>
                <ListItemText primary={props.todo.todo }></ListItemText>
                <DeleteIcon className="delete__button" onClick={event => db.collection('todos').doc(props.todo.id).delete() }></DeleteIcon>
            <EditIcon className="edit__button" onClick = {e => setOpen(true)} />
            </ListItem>
            
        </List>
        </div>
    )
}

export default Todo;