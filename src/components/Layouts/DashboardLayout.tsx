// src/layouts/DashboardLayout.tsx
import React, { ReactNode, useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import {
    BuildOutlined,
    BulbOutlined,
    FileDoneOutlined,
    FileTextOutlined,
    GoldOutlined,
    ProductOutlined,
    ProjectOutlined,
    PullRequestOutlined,
    QrcodeOutlined,
    UngroupOutlined,
    UserAddOutlined,
    UsergroupAddOutlined,
    UserOutlined,
    UserSwitchOutlined,
} from '@ant-design/icons'
import Logo1 from '../../assets/LOGO1.svg'
import Logo2 from '../../assets/LOGO2.svg';
import { Power } from 'lucide-react';
const { Header, Sider, Content, Footer } = Layout;

interface DashboardLayoutProps {
    children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {

    const [collapsed, setCollapsed] = useState(false);

    const handleCollapse = (collapseState: boolean) => {
        setCollapsed(collapseState);
    };

    useEffect(() => {
        setTimeout(() => {
            setCollapsed(true);
        }, 10000);
    }, [collapsed])


    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={handleCollapse} width={280}>
                <div className="flex justify-center items-center py-2 font-bold text-xl">
                    {
                        collapsed ? <img src={Logo2} alt='digital-loan' style={{ width: 80 }} /> : <img src={Logo1} alt='digital-loan' style={{ width: 200 }} />
                    }
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['1', '2', '3', '4', '5']}
                    items={[
                        {
                            key: '1',
                            icon: <QrcodeOutlined />,
                            label: <Link to="/dashboard/">Dashboard</Link>,
                        },
                        {
                            key: '2',
                            icon: <ProductOutlined />,
                            label: 'Access and Permisssion',
                            children: [
                                {
                                    key: '2-1',
                                    icon: <UserOutlined />,
                                    label: <Link to="/permission/accounts">Accounts</Link>,
                                },
                                {
                                    key: '2-2',
                                    icon: <UserSwitchOutlined />,
                                    label: <Link to="/permission/roles">Roles</Link>,
                                },
                                {
                                    key: '2-3',
                                    icon: <UsergroupAddOutlined />,
                                    label: <Link to="/permission/members">Members</Link>,
                                },
                            ],
                        },
                        {
                            key: '3',
                            icon: <BulbOutlined />,
                            label: 'Approval and Ratification',
                            children: [
                                {
                                    key: '3-1',
                                    icon: <UngroupOutlined />,
                                    label: <Link to="/approval/group">Group</Link>,
                                },
                                {
                                    key: '3-2',
                                    icon: <UserAddOutlined />,
                                    label: <Link to="/approval/user">User</Link>,
                                },
                                {
                                    key: '3-3',
                                    icon: <PullRequestOutlined />,
                                    label: <Link to="/approval/workflow">Workflow</Link>,
                                },
                            ],
                        },
                        {
                            key: '4',
                            icon: <GoldOutlined />,
                            label: 'Glod Loan',
                            children: [
                                {
                                    key: '4-1',
                                    icon: <BuildOutlined />,
                                    label: <Link to="/gold/goldsmith">Glod Smith</Link>,
                                },
                                {
                                    key: '4-2',
                                    icon: <ProjectOutlined />,
                                    label: <Link to="/gold/marketvalue">Market Value</Link>,
                                },
                            ],
                        },
                        {
                            key: '5',
                            icon: <FileDoneOutlined />,
                            label: 'Reports',
                            children: [
                                {
                                    key: '5-1',
                                    icon: <FileTextOutlined />,
                                    label: <Link to="/reports/mis">Mis Report</Link>,
                                },
                                {
                                    key: '5-2',
                                    icon: <FileTextOutlined />,
                                    label: <Link to="/reports/gold">Gold Report</Link>,
                                },
                            ],
                        }
                    ]}
                />
            </Sider>
            <Layout className="site-layout">
                <Header>
                    <div
                        style={{ display: 'flex', flexDirection: 'row', justifyContent: 'end' }}
                    >
                        <span style={{ paddingRight: 10, color: 'white' }}>User Name</span>
                        <Link to="/login"><Power size={'20'} /></Link>
                    </div>
                </Header>
                <Content style={{ margin: '16px' }}>
                    <div className="bg-white p-4" style={{ minHeight: 360 }}>
                        {children}
                    </div>
                </Content>
                <Footer style={{ backgroundColor: '#e6e6e6', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', height: '48px', padding: '15px' }}>
                    <div>{new Date().getFullYear()} © LOLC Technology Services Ltd.</div>
                    <div>Design & Develop by Mobile Solutions</div>
                </Footer>
            </Layout>
        </Layout>
    );
};

export default DashboardLayout;
