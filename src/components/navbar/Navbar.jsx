import React from 'react';
import './navbar.scss';
import { ArrowDropDown, Notifications, Search } from '@material-ui/icons';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/omdb/omdb-reducer';
import { logoutThunk } from '../../features/users/user-thunk';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const { currentUser } = useSelector( state => state.users );

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

        dispatch(fetchAsyncMovies(searchTerm));
        dispatch(fetchAsyncShows(searchTerm));
        // navigate to search page
        navigate('/search');
        // reset search input
        setSearchTerm("");
    }

    // handle logout link
    const handleLogout = (e) => {
        dispatch(logoutThunk());
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
                <img src='https://user-images.githubusercontent.com/75476123/206878666-d2ceed1f-4ccf-4795-be03-acc0885e9fd5.jpg' alt=''/>
                <div className='navbar-profile'>
                    <ArrowDropDown className='icon'/>
                    <div className='options'>
                        <Link to='/profile' className="link-deco"><span>profile</span></Link>
                        <Link to='/login' className="link-deco"><span>login</span></Link>
                        { currentUser && 
                            <Link to='/login' className="link-deco" onClick={handleLogout}><span>logout</span></Link>}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
