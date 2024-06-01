import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./Employee.css";

function Profile() {
    const [user,setUser]= useState({id:'1'});

    const ClickHandle=()=>{
        axios.post('http://localhost:9093/dev/v1/employee/update',user).then((res)=>{
            console.log(res.data);
            alert('Degişiklikler Kaydedildi..');
        })
    }
    return (
        <div >

            <h1 class="heading "><span>Profil Güncelle</span></h1>
            <div class="user col-3">
                <img className='image' src='https://picsum.photos/200/200' alt='' />
                <div class="mb-3">
                    <input className='input-1' type="file" id="formFile" onChange={(e)=>setUser({...user,image: e.target.value})}/>
                </div>
            </div>
            <div class="col-9">
                <label className='lbl-2'>TC No        :</label><input className='input-1' type='text' id='tc' onChange={(e)=>setUser({...user,tcno: e.target.value})}></input>
                <label className='lbl-2'>Ad           :</label><input className='input-1' type='text' id='name' onChange={(e)=>setUser({...user,name: e.target.value})}></input>
                <label className='lbl-2'>Soyad        :</label><input className='input-1' type='text' id='surname' onChange={(e)=>setUser({...user,surname: e.target.value})}></input>
                <label className='lbl-2'>Email        :</label><input className='input-1' type='text' id='email' onChange={(e)=>setUser({...user,email: e.target.value})}></input>
                <label className='lbl-2'>Telefon      :</label><input className='input-1' type='text' id='phone' onChange={(e)=>setUser({...user,phone: e.target.value})}></input>
                <label className='lbl-2'>Medeni Hal   :</label><select className='select-1' onChange={(e)=>setUser({...user,meritalStatus: e.target.value})}>
                    <option selected hidden>Medeni Halinizi Seçiniz..</option>
                    <option value="Evli">Evli</option>
                    <option value="Bekar">Bekar</option>
                    <option value="Belirtmek İstemiyorum">Belirtmek İstemiyorum</option>
                </select>
                <label className='lbl-2'>Cinsiyet     :</label><select className='select-1' onChange={(e)=>setUser({...user,gender: e.target.value})}>
                    <option selected hidden>Cinsiyetinizi seçiniz..</option>
                    <option value="Kadın">Kadın</option>
                    <option value="Erkek">Erkek</option>
                    <option value="Belirtmek İstemiyorum">Belirtmek İstemiyorum</option>
                </select>
                <label className='lbl-2'>Dogum Tarihi :</label><input className='input-1' type='text' id='birthday' onChange={(e)=>setUser({...user,dateOfBirth: e.target.value})}></input>

                <button class="btn" id='guncelle' onClick={()=>ClickHandle()}>Güncelle</button>
            </div>
            <div class="heading tab-2"></div>

        </div>
    )
}

export default Profile