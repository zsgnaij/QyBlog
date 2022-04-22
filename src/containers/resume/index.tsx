/**
 * 个人简历
 */
import { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import { route_base } from '@utils/env';
import ThemeSwitch from '@components/ThemeSwitch';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import themeReducer, { switchTheme } from '@redux/themeReducer';
import injectReducer from '@src/utils/injectReducer';
import './index.less';

interface IProps {
  theme?: string;
  switchTheme?: (payload: string) => void;
}

interface IStore {
  themeReducer: {
    theme: string;
  };
}

injectReducer({ key: 'themeReducer', reducer: themeReducer });

const withConnect: any = connect(
  ({ themeReducer }: IStore) => ({ ...themeReducer }),
  (dispatch: Dispatch) => ({
    switchTheme: (theme: string) => {
      dispatch(switchTheme(theme));
    },
  })
);
@withConnect
class Resume extends PureComponent<IProps> {
  handleChange = (checked: boolean): void => {
    const { switchTheme } = this.props;
    switchTheme?.(checked ? 'dark' : 'light');
  };

  render() {
    const { theme = 'light' } = this.props;

    return (
      <div className="resume">
        <header>
          <div
            className="header-img"
            style={{
              backgroundImage: `url(${require(`@assets/images/resume/bg_${theme}.png`)})`,
              backgroundRepeat: 'no-repeat',
            }}
          />
          <div className="title">
            <div className="banner" />
            <h1 className="title-content flex items-center justify-between">
              个人简历
              <ThemeSwitch
                checked={theme === 'dark'}
                onChange={this.handleChange}
              />
            </h1>
          </div>
        </header>
        <article className="main">
          <div className="introduction">
            <div className="introduction-i" />
            <div className="introduction-content">
              <Row>
                <Col sm={12} xs={12}>
                  姓名：姜舒震
                </Col>
                <Col sm={124} xs={12}>
                  性别：男
                </Col>
                <Col sm={12} xs={12}>
                  现居：杭州市滨江区
                </Col>
                <Col sm={12} xs={12}>
                  生日：1994.08.23
                </Col>
                <Col sm={12} xs={12}>
                  求职意向：前端开发
                </Col>
                <Col sm={12} xs={12}>
                  工作年限：3年
                </Col>
              </Row>
            </div>
          </div>
          <div className="qy-row">
            <div className="flex flex-wrap">
              <div className="info-box flex w-full min-w-full md:w-1/3 md:min-w-1/3 items-center">
                <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#icon-phone" />
                </svg>
                <code className="h-6 leading-6">18057950097</code>
              </div>
              <div className="info-box flex w-full min-w-full md:w-1/3 md:min-w-1/3 items-center">
                <svg className="icon" aria-hidden="true">
                  <use xlinkHref={`#icon-github-${theme}`} />
                </svg>
                <code className="h-6 leading-6">
                  <a
                    href="https://github.com/zsgnaij"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @zsgnaij
                  </a>
                </code>
              </div>
              <div className="info-box flex w-full min-w-full md:w-1/3 md:min-w-1/3 items-center">
                <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#icon-mail" />
                </svg>
                <code className="h-6 leading-6">18057950097@163.com</code>
              </div>
            </div>
          </div>
          <div className="qy-row">
            <div className="flex items-center">
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-education" />
              </svg>
              <h2>教育</h2>
            </div>
            <hr />
            <div className="content-box">
              <div className="left-col">
                <h3>2017</h3>
                <div className="time-range">2013.9-2017.7</div>
              </div>
              <div className="right-col">
                <h4>重庆科技学院</h4>
                <div className="content-wrap">机械电子工程 本科</div>
              </div>
            </div>
          </div>
          <div className="qy-row">
            <div className="flex items-center">
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-skill" />
              </svg>
              <h2>专业技能</h2>
            </div>
            <hr />
            <div className="content-wrap">
              <ul>
                <li>熟悉HTML5、CSS3、JavaScript等前端编程技术。</li>
                <li>
                  熟悉React框架及相关技术栈：Hooks、Redux，了解
                  <Link to={`${route_base}/demo`}>
                    <span
                      style={{ textDecoration: 'underline', margin: '0 1px' }}
                    >
                      Concurrent模式
                    </span>
                  </Link>
                  和Fiber架构，有一定的源码阅读经验。
                </li>
                <li>熟悉微信小程序，能独立完成小程序的开发及上线。</li>
                <li>熟悉浏览器工作原理，有性能优化、兼容性处理的经验。</li>
                <li>
                  了解计算机网络基础知识，熟悉相关网络协议及网络安全性问题。
                </li>
                <li>熟悉前端组件化开发和前端工程化技术。</li>
                <li>
                  有后端开发经验，熟悉Java、NodeJS，对MongoDB、MySQL数据库有一定的了解。
                </li>
                <li>
                  熟悉Linux操作系统、Docker容器管理技术，能独立部署项目至服务器。
                </li>
              </ul>
            </div>
          </div>
          <div className="qy-row">
            <div className="flex items-center">
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-work" />
              </svg>
              <h2>工作经历</h2>
            </div>
            <hr />
            <div className="content-box">
              <div className="left-col">
                <h3>2022</h3>
                <div className="time-range">2020.01-至今</div>
              </div>
              <div className="right-col">
                <h4>新华三技术有限公司</h4>
                <div className="content-wrap">
                  <ul>
                    <li>负责物联网平台、智慧园区前端页面、小程序开发。</li>
                    <li>配置Eslint、prettier、husky统一代码规范。</li>
                    <li>参与Webpack性能优化配置。</li>
                    <li>参与项目国际化以及主题切换。</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="content-box">
              <div className="left-col">
                <h3>2020</h3>
                <div className="time-range">2019.01-2020.01</div>
              </div>
              <div className="right-col">
                <h4>新华三技术有限公司</h4>
                <div className="content-wrap">
                  <ul>
                    <li>
                      负责公司小程序、小程序代理服务器以及智慧办公后台业务开发。
                    </li>
                    <li>参与公司后台服务性能优化。</li>
                    <li>完成后端服务的部署与上线。</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="content-box">
              <div className="left-col">
                <h3>2018</h3>
                <div className="time-range">2017.09-2018.12</div>
              </div>
              <div className="right-col">
                <h4>浙江光合太阳能科技有限公司</h4>
                <div className="content-wrap">
                  负责公司服务Java后端开发，负责公司网站页面的搭建。
                </div>
              </div>
            </div>
          </div>
          <div className="qy-row">
            <div className="flex items-center">
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-project" />
              </svg>
              <h2>项目经历</h2>
            </div>
            <hr />
            <div className="content-box">
              <div className="left-col">
                <h3>2022</h3>
                <div className="time-range">2020.01-至今</div>
              </div>
              <div className="right-col">
                <h4>H3C蜂巢边缘系统</h4>
                <div className="content-wrap">
                  <ul>
                    <li>
                      负责边缘计算接入设备、应用管理以及函数计算功能开发。
                    </li>
                    <li>
                      使用React-router和RenderProps渲染列表子页面，确保同模块页面跳转保留筛选和分页信息。
                    </li>
                    <li>
                      封装自定义组件EnhancedTable和EnhancedTab，实现动态自定义的列表和标签页切换。
                    </li>
                    <li>
                      封装自定义组件FilterPanel，结合后端数据实现动态联合筛选。
                    </li>
                    <li>封装函数injectReducer，实现Redux store动态注入。</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="content-box">
              <div className="left-col">
                <h3>2021</h3>
                <div className="time-range">2021.08-2022.01</div>
              </div>
              <div className="right-col">
                <h4>物联网智慧教室</h4>
                <div className="content-wrap">
                  <ul>
                    <li>负责智慧教室教室巡视、统计分析和智能运维页面开发。</li>
                    <li>
                      封装自定义组件WebrtcVideo、实现Webrtc视频流在线播放。
                    </li>
                    <li>
                      实现视频流循环轮播功能，摄像头列表支持1，4，9宫格切换和全屏展示。
                    </li>
                    <li>
                      封装自定义组件VideoController，实现在浏览器端控制摄像头。
                    </li>
                    <li>
                      参与封装请求注册函数ActionReducer，组合Redux和fetch，结合immerjs确保数据的不可变性。
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="content-box">
              <div className="left-col">
                <h3>2020</h3>
                <div className="time-range">2020.04-2021.07</div>
              </div>
              <div className="right-col">
                <h4>IBox物联网平台</h4>
                <div className="content-wrap">
                  <ul>
                    <li>
                      负责物联网平台网关管理、消息模板和告警中心页面开发。
                    </li>
                    <li>实现T320网关基本信息展示和高级设备配置。</li>
                    <li>使用element-resize-detector实现告警卡片自适应布局。</li>
                    <li>
                      封装自定义组件RemoteShell，实现在浏览器端直接向设备下发指令。
                    </li>
                    <li>
                      封装自定义Hook
                      useCompositeState，模拟Class组件的setState方法。
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="content-box">
              <div className="left-col">
                <h3>2020</h3>
                <div className="time-range">2020.01-2020.06</div>
              </div>
              <div className="right-col">
                <h4>智慧办公&小物智慧空间小程序</h4>
                <div className="content-wrap">
                  <ul>
                    <li>展示设备设备基本信息，状态和电量相关信息。</li>
                    <li>支持在小程序端给设备下发指令，控制设备开关报警等。</li>
                    <li>
                      封装自定义组件SpaceTree，实现空间树的功能，分级展示空间下的设备，支持点击空间路径跳转空间。
                    </li>
                    <li>
                      实现小程序端空间情景策略配置，满足条件时触发设备相关功能。
                    </li>
                    <li>使用echarts图表展示各设备电量使用情况。</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="content-box">
              <div className="left-col">
                <h3>2019</h3>
                <div className="time-range">2019.04-2019.08</div>
              </div>
              <div className="right-col">
                <h4>H3C小物精灵小程序</h4>
                <div className="content-wrap">
                  <ul>
                    <li>实现小程序端场所管理和设备运维功能。</li>
                    <li>使用echarts图表展示各设备流量和告警统计。</li>
                    <li>使用腾讯地图展示设备的地理位置。</li>
                    <li>
                      实现设备工勘功能，通过终端采集设备信号，展示设备丢包率和信号分布。
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="content-box">
              <div className="left-col">
                <h3>2017</h3>
                <div className="time-range">2017.09-2020.01</div>
              </div>
              <div className="right-col">
                <h4>Java、Nodejs后端开发</h4>
                <div className="content-wrap">
                  涉及物联网智慧办公、小程序websocket代理服务和账户权限管理。
                  <ul>
                    <li>负责公司后台业务开发以及虚拟机、数据库性能优化。</li>
                    <li>
                      负责公司小程序代理服务器开发，使用websocket协议实现无公网IP服务器与小程序的通信，包括Java
                      Netty版本和NodeJS版本。
                    </li>
                  </ul>
                  技术栈：Java、NodeJS、MongoDB、K8S、Docker、MySQL、HTML5、CSS3、JQuery。
                </div>
              </div>
            </div>
          </div>
          <div className="qy-row">
            <div className="flex items-center">
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-mine" />
              </svg>
              <h2>个人</h2>
            </div>
            <hr />
          </div>
          <p style={{ textIndent: '2em', fontSize: 15 }}>
            有较好的团队协作和沟通能力，善于协作。有较强的学习能力和探索精神，喜欢尝试新的技术。
          </p>
        </article>
      </div>
    );
  }
}

export default Resume;
