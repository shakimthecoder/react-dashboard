import { useGetIdentity } from '@refinedev/core';
import { Avatar as AntdAvatar } from 'antd';
import { User } from "@/graphql/schema.types";

type AvatarProps = {
    name: string;
    style: Object;
}

 const CustomAvatar = ({ name, style, ...rest}: AvatarProps) => {
    const { data: user } = useGetIdentity<User>();
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