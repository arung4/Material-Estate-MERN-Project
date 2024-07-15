import React, { useContext } from 'react'
import './homePage.scss'
import Searchbar from '../../components/searchbar/Searchbar.jsx'
import {AuthContext} from '../../../context/AuthContext.jsx'

export default function HomePage() {
    const {currentUser}=useContext(AuthContext);
    console.log(currentUser)
  return (
        <div className="homePage">
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className='title'>Find Real Estate & Get Your Dream Place</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem libero ullam sunt saepe quasi provident placeat alias praesentium culpa. </p>
                    <Searchbar/>
                    <div className="boxes">
                        <div className="box">
                            <h1>16+</h1>
                            <span>Years of Experience</span>
                        </div>
                        <div className="box">
                            <h1>200</h1>
                            <span>Award Gained</span>
                        </div>
                        <div className="box">
                            <h1>1200+</h1>
                            <span>Property Ready</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="imgContainer">
                <img src="./bg.png" alt="" />
            </div>
        </div>
    
  )
}
