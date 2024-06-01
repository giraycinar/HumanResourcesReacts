import React, { useEffect, useState } from 'react';
import "./Employee.css";
import Profile from './Profile';
import ProfileUpdate from './ProfileUpdate';
import Permission from './Permission';
import Debit from './Debit';
import Expense from './Expense';
import Shift from './Shift';
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';




function Employee() {
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
        <>

            <div class="header">
                <div class="user">
                    <h3 class='name'>Çalışan</h3>
                    <img className ='image' src={data.image} alt="" />
                    <h3 class="name">{data.name}  {data.surname}</h3>
                    <p class="post">Departman</p>

                </div>

                <nav class="navbar">
                    <ul>
                        <li>
                            <a href="#profil">Profil Bilgileri</a>
                        </li>
                        <li>
                            <a href="#permission">İzin Bilgileri</a>
                        </li>
                        <li>
                            <a href="#debit">Zimmet Bilgileri</a>
                        </li>
                        <li>
                            <a href="#expense">Harcama Bilgileri</a>
                        </li>
                        <li>
                            <a href="#shift">Vardiya Bilgileri</a>
                        </li>
                        <li>
                            <a href="#contact">İletişim Bilgileri</a>
                        </li>
                    </ul>
                </nav>

                <div id="menu" class="fas fa-bars"></div>




            </div>


            <div>
                <profil id="profil">
                    <Profile />
                </profil>
                <profileUpdate id="profileUpdate">
                    <ProfileUpdate />
                </profileUpdate>
                <permission id="permission">
                    <Permission />
                </permission>
                <debit id="debit">
                    <Debit />
                </debit>
                <expense id="expense">
                    <Expense />
                </expense>
                <shift id="shift">
                    <Shift />
                </shift>






                <section class="contact" id="contact">
                    <h1 class="heading">

                        <span>Contact</span> Company
                    </h1>
                    <div style={{height:'100px'}}></div>

                    <div class="row">
                        <div class="content">
                            <h3 class="title"> contact info</h3>
                            <div class="info">
                                <h3><i class="fas fa-envelope">humanrecorcues@gmail.com</i> </h3>
                                <h3><i class="fas fa-phone">555 444 33 22 </i> </h3>
                                <h3><i class="fas fa-phone">123345674433</i> </h3>
                                <h3><i class="fas fa-map-marker-alt">Ankara turkey</i> </h3>

                            </div>
                        </div>
                        <form action="">
                            <input type="text" placeholder="name and surname" class="box" />
                            <input type="email" placeholder="e-mail" class="box" />
                            <input type="text" placeholder="Topic" class="box" />
                            <textare name="" id="" cols="30" rows="10" class="box message" placeholder="message"></textare>

                            <button class="submit btn" >send <i class="fas fa-paper-plane"></i></button>
                        </form>
                    </div>
                    <div style={{height:'350px'}}></div>
                </section>


            </div>

        </>
    );
}
export default Employee