
import {
  HashRouter, Route, Switch,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Header, Footer, Content, AxiosTest,HocComponent,RenderProps
} from '../../component/index';
// import './Router.css';
import './Router.css';

// eslint-disable-next-line no-undef
export default class Router extends Component {
  constructor(props){
    super(props);
    this.state = {
      context:'哈哈ddd哈哈'
    }
  }
  changeContextVal=()=>{
    this.setState({
      context:'context值呗改变了'
    })
  }
  // 返回Context对象，方法名是约定好的
  getChildContext() {
    return {
      contextVal: this.state.context,
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
            {/* <div onClick={this.changeContextVal}>哈哈哈</div> */}
            <Route path="/" component={Header} />
          </div>
          <div className="rightCont">
            <Switch>
              <Route path="/footer" component={Footer} />
              <Route path="/axiosTest" component={AxiosTest} />
              <Route path="/hoc" component={HocComponent}/>
              <Route path="/renderProps" component={RenderProps}/>
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