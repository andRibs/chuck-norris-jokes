import React from 'react';
import { NavLink } from 'react-router-dom';
import './ListItem.css';

//One item in the feed of jokes
const listItem = (props) => {
    return (
        <NavLink to='/joke' onClick={props.onSingleClicked}>
            <li className='list-group-item list-group-item-action listItem'>
                {props.item}
            </li>
        </NavLink>
    )
}

export default listItem;