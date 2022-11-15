import { InfoOutlined, Search } from '@material-ui/icons'
import './featured.scss'

export default function featured() {
  return (
    <div className='featured'>
        <img src='https://wallpaperaccess.com/full/732573.jpg'
        width='100%'
        />
        <div className='info'>
            <img src='images/netfly-logo.png'/>
            <span className='desc'>
                Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum
            </span>
            <div className='buttons'>
                <button className='play'>
                    <Search/><span>Play</span></button>
                <button>
                    <InfoOutlined/><span>More</span></button>
            </div>
        </div>
    </div>
  )
}
