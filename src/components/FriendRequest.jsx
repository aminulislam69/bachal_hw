import React, { useState } from 'react'
import propic from '../assets/propic.png'
import Button from '@mui/material/Button';
import { getDatabase, ref, onValue, remove  } from "firebase/database";
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ListItem } from '@mui/material';


const FriendRequest = () => {
  const db = getDatabase();
  let [friendsRequest, setFriendsRequest] = useState([])
  let userData = useSelector((state)=>state.loggedUser.loginUser)

useEffect(()=>{
  const sfriendsrequestRef = ref(db, 'friendsrequest/');
  onValue(sfriendsrequestRef, (snapshot) => {
    let arr = []
    snapshot.forEach((item)=>{

      if(item.val().whosendid != userData.uid){
        arr.push({...item.val(), id:item.key})
      }

      
    
    })
    setFriendsRequest(arr)

    friendsRequest.map((item)=>{
      console.log("this is item", item.id)
    })
   
    
  });

 
  
},[])


let handleReject =  (id) =>{
  console.log(id)
  remove(ref(db, 'friendsrequest/' + id) )
} 

  return (




    <div className="box">
{friendsRequest.length == 0 ? <h3 >No friend request</h3> :
<div>
<h3 >Friend Request</h3>

{friendsRequest.map((item)=>(
    <div className="list">
    <div className="img">
    <img src={propic}/>
    </div>
    <div className="detail">
    <h2>{item.whosendname}</h2>
    <p>Hi Guys, Wassup!</p>
    </div>
    <div className="button">
    <Button size="small" variant="contained">Join</Button>
    <Button onClick={()=>handleReject(item.id)} size="small" variant="contained" color='error'>reject</Button>
    </div>
</div>

))}
  </div>}


</div>
  )
}

export default FriendRequest