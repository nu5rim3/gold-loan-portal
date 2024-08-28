import React from 'react';
import { Button, Layout, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import Logo1 from '../../assets/LOGO1_BLACK.svg'

const { Title, Text } = Typography;
const { Footer, Content } = Layout;
const Landing: React.FC = () => {

  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login')
  }
  return (
    <div className="bg-[url('/img/bg.svg')]">
      <Content className='flex flex-1 flex-col justify-center items-center h-screen'>
        <img src={Logo1} alt='digital-loan' style={{ width: 500 }} />
        <Title level={2} className="text-4xl font-bold mb-4">
          Welcome to Digital Loan Banking
        </Title>
        <Text type="secondary" className="text-lg mb-4">
          Apply for a loan online with ease
        </Text>
        <Button type="primary" size="large" className="mt-8" onClick={handleGetStarted}>
          Get Started
        </Button>
        <div className='w-full'>
          <Footer style={{ position: 'fixed', bottom: 0, backgroundColor: '#e6e6e6', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', height: '48px', padding: '15px', width: '100%' }}>
            <div>{new Date().getFullYear()} © LOLC Technology Services Ltd.</div>
            <div>Design & Develop by Mobile Solutions</div>
          </Footer>
        </div>
      </Content>
    </div>
  );
};

export default Landing;