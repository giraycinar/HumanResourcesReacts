import React, { useState, useEffect } from 'react';
import "./CalisanYonetim.css";




function CalisanYonetim() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const imageSize = windowWidth > 768 ? 150 : 100; // Ekran genişliğine göre resim boyutunu ayarla

  return (
    <div className="container-fluid text-center" style={{ backgroundColor: 'rgb(13, 13, 13)', minHeight: '100vh' }}>
      <div className="container-fluid" style={{ backgroundColor: 'rgb(13, 13, 13)', height: '100%', padding: '20px' }}>
        <div className="row justify-content-center">
          <div className="col border border-dark" style={{ borderColor: 'rgb(255, 165, 0)', backgroundColor: 'rgb(15, 15, 15)', width: '14%', minHeight: '100vh', position: 'absolute', left: '0', top: '0', zIndex: '1', borderRadius: '1%' }}>
            <h4 className='text-light'>Yönetici</h4>
            <div style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '50%', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img style={{ width: 'auto', height: 'auto', maxWidth: `${imageSize}px`, maxHeight: `${imageSize}px` }} src="https://www.freeiconspng.com/uploads/computer-user-icon-16.png" alt="Profil Resmi" />
            </div>

            <h4 className='text-light' style={{}}>Name </h4>
            <p className='text-light' style={{}}> Patron </p>

            <div className="row mt-2">
                <button className="btn1">Profil Bilgileri</button>
                <button className="btn2">Profil Özeti</button>
                <button className="btn2">Profil Detayları</button>
                <button className="btn1">Personel Yönetimi</button>
                <button className="btn2">Personel Özlük Dosyası</button>
                <button className="btn1">İzin Yönetimi</button>
                <button className="btn2">İzin Talepleri Yönetimi</button>
                <button className="btn1">Harcama Yönetimi</button>
                <button className="btn2">Harcama Tlp Yönetimi</button>
                <button className="btn1">Avans Yönetimi</button>
                <button className="btn2">Avans Talebi Yönetimi</button>
                <button className="btn1">Vardiya Yönetimi</button>
                <button className="btn2">Vardiya Takvimi</button>
                <button className="btn1">Zimmet Bilgileri</button>















            </div> 
          </div>
          

          <div className="col-sm-10" style={{ marginTop: '0%', marginLeft: 'calc(14% + 5px)' }}>
            <div className="row">
              <div className="col-sm-12" style={{ backgroundColor: 'rgb(13, 13, 13)', margin: '10px', height: '10vh' }}>
                <h3 className='text-light' style={{ marginRight: '85%' }}>ÇALIŞAN YÖNETİM</h3>
                <p className='text-light' style={{ marginRight: '54%' }}></p>

                <button className='btn1' style={{marginLeft: '82%', marginTop:'-70px'}}>Anasayfa</button>
                <button className='btn1' style={{marginLeft: '82%'}}>Çıkış</button>

                
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 border border-dark" style={{ backgroundColor: 'rgb(15, 15, 15)', margin: '10px', height: '25vh', borderRadius: '1%' }}>
                <h5 className='text-light'  style={{marginRight: '85%' }}>BİLGİLERİNİZ</h5>
                <form>

                    <input
                    type="text" id="bilgi" name="bilgi" placeholder="Adınız-Soyadınız" style={{backgroundColor: 'rgb' ,width:'30%', marginLeft:'-35%', marginTop: '15px', height:'32px' }}/>
                    <input 
                    type="text" id="bilgi" name="bilgi" placeholder="Pozisyon" style={{backgroundColor: 'rgb' ,width:'30%', marginLeft:'2%', marginTop: '15px', height:'32px' }} />
                    
                </form>
                <form>

                      <input
                          type="text" id="bilgi" name="bilgi" placeholder="E-Mail" style={{backgroundColor: 'rgb' ,width:'30%', marginLeft:'-35%', marginTop: '40px', height:'32px' }}/>
                      <input 
                          type="text" id="bilgi" name="bilgi" placeholder="Maaş" style={{backgroundColor: 'rgb' ,width:'30%', marginLeft:'2%', marginTop: '40px', height:'32px' }} />

                </form>




              
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 border border-dark" style={{ backgroundColor: 'rgb(15, 15, 15)', margin: '10px', height: '25vh', borderRadius: '1%' }}>
                <h5 className='text-light'  style={{marginRight: '85%' }}></h5>

                <button className="btn1">EKLE</button>
                <button className="btn1">SİL</button>
                <button className="btn1">AKTİFLEŞTİR</button>
                <button className="btn1">PASİFLEŞTİR</button>

 


              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 border border-dark" style={{ backgroundColor: 'rgb(15, 15, 15)', margin: '10px', height: '25vh', borderRadius: '1%' }}>
               

      
              
              </div>
            </div>
            
            <button className="btn1" style={{marginLeft: '80%', marginTop:'2%'}}>Değişiklikleri Kaydet</button>

          </div>

        </div>
      </div>
    </div>
  );
}

export default CalisanYonetim;
