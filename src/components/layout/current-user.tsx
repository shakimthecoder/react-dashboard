import React from 'react'
import { Popover } from 'antd'
import CustomAvatar from '../custom-avatar'
import { useGetIdentity } from '@refinedev/core';}

import type { User } from "@/graphql/schema.types";


export const CurrentUser = () => {
    const { data: user } = useGetIdentity<User>();
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