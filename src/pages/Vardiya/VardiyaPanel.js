import React, { useState, useEffect } from 'react';
import "./VardiyaPanel.css";

function VardiyaPanel() {
  // Ekran genişliğini izlemek için state tanımla
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // Eklenen kişilerin listeleri ve adlarının saklandığı state'ler
  const [kisilerVardiya1, setKisilerVardiya1] = useState([]);
  const [kisilerVardiya2, setKisilerVardiya2] = useState([]);
  const [kisilerVardiya3, setKisilerVardiya3] = useState([]);
  const [eklenenKisiSayisiVardiya1, setEklenenKisiSayisiVardiya1] = useState(0);
  const [eklenenKisiSayisiVardiya2, setEklenenKisiSayisiVardiya2] = useState(0);
  const [eklenenKisiSayisiVardiya3, setEklenenKisiSayisiVardiya3] = useState(0);
  const [yeniKisiAdi, setYeniKisiAdi] = useState("");

  // Ekran genişliği değiştiğinde state'i güncelle
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Resim boyutunu ekran genişliğine göre ayarla
  const imageSize = windowWidth > 768 ? 150 : 100;

  // Kişi ekleme fonksiyonu
  const kisiEkle = (vardiya) => {
    const yeniKisiAd = yeniKisiAdi.trim();
    if (yeniKisiAd) {
      const yeniKisi = {
        id: Math.floor(Math.random() * 1000), // Rastgele bir id oluştur
        ad: yeniKisiAd
      };
      if (vardiya === 1) {
        setKisilerVardiya1([...kisilerVardiya1, yeniKisi]);
        setEklenenKisiSayisiVardiya1(prevCount => prevCount + 1);
      } else if (vardiya === 2) {
        setKisilerVardiya2([...kisilerVardiya2, yeniKisi]);
        setEklenenKisiSayisiVardiya2(prevCount => prevCount + 1);
      } else {
        setKisilerVardiya3([...kisilerVardiya3, yeniKisi]);
        setEklenenKisiSayisiVardiya3(prevCount => prevCount + 1);
      }
      setYeniKisiAdi(""); // Yeni kişi eklendikten sonra input'u temizle
    } else {
      alert("Lütfen bir isim girin!");
    }
  };

  // Kişi çıkarma fonksiyonu
  const kisiCikar = (vardiya) => {
    if (vardiya === 1) {
      const yeniKisiler = [...kisilerVardiya1];
      yeniKisiler.pop();
      setKisilerVardiya1(yeniKisiler);
      setEklenenKisiSayisiVardiya1(prevCount => Math.max(0, prevCount - 1));
    } else if (vardiya === 2) {
      const yeniKisiler = [...kisilerVardiya2];
      yeniKisiler.pop();
      setKisilerVardiya2(yeniKisiler);
      setEklenenKisiSayisiVardiya2(prevCount => Math.max(0, prevCount - 1));
    } else {
      const yeniKisiler = [...kisilerVardiya3];
      yeniKisiler.pop();
      setKisilerVardiya3(yeniKisiler);
      setEklenenKisiSayisiVardiya3(prevCount => Math.max(0, prevCount - 1));
    }
  };

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
            {[1, 2, 3].map((vardiya) => (
              <div key={vardiya} className="row">
                <div className="col-sm-12 border border-dark" style={{ backgroundColor: 'rgb(15, 15, 15)', margin: '10px', height: '25vh', borderRadius: '1%' }}>
                  <h5 className='text-light' style={{ marginRight: '85%' }}>{vardiya}. VARDİYA</h5>

                  <input
        type="text"
        value={yeniKisiAdi}
        onChange={(e) => setYeniKisiAdi(e.target.value)}
        placeholder="Yeni Kişi Adı"
        style={{ marginBottom: '15px' }}
      />
                  <button className="btn1" style={{ marginTop: '2%' }} onClick={() => kisiEkle(vardiya)}>Kişi Ekle {vardiya}. Vardiya</button>
                  <button className="btn1" onClick={() => kisiCikar(vardiya)}>Kişi Çıkar {vardiya}. Vardiya</button>

                  {/* Eklenen ve çıkarılan kişi sayısını göster */}
                  <p className="text-light" style={{ marginTop: '-9%' }}>Eklenen kişi sayısı: {vardiya === 1 ? eklenenKisiSayisiVardiya1 : vardiya === 2 ? eklenenKisiSayisiVardiya2 : eklenenKisiSayisiVardiya3}</p>

                  {/* Eklenen kişilerin listesi */}
                  <div style={{ overflowY: 'scroll', height: '75%', marginTop: '-1%' }}>
                    {/* Kişi listesi */}
                    {vardiya === 1 ? kisilerVardiya1.map((kisi, index) => (
                      <div key={kisi.id} style={{ color: 'white', marginBottom: '5px', marginTop:'5px' }}>
                        {`${index + 1}. ${kisi.ad}`}
                      </div>
                    )) : vardiya === 2 ? kisilerVardiya2.map((kisi, index) => (
                      <div key={kisi.id} style={{ color: 'white', marginBottom: '5px' }}>
                        {`${index + 1}. ${kisi.ad}`}
                      </div>
                    )) : kisilerVardiya3.map((kisi, index) => (
                      <div key={kisi.id} style={{ color: 'white', marginBottom: '5px' }}>
                        {`${index + 1}. ${kisi.ad}`}
                      </div>
                    ))}
                  </div>

                  
                </div>

              </div>
              
            ))}
                          <button className="btn1" style={{marginLeft: '80%', marginTop:'3%'}}>Değişiklikleri Kaydet</button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default VardiyaPanel;
