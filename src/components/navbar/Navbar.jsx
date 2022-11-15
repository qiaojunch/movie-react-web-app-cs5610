import './navbar.scss';
import { ArrowDropDown, Notifications, Search } from '@material-ui/icons';
import { useState } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    // set navbar bg black if scrolled
    window.onscroll = () => {
        setScrolled(window.pageYOffset === 0 ? false : true)
        return () => (window.onscroll = null)   // avoid infinit loop
    }
    
    return (
    <div className={scrolled ? 'navbar scrolled' : 'navbar'}>
        <div className='container'>
            <div className='left'>
                <img src='images/netfly-logo.png' alt=''/>
                <span>Homepage</span>
                <span>Series</span>
                <span>New and Popular</span>
                <span>My List</span>
            </div>
            <div className='right'>
                <Search className='icon'/>
                <span>KID</span>
                <Notifications className='icon'/>
                <img src='images/user-avatar.jpg' alt=''/>
                <div className='profile'>
                    <ArrowDropDown className='icon'/>
                    <div className='options'>
                        <span>profile</span>
                        <span>login</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
