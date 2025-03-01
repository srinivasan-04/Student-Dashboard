import React from 'react'
import { BiSearch ,BiNotification} from 'react-icons/bi'
import { useSidebar } from '../SidebarContext';
import '../style/content.css'
const ContentHeader = () => {
  const { currentTitle } = useSidebar();
  return (
    
    <div className='content--header'>
        <h1 className='header--title'>{currentTitle}</h1>
        <div className='header--activity'>
            <div className='search-box'>
                <input type='text' placeholder='Search'/>
                <BiSearch className='icon'/>
            </div>
            <div className='notify'>
                <BiNotification className='icon'/>
            </div>
        </div>
    </div>
  )
}

export default ContentHeader
