import { Layout, Menu, Row } from 'antd';
import { ItemType } from 'antd/lib/menu/hooks/useItems';
import { MenuClickEventHandler, MenuInfo } from 'rc-menu/lib/interface';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { RouteEnum } from './AppRouter';

enum MenuKey {
  LOG_IN = 'LOG_IN',
  LOG_OUT = 'LOG_OUT',
}
const MENU_ITEMS_PUBLIC: ItemType[] = [{ label: 'Log in', key: MenuKey.LOG_IN }];
const MENU_ITEMS_PRIVATE: ItemType[] = [{ label: 'Log out', key: MenuKey.LOG_OUT }];

const Navbar: FC = () => {
  const navigate = useNavigate();
  const { logout } = useActions();
  const { isAuth, user } = useTypedSelector((state) => state.auth);

  const menuItems: ItemType[] = isAuth ? MENU_ITEMS_PRIVATE : MENU_ITEMS_PUBLIC;

  const onMenuClick: MenuClickEventHandler = (info: MenuInfo) => {
    switch (info.key) {
      case MenuKey.LOG_IN:
        return navigate(RouteEnum.LOGIN);

      case MenuKey.LOG_OUT:
        return logout();

      default:
        break;
    }
  };

  return (
    <Layout.Header>
      <Row justify="end">
        {isAuth && <div style={{ color: '#fff', marginRight: '16px' }}>{user?.username}</div>}
        {/* TODO: fix menu links layout */}
        <Menu theme="dark" mode="horizontal" items={menuItems} selectable={false} onClick={onMenuClick}></Menu>
      </Row>
    </Layout.Header>
  );
};

export default Navbar;
