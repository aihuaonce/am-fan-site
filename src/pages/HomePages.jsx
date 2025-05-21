import React from 'react';

function HomePage() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>歡迎來到 Ave Mujica 的世界</h1>
      <p>這是網站首頁，未來將展示最新情報與精選內容。</p>
      <img src="/images/ave_mujica_placeholder.jpg" alt="Ave Mujica Placeholder" style={{ maxWidth: '80%', height: 'auto', borderRadius: '8px' }} />
    </div>
  );
}

export default HomePage;