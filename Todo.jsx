import { useState,Fragment } from "react"
import {List,
        ListItem, 
        ListItemText, 
        InputBase, 
        Checkbox, 
        ListItemSecondaryAction,
        IconButton} from "@mui/material";
import DeleteOutlined from '@mui/icons-material/DeleteOutlined';

export default function Todo({items, onTodoDeleteButtonClick}){
    return(
        <List>
            {items.map((item) => (
                <ListItem>
                    <Checkbox checked={item.done}/>
            
                    <ListItemText>

                    <InputBase
                        inputProps={{"aria-label" : "naked"}}
                        type="text"
                        id={item.id}
                        name={item.id}
                        value={item.title}
                        multiline={true}
                        fullWidth={true}
                    />
                
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton aria-label="Delete Todo" onClick={() => onTodoDeleteButtonClick(item.id)}>
                            <DeleteOutlined/>
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            ))}
        </List>

    )
}