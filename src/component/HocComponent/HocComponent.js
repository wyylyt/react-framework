/**
 Crate by wanjikun on 19/09/20.
*/

import wrapWithUsername  from "./wrapWithUsername";

class Welcome extends Component{
    render(){
        return(
            <div>welcome {this.props.username}</div>
        )
    }
}
Welcome = wrapWithUsername(Welcome);

class GoodBye extends Component{
    render(){
        return (
            <div>GoodBye {this.props.username}</div>
        )
    }
}
GoodBye = wrapWithUsername(GoodBye);

export default class HocComponent extends Component{
 constructor(props) {
   super(props)
 }

 componentDidMount() {
 }

 render() {
   return(
     <div className={'HocComponent'}>
        <Welcome></Welcome>
        <GoodBye></GoodBye>
     </div>
   )
 }
}

HocComponent.propTypes = {}
HocComponent.defaultProps = {}