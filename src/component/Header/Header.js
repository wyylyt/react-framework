
import {
  NavLink,
} from 'react-router-dom';
import './Header.scss';
import { Menu } from 'antd';

// eslint-disable-next-line no-undef
export default class Header extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { location: { pathname } } = this.props;
    return (
      <div className="Header">
        <Menu
          style={{ width: 256 }}
          defaultSelectedKeys={[pathname]}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
        >
          <Menu.Item key="/">
            <NavLink
              to="/"
              activeClassName="selected"
            >redux demo
            </NavLink>
          </Menu.Item>
          <Menu.Item key="/footer">
            <NavLink
              to="/footer"
              activeClassName="selected"
            >context Demo
            </NavLink>
          </Menu.Item>
          <Menu.Item key="/axiosTest">
            <NavLink
              to="/axiosTest"
              activeClassName="selected"
            >axiosTest
            </NavLink>
          </Menu.Item>

        </Menu>
      </div>
    );
  }
}