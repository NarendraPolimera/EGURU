import React from 'react';
import { Link } from 'react-router-dom';

const Sidepane=()=>{

    return(
        <>
        <div class="sidenav">
        <Link href="#about">Publish</Link>
        <Link href="#services">Statistics</Link>
        <Link href="#clients">Change Domain</Link>
        <Link href="#contact">Update Profile</Link>
        <Link href="#contact">Log Out</Link>
        <br />
        <Link href="#contact">Guide</Link>
        <Link href="#contact">Contact Us</Link>
        </div>
        </>);
    }
export default Sidepane;