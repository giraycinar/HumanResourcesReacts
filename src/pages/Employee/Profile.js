import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./Employee.css";
import profileUpdate from './ProfileUpdate';

function Profile() {
    const [data,setData]= useState([]);

    useEffect(()=> {
        axios.get('http://localhost:9093/dev/v1/employee/getbyid/1')
        
        .then((res)=>{
            console.log(res.data.data);
            setData(res.data.data);
        })
        
        .catch((err)=>{
            console.log(err);
        })
    },[]);
    return (
        <div >

            <h1 class="heading "><span>Profil Detayı</span></h1>
            <div class="user col-3">
                <img className='image' src={data.image} alt='' />
                
            </div>
            <div class="col-9">
                <label className='lbl-2'>TC No        :</label><label className='lbl-1'>{data.tcno}</label>
                <label className='lbl-2'>Ad           :</label><label className='lbl-1'>{data.name}</label>
                <label className='lbl-2'>Soyad        :</label><label className='lbl-1'>{data.surname}</label>
                <label className='lbl-2'>Email        :</label><label className='lbl-1'>{data.email}</label>
                <label className='lbl-2'>Telefon      :</label><label className='lbl-1'>{data.phone}</label>
                <label className='lbl-2'>Medeni Hal   :</label><label className='lbl-1'>{data.maritalStatus}</label>  
                <label className='lbl-2'>Cinsiyet     :</label><label className='lbl-1'>{data.gender}</label>
                <label className='lbl-2'>Dogum Tarihi :</label><label className='lbl-1'>{data.dateOfBirth}</label>

                <a href="#profileUpdate"><button class="btn" id='guncelle'>Güncelle</button></a>
            </div>
            <div class="heading tab-3"></div>

        </div>
    )
}

export default Profile