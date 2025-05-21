import React from 'react';
import { Link } from 'react-router-dom';
import archiveData from '../data/archiveData.json';

function ArchivePage() {
  const categories = [
    { id: 'group', name: '團體概覽', path: '/archive/group-overview' },
    { id: 'members', name: '成員檔案', path: '/archive/members' },
    { id: 'songs', name: '樂曲資料庫', path: '/archive/songs' },
    { id: 'lives', name: 'Live & 活動記錄', path: '/archive/lives' }, 
    { id: 'game', name: '手遊相關資訊', path: '/archive/game' }, 
    { id: 'media', name: '媒體出演與合作', path: '/archive/media' }, 
    { id: 'merchandise', name: '周邊商品圖鑑', path: '/archive/merchandise' }, 
  ];

  return (
    <div style={{ padding: '20px', maxWidth: '960px', margin: '0 auto' }}>
      <h1>究極檔案館</h1>
      <p>這裡收錄了所有關於 Ave Mujica 的詳盡資料，探索她們的神秘世界。</p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px',
        marginTop: '30px'
      }}>
        {categories.map(category => (
          <Link
            key={category.id}
            to={category.path}
            style={{
              display: 'block',
              backgroundColor: '#2a2a2a',
              padding: '20px',
              borderRadius: '8px',
              textAlign: 'center',
              textDecoration: 'none',
              color: '#e0e0e0',
              fontWeight: 'bold',
              transition: 'transform 0.2s ease-in-out, background-color 0.2s ease-in-out',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            }}
            onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.backgroundColor = '#4a4a4a'; }}
            onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.backgroundColor = '#2a2a2a'; }}
          >
            {category.name}
          </Link>
        ))}
      </div>

      <h2 style={{ marginTop: '50px' }}>團體概覽</h2>
      <div style={{ backgroundColor: '#2a2a2a', padding: '20px', borderRadius: '8px' }}>
        <p><strong>團體名稱：</strong> {archiveData.groupOverview.name}</p>
        <p><strong>成立日期：</strong> {archiveData.groupOverview.establishedDate}</p>
        <p><strong>概念：</strong> {archiveData.groupOverview.concept}</p>
        <p><strong>描述：</strong> {archiveData.groupOverview.description}</p>
      </div>

    </div>
  );
}

export default ArchivePage;