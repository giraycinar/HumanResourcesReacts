import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ProfilePanel from './pages/Profile/ProfilePanel';
import HomePage from './pages/Home/HomePage';
import VardiyaPanel from './pages/Vardiya/VardiyaPanel';
import Employee from'./pages/Employee/Employee';
import CalisanYonetim from './pages/CalisanYonetim/CalisanYonetim';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import ResetPassword from './components/ResetPassword/resetPassword';





function RootNavigation() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/profile-panel' element={<ProfilePanel/>} />     
          <Route path='/vardiya-panel' element={<VardiyaPanel/>} />     
          <Route path='/employee' element={<Employee/>} />
          <Route path='/calisan-yonetim' element={<CalisanYonetim/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/reset-password' element={<ResetPassword/>} />







        </Routes>
    </BrowserRouter>
  );
}

export default RootNavigation;