import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {SelectDemo} from './SelectFile.jsx';
import SearchIcon from '../assets/icons8-search-250.png';

const Navbar = () => (
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
    <FontAwesomeIcon icon={faBars} size="3x" />
    <SelectDemo />
    <img src={SearchIcon} alt="Search" style={{width: '55px'}}/>
</div>
);

export default Navbar;
