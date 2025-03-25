import { Avatar as AntdAvatar } from 'antd';

 const CustomAvatar = () => {
  return (
    <AntdAvatar
     alt={'React 2025'}
     size="small"
     style={{ 
        backgroundColor: '#87d068',
        display: 'flex',
        alignItems: 'center',
        border: 'none'
     }}>
        SH
    </AntdAvatar>)
 }

export default CustomAvatar;