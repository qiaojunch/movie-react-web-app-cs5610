import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import { Link } from 'react-router-dom';
import './featured.scss'

export default function Featured(props) {
    const { featured } = props;

  return (
    <div className='featured'>
        <img src={featured.img}
        width='100%'
        alt=""
        />
        <div className='info'>
            {/* <img src='images/netfly-logo.png' alt=""/> */}
            <span className='desc'>
                {featured.desc}
            </span>
            <div className='buttons'>
                <Link to={`/watch`} className="link-deco">
                    <button className='play'>
                        <PlayArrow/><span>Play</span></button>
                </Link>
                <Link to={`/detail/${featured.imdbID}`} className="link-deco">
                    <button>
                        <InfoOutlined/><span>More</span></button>
                </Link>
            </div>
        </div>
    </div>
  )
}
