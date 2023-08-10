import React from 'react'
import { Outlet, Link, useLocation} from 'react-router-dom'
import Grid from '@mui/material/Grid';
import { AiOutlineHome, AiOutlineUsergroupAdd } from 'react-icons/ai'
import { BsChatDots, BsPeople } from 'react-icons/bs'
import { SlPeople } from 'react-icons/sl'

const RootLayout = () => {

let location = useLocation()

console.log(location.pathname)

  return (
    

<Grid container spacing={2}>
    <Grid item xs={2}>
        <div className="navbar">
            <div className="navcontainer">
                <h2>Chatt.</h2>
                <ul>
                    <Link to={"/bachal/home"} className={location.pathname ==  "bachal/home" ? "active" : "deactive"}>
                    <li>
                        <AiOutlineHome/>
                        <span>Home</span>
                        
                    </li>
                    </Link>
                    <Link to={"/bachal/message"}>
                    <li>
                        <BsChatDots/>
                        <span>Chat</span>
                    </li>
                    </Link>
                    <li>
                        <AiOutlineUsergroupAdd/>
                        <span>Group</span>
                    </li>
                    <li>
                        <SlPeople/>
                        <span>Friends</span>
                    </li>
                    <li>
                        <BsPeople/>
                        <span>People</span>  
                    </li>
                </ul>
            </div>
        </div>
    </Grid>
    <Grid item xs={10}>
        <Outlet/>
    </Grid>
</Grid>
    
  )
}

export default RootLayout