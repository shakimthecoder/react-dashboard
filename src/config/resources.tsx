import { DashboardOutlined } from "@ant-design/icons";
import { IResourceItem } from "@refinedev/core";

export const resources: IResourceItem[] = [
    {
     name: 'dashboard',
     list: '/',
     meta: {
        label: 'Dashboard',
        icon: <DashboardOutlined />
     }
    }
]