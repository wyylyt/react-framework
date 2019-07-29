
import {
  HashRouter, Route, Switch,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Header, Footer, Content, AxiosTest,
} from '../../component/index';
// import './Router.css';
import './Router.css';

// eslint-disable-next-line no-undef
export default class Router extends Component {
  // 返回Context对象，方法名是约定好的
  getChildContext() {
    return {
      contextVal: 'context传递的值',
      contextFunc: this.contextFunc,
    };
  }

  contextFunc=(parma) => {
    console.log(parma);
  }

  render() {
    return (
      <HashRouter>
        <div className="container">
          <div className="leftCont">
            {/* <Header>Header</Header> */}
            <Route path="/" component={Header} />
          </div>
          <div className="rightCont">
            <Switch>
              <Route path="/footer" component={Footer} />
              <Route path="/axiosTest" component={AxiosTest} />
              <Route path="/" component={Content} />
            </Switch>
          </div>
        </div>
      </HashRouter>
    );
  }
}
// 声明Context对象属性
Router.childContextTypes = {
  contextVal: PropTypes.string,
  contextFunc: PropTypes.func,
};