import React from 'react';
import { Form, Input, Button, Checkbox, Typography, Layout } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Logo1 from '../../assets/LOGO1_BLACK.svg'

const { Title } = Typography;
const { Footer, Content } = Layout;
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
    const navigate = useNavigate();

    const onFinish = () => {
        navigate('/dashboard/');
    };

    return (
        <div className="bg-[url('/img/bg.svg')]">
            <Content className='h-screen'>
                <div className="flex justify-center items-center min-h-screen">
                    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                        <img src={Logo1} alt='digital-loan' style={{ width: 500 }} />
                        <Title level={2} className="text-center mb-6">Login</Title>
                        <Form
                            name="login"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                        >
                            <Form.Item
                                name="username"
                                rules={[{ required: true, message: 'Please input your Username!' }]}
                            >
                                <Input
                                    prefix={<UserOutlined className="site-form-item-icon" />}
                                    placeholder="Username"
                                    className="rounded-md"
                                />
                            </Form.Item>

                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Please input your Password!' }]}
                            >
                                <Input.Password
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    placeholder="Password"
                                    className="rounded-md"
                                />
                            </Form.Item>

                            <Form.Item>
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>

                                <a className="float-right" href="">
                                    Forgot password
                                </a>
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="w-full rounded-md">
                                    Log in
                                </Button>
                                Or <a href="">register now!</a>
                            </Form.Item>
                        </Form>
                    </div>
                </div>

                <div className='w-full bg-gray-300'>
                    <Footer style={{ position: 'fixed', bottom: 0, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', height: '48px', padding: '15px', width: '100%' }}>
                        <div>{new Date().getFullYear()} © LOLC Technology Services Ltd.</div>
                        <div>Design & Develop by Mobile Solutions</div>
                    </Footer>
                </div>
            </Content>
        </div>
    );
};

export default LoginPage;