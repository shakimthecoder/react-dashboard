import { DashboardOutlined, ProjectOutlined, ShoppingOutlined } from "@ant-design/icons";
import { IResourceItem } from "@refinedev/core";

export const resources: IResourceItem[] = [
    {
     name: 'dashboard',
     list: '/',
     meta: {
        label: 'Dashboard',
        icon: <DashboardOutlined />
     }
    }, 
    {
     name: 'companies',
     list: '/companies',
     show: '/companies/:id',
     create: '/companies/new',
     edit: '/companies/edit/:id',
     meta: {
        label: 'Companies',
        icon: <ShoppingOutlined />
     }
    },
     {
        name: 'tasks',
        list: '/tasks',
        create: '/tasks/new',
        edit: '/companies/tasks/:id',
        meta: {
           label: 'Tasks',
           icon: <ProjectOutlined />
     }
    }

]