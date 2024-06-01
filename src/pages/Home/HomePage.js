import React from 'react';
import "./HomePage.css";
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className="container-fluid text-center" style={{ backgroundColor: 'rgb(13, 13, 13)', minHeight: '100vh', padding: '0' }}>
      <div className="row" style={{ margin: '0' }}>

        <div className="col-2" style={{ backgroundColor: 'rgb(35, 120, 254)', minHeight: '15vh' }}>
          <h2 style={{ marginTop: '14%', color: 'white' }}>AtomIK</h2>

        </div>
        <div className="col-10" style={{ backgroundColor: 'rgb(35, 120, 254)', minHeight: '15vh' }}>
          <button className="btn3" style={{ marginLeft: '30%' }}>Ana Sayfa</button>
          <button className="btn3">Hakkında</button>
          <button className="btn3">Hizmetlerimiz</button>
          <button className="btn3">İletişim</button>
          <Link to= "/login" className='btn3' >Giriş Yap</Link>






        </div>


      </div>
      <div className="row" style={{ margin: '0' }}>
        <div className="col" style={{ backgroundColor: 'rgb(253, 254, 254)', minHeight: '90vh', padding: '0' }}>


          <div style={{ position: 'relative' }}>
            <img
              style={{
                width: '100%', // Resmin genişliğini ayarlayın
                height: 'auto', // Otomatik yükseklik belirleyin
                margin: '0' // Sağa ve sola sıfır piksel boşluk
              }}
              src="https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg"
              alt="A beautiful image"
            />
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center' }}>
              <h2 style={{ marginTop: '-45%' }}>İZİN YÖNETİMLERİ</h2>
              <p style={{ marginBottom: '10%' }}>Müşterilerimize dijital pazarlama stratejileri konusunda rehberlik eder ve marka bilinirliğini arttırmak,
                müşteri etkileşimini arttırmak ve satışları arttırmak için etkili çözümler sunarız.
              </p>
              <h2>VARDİYA VE İŞ TAKİBİ</h2>
              <p style={{ marginBottom: '10%' }}>Web geliştirme alanında uzman ekibimiz, kullanıcı dostu, işlevsel ve etkileyici web siteleri oluşturmak için modern teknolojileri kullanır.</p>
              <h2>VERİ ANALİZİ VE RAPORLAMA</h2>
              <p style={{ marginBottom: '10%' }}>Veri analizi ve raporlama, işletmelerin verilerinden değerli içgörüler elde etmelerine ve stratejik kararkar almalarına yardımcı olur.
                Uzman ekibimiz, verilerinizi analiz eder ve size doğru raporları sunar.
              </p>
              <h2>İNSAN KAYNAKLARI YÖNETİMİ</h2>
              <p>Şirketimiz, insan kaynakları yönetimi konusunda liderdir ve müşterilerimize en iyi hizmeti sunmayı taahhüt eder.</p>
            </div>
          </div>
        </div>


      </div>
      <div className="row" style={{ margin: '0' }}>
        <div className="col" style={{ backgroundColor: 'rgb(20,0, 25)', minHeight: '20vh' }}>

          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: '20px' }}>

            <div className='col-3'>
              <h5 style={{ color: 'white' }}>Sosyal Medya Hesapları</h5>

            </div>
            <div className='col-3'>
              <h5 style={{ color: 'white' }}>Bülten</h5>
              <p style={{ color: 'white' }}>En son haberlerimize ve makalelerimize kaydolun.</p>

            </div>
            <div className='col-3'>
              <h5 style={{ color: 'white' }}>Bağlantılar</h5>
              <p style={{ color: 'white' }}>Hakkımızda</p>
              <p style={{ color: 'white' }}>Ekimizi Tanıyın</p>
              <p style={{ color: 'white' }}>Haberler ve Medya</p>

            </div>
            <div className='col-3'>
              <h5 style={{ color: 'white' }}>İletişim</h5>
              <p style={{ color: 'white' }}> İstanbul/Maslak</p>

            </div>






          </div>

          <div className="col" style={{ backgroundColor: 'rgb(20,0, 25)', minHeight: '4vh', padding: '0' }}> </div>
          <h5 style={{ color: 'white' }}>C 2024 AtomIK. Tüm Hakları Saklıdır.  </h5>

        </div>

      </div>
    </div>
  );
}

export default HomePage;
