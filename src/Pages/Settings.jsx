// import React from "react";
// import Dashboard from "../commons/Dashboard";
// import { Layout, Menu } from "antd";
// import {
//   UserOutlined,
//   SettingOutlined,
//   SecurityScanOutlined,
//   MenuOutlined,
// } from "@ant-design/icons";

// const { Sider, Content } = Layout;

// function Settings() {
//   return (
//     <Dashboard>
//       <Layout style={{ minHeight: "100vh" }}>
//         <Sider>
//           <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
//             <Menu.Item key="1" icon={<MenuOutlined />}>
//               Catagory
//             </Menu.Item>
//             <Menu.Item key="2" icon={<UserOutlined />}>
//               Profile
//             </Menu.Item>

//             <Menu.SubMenu
//               key="sub1"
//               icon={<SettingOutlined />}
//               title="Settings"
//             >
//               <Menu.Item key="3">General Settings</Menu.Item>
//               <Menu.Item key="4">Account Settings</Menu.Item>
//               <Menu.Item key="5">Privacy Settings</Menu.Item>
//             </Menu.SubMenu>
//             <Menu.Item key="6" icon={<SecurityScanOutlined />}>
//               Dates
//             </Menu.Item>
//           </Menu>
//         </Sider>
//         <Layout>
//           <Content style={{ padding: "24px" }}>
//             <div
//               className="site-layout-background"
//               style={{ padding: 24, minHeight: 360 }}
//             >
//               Content for the selected menu item will appear here.
//             </div>
//           </Content>
//         </Layout>
//       </Layout>
//     </Dashboard>
//   );
// }

// export default Settings;

import React, { useState } from "react";
import Dashboard from "../commons/Dashboard";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  SettingOutlined,
  SecurityScanOutlined,
  MenuOutlined,
} from "@ant-design/icons";

const { Sider, Content } = Layout;

function Settings() {
  const [selectedKey, setSelectedKey] = useState("1");

  const handleMenuClick = (e) => {
    setSelectedKey(e.key);
  };

  return (
    <Dashboard>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider>
          <Menu
            theme="dark"
            selectedKeys={[selectedKey]}
            mode="inline"
            onClick={handleMenuClick}
          >
            <Menu.Item key="1" icon={<MenuOutlined />}>
              Category
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
              Profile
            </Menu.Item>

            <Menu.SubMenu
              key="sub1"
              icon={<SettingOutlined />}
              title="Settings"
            >
              <Menu.Item key="3">General Settings</Menu.Item>
              <Menu.Item key="4">Account Settings</Menu.Item>
              <Menu.Item key="5">Privacy Settings</Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="6" icon={<SecurityScanOutlined />}>
              Dates
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ padding: "24px" }}>
            <div
              className="site-layout-background text-black"
              style={{ padding: 24, minHeight: 360 }}
            >
              Content for the selected menu item will appear here.
              {selectedKey === "1" && <div>Category Content</div>}
              {selectedKey === "2" && <div>Profile Content</div>}
              {selectedKey === "3" && <div>General Settings Content</div>}
              {selectedKey === "4" && <div>Account Settings Content</div>}
              {selectedKey === "5" && <div>Privacy Settings Content</div>}
              {selectedKey === "6" && <div>Dates Content</div>}
            </div>
          </Content>
        </Layout>
      </Layout>
    </Dashboard>
  );
}

export default Settings;
