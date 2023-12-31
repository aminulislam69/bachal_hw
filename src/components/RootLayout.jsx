import React from 'react'
import { Outlet, Link, useLocation, useNavigate} from 'react-router-dom'
import Grid from '@mui/material/Grid';
import { AiOutlineHome, AiOutlineUsergroupAdd, AiOutlineLogout } from 'react-icons/ai'
import { BsChatDots, BsPeople } from 'react-icons/bs'
import { SlPeople } from 'react-icons/sl'
import { getAuth, signOut } from "firebase/auth"
import { useSelector } from 'react-redux'

import propic from '../assets/propic.png'


const RootLayout = () => {

    const auth = getAuth();
    let navigate = useNavigate()
    let userData = useSelector((state)=> state.loggedUser.loginUser)


    let handleLogout =()=>{

      
        signOut(auth).then(() => {
            localStorage.removeItem("user")
            navigate("/login")
        })

    }

let location = useLocation()


return (
    

<Grid container spacing={2}>
    <Grid item xs={2}>
        <div className="navbar">
            <div className="navcontainer">
            <img src={propic}/>
                <h4>{userData.displayName}</h4>
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
                    <li onClick={handleLogout}>
                        <AiOutlineLogout/>
                        <span>log Out</span>  
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