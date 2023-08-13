import React, { useEffect, useState } from 'react'
import propic from '../assets/propic.png'
import Button from '@mui/material/Button';
import { getAuth } from "firebase/auth";
import { getDatabase, ref, onValue, set, push  } from "firebase/database";

const UserList = () => {

  const auth = getAuth();
  const db = getDatabase();

  let [usersList, setUersList] = useState([])
  let [friendrequest, setFriendrequest] = useState([])



  useEffect(()=>{

    const usersRef = ref(db, 'friendsrequest/');
    onValue(usersRef, (snapshot) => {
      let arr = []
      
    snapshot.forEach(item=>{
      arr.push(item.val().whoreciveid+item.val().whosendid)
   
    })

    setFriendrequest(arr)
    
  });
  console.log("setFriendrequest",friendrequest)

  },[])

  useEffect(()=>{

    const usersRef = ref(db, 'users/');
    onValue(usersRef, (snapshot) => {
      let arr = []
    snapshot.forEach(item=>{
      arr.push({...item.val(), id:item.key})
    })

    setUersList(arr)
   
  
  });

},[])


let handleFriendReq =(item)=>{


  set(push(ref(db, 'friendsrequest/')), {
    whosendid: auth.currentUser.uid,
    whosendname: auth.currentUser.displayName,
    whoreciveid : item.id,
    whorecivename:item.username

  });
}


  return (
    <div className="box">
    <h3 >People</h3>

    {usersList.map((item)=>(
      
      <>
        <div className="list">
        <div className="img">
          <img src={propic}/>
        </div>
        <div className="detail">
          <h2>{item.username}</h2>
          <p>{item.email}</p>
        </div>
        <div className="button">
          {friendrequest.includes(item.id+auth.currentUser.uid)?
          
          <Button  size="small" variant="contained">cancel</Button>
        :
        
          <Button onClick={()=>handleFriendReq(item)} size="small" variant="contained">+</Button>
        }
        </div>


      
        </div>
       
       </>

    ))}
  </div>
  )
}

export default UserList