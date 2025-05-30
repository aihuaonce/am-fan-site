import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{
      backgroundColor: '#333',
      padding: '15px 20px',
      borderBottom: '1px solid #555',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <h1 style={{ margin: 0, fontSize: '24px' }}>
        <Link to="/" style={{ color: '#e0e0e0', textDecoration: 'none' }}>Ave Mujica 粉絲網站</Link>
      </h1>
      <nav>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex' }}>
          <li style={{ marginLeft: '20px' }}><Link to="/" style={{ color: '#e0e0e0' }}>首頁</Link></li>
          <li style={{ marginLeft: '20px' }}><Link to="/archive" style={{ color: '#e0e0e0' }}>究極檔案館</Link></li>
          <li style={{ marginLeft: '20px' }}><Link to="/timeline" style={{ color: '#e0e0e0' }}>時光旅程</Link></li>
          <li style={{ marginLeft: '20px' }}><Link to="/community" style={{ color: '#e0e0e0' }}>神秘花園</Link></li>
          <li style={{ marginLeft: '20px' }}><Link to="/login" style={{ color: '#e0e0e0' }}>登入/註冊</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;