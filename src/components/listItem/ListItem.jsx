import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons';
import { useState } from 'react';
import './listItem.scss';

export default function ListItem({index}) {
  const [hovered, setHovered] = useState(false);
  const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

  return (
    <div 
      className='listItem'
      style={{left: hovered && index * 225 -50 + index*2.5 }}
      onMouseEnter={()=> setHovered(true)}
      onMouseLeave={()=> setHovered(false)}
      >
        <img 
          src='https://facts.net/wp-content/uploads/2021/05/istockphoto-1191001701-612x612.jpg' 
          alt=''
        />
        {/* If item is hovered, display detail info */}
        { 
          hovered && (
            <>
              <video src={trailer} autoPlay={true} loop />
              <div className='itemInfo'>
                <div className='icons'>
                  <PlayArrow className='icon'/>
                  <Add className='icon'/>
                  <ThumbUpAltOutlined className='icon'/>
                  <ThumbDownAltOutlined className='icon'/>
                </div>
                <div className='itemInfoTop'>
                  <span>1 hour 30 min</span>
                  <span className='ageLimit'>+16</span>
                  <span>1999</span>
                </div>
                <div className='desc'>
                  it to make a type specimen book. It has survived not only five centuries, 
                  but also the leap into electronic typesetting, remaining essentially unchanged.
                </div>
                <div className='genre'>Action</div>
              </div>
            </>
          )}
      </div>
  )}
