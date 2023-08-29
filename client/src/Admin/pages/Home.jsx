import React from 'react';

export default function Home() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <div style={{ position: 'relative', width: '60%' }}>
      <img src="https://t3.ftcdn.net/jpg/05/21/27/56/360_F_521275602_uBVv9r2HM37bYF4AdOEs4zoVpfCxmtTj.jpg"  alt="" />
      <h1>Welcome to Admin Page</h1>
      </div>
       
      <div className="vertical-text" style={{ position: 'absolute', right: '100px' }}>
      </div>
    </div>
  );
}