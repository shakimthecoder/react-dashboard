import React from 'react'
import { Layout, Space } from "antd"
import { CurrentUser } from './current-user';


const headerStyles: React.CSSProperties = {
   background: '#fff',
   display: 'flex',
   justifyContent: 'flex-end',
   alignItems: 'center',
   padding: '0 24px',
   position: "sticky",
   top: 0,
   zIndex: 999



}

function Header() {
  return (
    <div>
    <Layout.Header style={headerStyles}>
      <Space / >
    <CurrentUser />
    </Layout.Header>
    </div>
  )
}

export default Header;