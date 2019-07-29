import axios from 'axios';
// import dateBg from "../../public/images/dateBg.png";
import dateBg from "img/dateBg.png";
// import warnIcon from "../../public/images/warnIcon.png";
import warnIcon from "img/warnIcon.png";
import  "../../public/fonts/iconfont.css";
// eslint-disable-next-line no-undef
export default class AxiosTest extends Component {
  componentDidMount() {
    axios.get('/test')
      .then((response) => {
        console.log('response', response);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }

  render() {
    return (
      <div>
            AxiosTestss
            <img src={dateBg}></img>
            <img src={warnIcon}></img>
            <div className="box">
              <i className="iconfont icon-xiazai"></i>
              <i className="iconfont icon-shoucang"></i>
              <i className="iconfont icon-erweima"></i>
              <i className="iconfont icon-xiangshang"></i>
              <i className="iconfont icon-qiehuanzuhu"></i>
              <i className="iconfont icon-sort"></i>
              <i className="iconfont icon-yonghu"></i>
            </div>
      </div>
    );
  }
}