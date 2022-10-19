import { Layout, Menu, Row } from 'antd';
import { ItemType } from 'antd/lib/menu/hooks/useItems';
import { MenuClickEventHandler, MenuInfo } from 'rc-menu/lib/interface';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

enum MenuKey {
  LOG_IN = 'LOG_IN',
  LOG_OUT = 'LOG_OUT',
}
const MENU_ITEMS_PUBLIC: ItemType[] = [{ label: 'Log in', key: MenuKey.LOG_IN }];
const MENU_ITEMS_PRIVATE: ItemType[] = [{ label: 'Log out', key: MenuKey.LOG_IN }];

const Navbar: FC = () => {
  //   const navigate = useNavigate();
  //   TODO: remove
  const isAuth: boolean = true;
  const menuItems: ItemType[] = isAuth ? MENU_ITEMS_PRIVATE : MENU_ITEMS_PUBLIC;

  const onMenuClick: MenuClickEventHandler = (info: MenuInfo) => {
    // TODO: implement logic
    switch (info.key) {
      case MenuKey.LOG_IN:
        break;

      case MenuKey.LOG_OUT:
        break;

      default:
        break;
    }
  };

  return (
    <Layout.Header>
      <Row justify="end">
        {isAuth && <div style={{ color: '#fff', marginRight: '16px' }}>Ivan Hrush</div>}
        <Menu theme="dark" mode="horizontal" items={menuItems} selectable={false} onClick={onMenuClick}></Menu>
      </Row>
    </Layout.Header>
  );
};

export default Navbar;
