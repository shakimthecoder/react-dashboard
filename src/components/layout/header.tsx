import React from 'react'
import { Layout, Space } from "antd"
import { CurrentUser } from './current-user';

function Header() {
  return (
    <div>
    <Layout.Header>
      <Space / >
    <CurrentUser />
    </Layout.Header>
    </div>
  )
}

export default Header;