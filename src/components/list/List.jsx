import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';
import { useRef, useState } from 'react';
import ListItem from '../listItem/ListItem';
import './list.scss';

export default function List() {
    const [slideNum, setSlideNum] = useState(0)
    const listRef = useRef();  // initialize mutable ref object for container

    // slide listItem to left or right on click
    const handleClick = (direction) => {
        let distance = listRef.current.getBoundingClientRect().x -50;
        if (direction === 'left' && slideNum > 0) {
            setSlideNum(slideNum - 1)
            listRef.current.style.transform = `translate(${230 + distance}px)`
        } 
        if (direction === 'right' && slideNum < 5) {
            setSlideNum(slideNum + 1)
            listRef.current.style.transform = `translate(${-230 + distance}px)`
        }
    }
  return (
    <div className='list'>
        <span className='listTile'>Continue to watch</span>
        <div className='wrapper'>
            <ArrowBackIosOutlined className='sliderArrow left' 
                onClick={()=> handleClick('left')}/>
            <div class='container' ref={listRef}>
                <ListItem index={0}/>
                <ListItem index={1}/>
                <ListItem index={2}/>
                <ListItem index={3}/>
                <ListItem index={4}/>
                <ListItem index={5}/>
                <ListItem index={6}/>
                <ListItem index={7}/>
                <ListItem index={8}/>
                <ListItem index={9}/>
            </div>
            <ArrowForwardIosOutlined className='sliderArrow right'
                onClick={()=> handleClick('right')}
            />
        </div>
    </div>
  )
}
