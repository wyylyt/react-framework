/**
 Crate by wanjikun on 19/09/20.
*/
export default (WrappedComponent) => {
    class NewComponent extends Component {
        constructor(props) {
            super(props);
            this.state = {
                username: '',
            }
        }

        componentDidMount() {
            this.setState({
                username: 'user66name'
            })
        }

        render() {
            return <WrappedComponent username={this.state.username}></WrappedComponent>
        }
    }

    return NewComponent;
}