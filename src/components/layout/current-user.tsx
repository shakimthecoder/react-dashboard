import React from 'react'
import { Popover } from 'antd'
import CustomAvatar from '../custom-avatar'

export const CurrentUser = () => {
    return ( 
        <>
        <Popover
         placement='bottomRight'
         trigger="click"
         style={{ padding: 0}}
        >
        <CustomAvatar />
        </Popover>
        </>
    )

}