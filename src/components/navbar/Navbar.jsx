import './navbar.scss';
import { ArrowDropDown, Notifications, Search } from '@material-ui/icons';

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className='container'>
            <div className='left'>
                <img src='images/netfly-logo.png'/>
                <span>Homepage</span>
                <span>Series</span>
                <span>New and Popular</span>
                <span>My List</span>
            </div>
            <div className='right'>
                <Search className='icon'/>
                <span>KID</span>
                <Notifications className='icon'/>
                <img src='images/user-avatar.jpg'/>
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
