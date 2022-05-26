import React, { useEffect, useState } from 'react';


const useAdmin = user =>{
    
    const [admin, setAdmin] = useState()
    console.log(admin);
    useEffect(()=>{
        const email = user?.email;
        if(email){

            fetch(`https://calm-refuge-43715.herokuapp.com/admin/${email}`,{
                method:'GET',
                // headers:{
                //     'content-tyoe':'application/json',
                //     authorization: `Bearer ${localStorage.getItem('accessToken')}`


                // }
            })
            .then(res=> res.json())
            .then(data=>{
                setAdmin(data.admin)
            })
        }

    },[user])
    return [admin]
}
export default useAdmin;