/*import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import GroupActionButton from "../components/group-action-button"

function App() {*/

              /*let [x, setX] = useState(-100);

              //let x = 100;
              
              const plus = () =>{
                setX(x += 100);
                console.log("x", x);
              }

              const minus = () =>{
                setX(x -= 100);
                console.log("x", x);
              }

              return (
                <>
                <h1>Hello world {x}</h1>

                <button onClick={plus}>plus</button>
                <button onClick={minus}>minus</button>
                </>
              );*/

        /*const [isLike, setIsLike] = useState(true);

        return(
          <>
            <h1>Hello</h1>
            <h2>{isLike?'like':'not like'}</h2>

            <button onClick={() => setIsLike(!isLike)}>plus</button>
          </>
        )*/

  /*const [isLike, setIsLike] = useState(true);

  const arr = [
    {id:1, name:'sasha'},
    {id:2, name:'sasha2'},
    {id:3, name:'sasha3'}
  ]

  return(
    <>
      <h1>Hello</h1>
      <h2>{isLike?'like':'not like'}</h2>

      <button onClick={() => setIsLike(!isLike)}>plus</button>

      {arr.map((item)=> <p>{item.id} {item.name} </p>)}
    </>
  )
}

export default App;*/

import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import MenuButton from './components/menu-button';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import React from 'react';
import { Route, Link } from 'react-router-dom';
import MainDogContent from "./containers/MainDogContent"
const { Header, Content, Sider } = Layout;
const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));
/*const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: index === 0 ? "Dog content" : `subnav ${key}`,
    children: new Array(1).fill(null).map((_, j) => {
      const subKey = index * 1 + j + 1;
      return {
        key: subKey,
        label: (index === 0 & subKey === 1) ? "Dogs" : `option${subKey}`,
      };
    }),
  };
});*/
function App() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
      </Header>
      <Layout>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
          }}
        >
          {MenuButton("/", "Dog content")}
          {MenuButton("/dogfilter", "Dog filter")}
        </Sider>
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
          <div style={{
            display:'flex',
            justifyContent: 'space-between'
          }}>
            <Breadcrumb
              style={{
                margin: '16px 0',
                width : '200px'
              }}
            >
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{
                alignSelf:'center',
              }}>
              <Link style={{
                color:'#1677ff',
                fontSize:'16px'
              }} 
              to={"/comment"}>
                {"Leave a comment"}
              </Link>
            </div>
          </div>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            {MainDogContent()}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default App;
