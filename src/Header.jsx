import React from 'react';
import './header.css';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core';
import {Link, useHistory} from 'react-router-dom';
import Logo from './logo/hotel-logo.png'

function Header() {
    const history = useHistory();
    return (
        <div className='header'>
            <Link to='/'>
            <img 
            className='header__icon'
            src={Logo} alt="Hotel img"/>
            </Link>
            <div className='header__center'>
                <input type="text" />
                <SearchIcon
                className='header__btn'
                onClick={()=> history.push('/search')} />
            </div>
            <div className='header__right'>
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>
        </div>
    )
}

export default Header;
