import React, {useState} from 'react';
import {Button, Grid, TextField} from '@mui/material';

export default function AddTodo({addItem}){
    const [item, setItem] = useState({title : ""});
    

    const onTodoAddButtClick = () => {
        addItem(item);
        setItem('');
    }

    const onInputChange = (e) => {
        setItem({title:e.target.value});
    }

    const handelEnterKeyDown = (e) => {
        if(e.key === 'Enter'){
            onTodoAddButtClick();
        }
    }

    return(
        <Grid container style={{marginTop:20}}>
            <Grid xs={11} 
                md={11} 
                item 
                style={{
                    paddingRight:16
                }}>
                <TextField placeholder='Add Todo Here' 
                    fullWidth 
                    value={item.title}
                    onChange={onInputChange} 
                    onKeyDown={handelEnterKeyDown} 
                />

            </Grid>
            <Grid xs={1} md={1} item>
                <Button fullWidth 
                    style={{
                        height: '100%'
                    }} 
                    color='"secondary' 
                    variant="outlined"
                    onClick={onTodoAddButtClick}>
                        +
                </Button>
            </Grid>
        </Grid>

    )
}
