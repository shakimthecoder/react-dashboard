import React from 'react'
import { Popover } from 'antd'
import CustomAvatar from '../custom-avatar'
import { useGetIdentity } from '@refinedev/core';

import type { User } from "@/graphql/schema.types";
import { Text } from '../text'


export const CurrentUser = () => {
    const { data: user } = useGetIdentity<User>();

    const content = () => {
        return (
            <div 
            style={{ 
            display: 'flex',
            flexDirection: 'column'
            }}
            >
            <Text
            strong 
            style={{ padding: '10px 20px'}}
            >
            {user?.name}
            </Text>
            </div>
        )
    }
    return ( 
        <>
        <Popover
         placement='bottomRight'
         trigger="click"
         style={{ padding: 0}}
        >
        <CustomAvatar
          name={user?.name}
          src={user?.avatarUrl}
          size="default"
          style={{ cursor: 'pointer'}}
        />
        </Popover>
        </>
    )

}