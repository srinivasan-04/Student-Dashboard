import React from 'react'
import './teacherlist.css'
import Image1 from '../assets/tuto.png';

const teachers=[
    {
        image:Image1,
        name:'Prof. John Doe',
        duraration:'20 Hours lesson',
        cost:'1000',
    },
    {
      image:Image1,
      name:'Prof. John Doe',
      duraration:'20 Hours lesson',
      cost:'1000',
  },
  {
    image:Image1,
    name:'Prof. John Doe',
    duraration:'20 Hours lesson',
    cost:'1000',
},
{
  image:Image1,
  name:'Prof. John Doe',
  duraration:'20 Hours lesson',
  cost:'1000',
},
]
function teacherlist() {
  return (
    <div className='teacher--list'>
      <div className='list--header'>
        <h1>Teacher List</h1>
        <select>
          <option value="english">English</option>
          <option value="Science">Science</option>
          {/* <option value="english">English</option> */}

        </select>
      </div>
      <div className='list--container'>
        {teachers.map(teacher=>{
          return(
          <div className='list'>
            <div className='teacher--detail'>
            <img src={teacher.image} alt={teacher.name}/>
            <h2>{teacher.name}</h2>
            </div>
            <span>{teacher.duraration}</span>
            <span>${teacher.cost}/hr</span>
            <span className='teacher--todo'>:</span>
          </div>
          )
        })}
      </div>
    </div>
  )
}

export default teacherlist
