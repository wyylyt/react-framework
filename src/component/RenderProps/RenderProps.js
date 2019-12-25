/**
 Crate by wanjikun on 19/09/23.
*/
import warnIcon from "../../public/images/warnIcon.png";
class Mouse extends React.Component {
    constructor(props) {
      super(props);
      this.handleMouseMove = this.handleMouseMove.bind(this);
      this.state = { x: 0, y: 0 };
    }
  
    handleMouseMove(event) {
      this.setState({
        x: event.clientX,
        y: event.clientY
      });
    }
  
    render() {
      return (
        <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
  
          {/* ...but how do we render something other than a <p>? */}
          <p>The current mouse position is ({this.state.x}, {this.state.y})</p>
          {this.props.render(this.state)} 
        </div>
      );
    }
}

class Cat extends React.Component {
    render() {
      const mouse = this.props.mouse;
      return (
        <img src={warnIcon} style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
      );
    }
}


export default class RenderProps extends Component{
 constructor(props) {
   super(props)
 }

 componentDidMount() {
 }

 render() {
   return(
     <div className={'RenderProps'} style={{ height: '100%' }}>
        <h1>Move the mouse around!</h1>
        <Mouse render={mouse=>(<Cat mouse={mouse}></Cat>)}></Mouse>
     </div>
   )
 }
}

RenderProps.propTypes = {}
RenderProps.defaultProps = {}