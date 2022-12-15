import React from 'react';
import './navbar.scss';
import { ArrowDropDown, Notifications, Search } from '@material-ui/icons';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/omdb/omdb-reducer';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // set navbar bg black if scrolled
    window.onscroll = () => {
        setScrolled(window.pageYOffset === 0 ? false : true)
        return () => (window.onscroll = null)   // avoid infinit loop
    }

    // handle search submition 
    const sumbitHandler = (e) => {
        e.preventDefault();
        // handler invalid search 
        if (searchTerm === "") return alert("Please enter search term.");

        // navigate to search page
        const searchPagePath = '/search';

        dispatch(fetchAsyncMovies(searchTerm));
        dispatch(fetchAsyncShows(searchTerm));
        navigate(searchPagePath);
        // reset search input
        setSearchTerm("");
    }
    
    return (
    <div className={scrolled ? 'navbar scrolled' : 'navbar'}>
        <div className='container'>
            <div className='left'>
                <Link to='/'><img src='images/netfly-logo.png' alt=''/></Link>
                <Link to='/' className="link-deco"><span>Homepage</span></Link>
            </div>
            <div className="search-bar">
                <form onSubmit={sumbitHandler}>
                    <input 
                        type="text"
                        placeholder='Search movies or series'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button type="submit"><Search className='icon'/></button>
                </form>
            </div>
            <div className='right'>
                <span>KID</span>
                <Notifications className='icon'/>
                <img src='images/user-avatar.jpg' alt=''/>
                <div className='profile'>
                    <ArrowDropDown className='icon'/>
                    <div className='options'>
                        <Link to='/' className="link-deco"><span>profile</span></Link>
                        <Link to='/login' className="link-deco"><span>login</span></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
