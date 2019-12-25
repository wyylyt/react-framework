import ContextDemo from '../ContextDemo/ContextDemo';
import echarts from 'echarts'
import fz from "./fz.json";
import jn from "./jn.json";

const nameArr = [
  "平阴县",
  "长清区",
  "市中区",
  "槐荫区",
  "历下区",
  "历城区",
  "天桥区",
  "章丘区",
  "济阳县",
  "商河县"
]
const coorArr=[
  [116.45,36.28],
  [116.73,36.55],
  [117.00,36.65],
  [116.93,36.65],
  [117.08,36.67],
  [117.07,36.68],
  [116.98,36.68],
  [117.53,36.72],
  [117.22,36.98],
  [117.15,37.32]
]

const areaName =[
  "鼓楼区",
  "台江区",
  "仓山区",
  "马尾区",
  "长乐市",
  "晋安区",
  "福清市",
  "连江县",
  "闽侯县",
  "罗源县",
  "永泰县",
  "闽清县",
  "平潭县" 
]
const areaCoord=[
  [119.3,26.08],
  [119.3,26.07],
  [119.32,26.05],
  [119.45,26.0],
  [119.52,25.97],
  [119.32,26.08],
  [119.38,25.72],
  [119.53,26.2],
  [119.13,26.15],
  [119.55,26.48],
  [118.93,25.87],
  [118.85,26.22],
  [119.78,25.52],
]

// eslint-disable-next-line no-undef
export default class Header extends Component {
  componentDidMount(){
    // echarts.registerMap('jn', jn);
    // echarts.registerMap('fz', fz);
    // this.chart = echarts.init(document.getElementById('chartCon'));
    // this.draw();
  }
  draw=()=>{
    // let areaColor = 'rgba(15,90,166,1)',
    let areaColor = 'rgba(250,198,125,1)',
      areaBottomColor = 'rgba(22,121,144,1)'
    this.chart.setOption({
      geo: {
        type: 'map',
        name: 'top',
        id: 'top',
        map: 'fz',
        // left: 205, top: 0, right: 205, bottom: 0,
        // top:-80,
        top:100,
        bottom:200,
        itemStyle: {
          // areaColor: areaColor,
          areaColor: {
            type: 'radial',
            x: 0.5,
            y: 0.5,
            r: 0.8,
            colorStops: [{
                offset: 0,
                color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
            }, {
                offset: 1,
                color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
            }],
            globalCoord: false // 缺省为 false
        },
          borderWidth: 2,
          borderColor: '#69F1F9',
        },
        emphasis: {
          itemStyle: {
            areaColor: areaColor,
          },
          label: {
            show: false,
          }
        },
        zoom: '1',
        z: 2,
      },
      series: [
        // {
        //   type: 'map',
        //   name: 'top',
        //   id: 'top',
        //   map: 'fz',
        //   // left: 0, top: 0, right: 0, bottom: 0,
        //   center: [],
        //   // itemStyle: {
        //   //   areaColor: areaBottomColor,
        //   //   borderWidth: 2,
        //   //   borderColor: areaBottomColor,
        //   // },
        //   emphasis: {
        //     itemStyle: {
        //       areaColor: areaBottomColor,
        //     },
        //     label: {
        //       show: false,
        //     }
        //   },
        //   zoom: '1',
        //   z: 1,
        // },
        {
          name: 'point',
          type: 'scatter',
          coordinateSystem: 'geo',
          // symbol: `image://${symbol}`,
          symbolSize: 5,
          // data: data,
          itemStyle: {
            // color: '#fff',
            color:'rgb(29,233,182)',
          },
          data: areaCoord,
          label: {
            show: true,
            position: 'top',
            // color:'#fff',
            color:'rgb(29,233,182)',
            formatter:function(params) {
              return areaName[params.dataIndex];
            },
            // padding: [-37,0,0,0],
            // rotate: 65,
            // lineHeight: 12,
            // rich: {
            //   name: {
            //     color: '#fff',
            //     textBorderWidth: 0,
            //     fontSize: 14,
            //     height: 20,
            //   },
            //   count: {
            //     color: '#FFFF00',
            //     // color: '#FF9700',
            //     textBorderWidth: 0,
            //     fontSize: 22,
            //     fontFamily: 'lcd',
            //     padding: [10,0,0,0],
            //   }
            // }
          },
          z: 5 
        }
      ]
    })
  }
  render() {
    return (
      <div style={{width:'100%',height:"100%",backgroundColor:"#00265F"}}>
            {/* 导航2内容区 */}
        <ContextDemo />
        {/* <div id="chartCon" style={{width:'100%',height:"90%"}}></div> */}
      </div>
    );
  }
}