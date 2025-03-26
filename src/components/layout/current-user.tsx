import React, { useState} from 'react'
import { Popover } from 'antd'
import CustomAvatar from '../custom-avatar'
import { AccountSettings } from './account-settings';
import { useGetIdentity } from '@refinedev/core';
import { Button } from 'antd'

import type { User } from "@/graphql/schema.types";
import { Text } from '../text'
import { SettingOutlined } from '@ant-design/icons';



export const CurrentUser = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const { data: user } = useGetIdentity<User>();



    const content = (
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
            <div
             style={{
                borderTop: '1px solid #d9d9d9',
                padding: '4px',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px'
             }}>
                <Button
                    style={{ textAlign: 'left' }}
                    icon={<SettingOutlined />}
                    type="text"
                    onClick={() => setIsOpen(true)}
                >
                    Account Settings
                </Button>
            </div>
            </div>
        
    )

    return ( 
        <>
        <Popover
         placement='bottomRight'
         trigger="click"
         style={{ padding: 0}}
         content={content}
        >
        <CustomAvatar
          name={user?.name}
          src={user?.avatarUrl || undefined }
          size="default"
          style={{ cursor: 'pointer'}}
        />
        </Popover>
        {user && (
            <AccountSettings 
            opened={isOpen} 
            setOpened={setIsOpen}
            userId={user.id}
            />
        )}
        </>
    )

}