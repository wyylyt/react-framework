// eslint-disable-next-line no-undef
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './Content.scss';

class Content extends Component {
  render() {
    const {
      inputValue, addItem, list, deleteItem, changeInputValue,
    } = this.props;
    return (
      <div className="Content">
        <input
          value={inputValue}// 使用store传的值
          onChange={changeInputValue}
        />
        <button type="button" onClick={addItem}>提交</button>
        <ul>
          {
              // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
              list.map((item, index) => <li key={index.toString()} onClick={() => deleteItem(index)}>{item}</li>)
          }
        </ul>
      </div>
    );
  }
}

// 目的：使Content和store做链接
// export default connect(mapStateToProps, mapDispatchToProps)(Content);
export default connect(
  // 规定映射条件
  // store里的state映射到组件的props里
  state => ({
    inputValue: state.ContentReducer.inputValue, // inputValue是指组件this.props.inputValue,state.inputValue是指store里的inputValue
    list: state.ContentReducer.list,
  }),
  // 把store.dispatch映射到组件的props上
  dispatch => ({
    // 把这个函数映射到组件的props上
    changeInputValue(e) {
      const action = { // 1:创建action消息
        type: 'change_input_value',
        value: e.target.value, // 把输入框里的值传给store
      };
      dispatch(action);// 2：把这个消息传给store处理
    },
    addItem() {
      const action = {
        type: 'add_item',
      };
      dispatch(action);
    },
    deleteItem(index) {
      const action = {
        type: 'delete_item',
        index,
      };
      dispatch(action);
    },
  }),
)(Content);

Content.propTypes = {
  inputValue: PropTypes.string.isRequired,
  addItem: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired,
  deleteItem: PropTypes.func.isRequired,
  changeInputValue: PropTypes.func.isRequired,
};