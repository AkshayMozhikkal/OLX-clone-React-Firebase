import React ,{ useContext} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home';
import SignupPage from './Pages/Signup'
import LoginPage from './Pages/Login';
import Create from './Components/Create/Create'
import ViewPost from './Pages/ViewPost';
import { useEffect } from 'react';
import { AuthContext, FirebaseContext } from './store/FirebaseContext';
import Post from './store/PostContext';

function App() {
  const {user, setUser} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  useEffect(()=>{
firebase.auth().onAuthStateChanged((user)=>{
  setUser(user)
})
  })
  return (
    <div>
      <Post>
      <Router>

        <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create" element={<Create />} />
        <Route path="/view" element={<ViewPost />} />


        </Routes> 

      </Router>
      </Post>
    </div>
  );
}

export default App;
