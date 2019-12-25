import PropTypes from 'prop-types';

// eslint-disable-next-line no-undef
export default class ContextDemo extends Component {
    contextOnClick=() => {
      const { contextVal, contextFunc } = this.context;
      contextFunc(`${contextVal}哈哈哈`);
    }

    render() {
      const { contextVal } = this.context;
      return (
        <div onClick={this.contextOnClick} style={{width:'100%',height:'100%'}}>
              {contextVal}
        </div>
      );
    }
}
// 声明需要使用的Context属性
ContextDemo.contextTypes = {
  contextVal: PropTypes.string,
  contextFunc: PropTypes.func,
};