/**
 * 个人简历
 */
import { PureComponent } from 'react';
import { Link } from 'react-router-dom';
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

const withConnect: any = connect(
  ({ themeReducer }: IStore) => ({ ...themeReducer }),
  (dispatch: Dispatch) => ({
    switchTheme: (theme: string) => {
      dispatch(switchTheme(theme));
    },
  })
);

@withConnect
@injectReducer({ key: 'themeReducer', reducer: themeReducer })
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
              性别：男
              <br />
              籍贯：浙江金华
              <br />
              细节控，逻辑思维能力强。
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
                <li>熟悉浏览器工作原理。</li>
                <li>
                  熟悉React框架及相关技术栈：Hooks、Redux，了解
                  <Link to={`${route_base}/demo`}>
                    <span
                      style={{ textDecoration: 'underline', margin: '0 1px' }}
                    >
                      Concurrent模式
                    </span>
                  </Link>
                  和Fiber架构。
                </li>
                <li>熟悉微信小程序开发。</li>
                <li>
                  了解计算机网络基础知识，熟悉TCP、HTTP、WebSocket等相关网络协议。
                </li>
                <li>熟悉前端组件化开发和前端工程化技术。</li>
                <li>
                  有后端开发经验，熟悉Java、NodeJS等后端语言，对MongoDB、MySQL数据库有一定的了解。
                </li>
                <li>
                  熟悉Linux操作系统、K8S集群管理和Docker容器管理技术，能独立部署项目至服务器。
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
                <div className="content-wrap">Web前端开发、小程序开发</div>
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
                  Java、NodeJS后端开发、小程序开发
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
                <div className="content-wrap">Java后端开发</div>
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
                <h4>H3C物联网平台</h4>
                <div className="content-wrap">
                  涉及物联网智慧办公、智慧教室、平台管理和蜂巢边缘计算等项目开发。
                  <ul>
                    <li>
                      基于create-react-app&webpack搭建项目，集成相关插件实现打包优化和版本跟踪。
                    </li>
                    <li>
                      使用webpack-dev-server搭建本地开发环境
                      ，配置proxy代理远程数据，集成mock模拟本地数据。
                    </li>
                    <li>使用Antd ConfigProvider&react-intl实现项目国际化。</li>
                    <li>
                      使用react-router实现前端路由，使用@loadable/component实现页面懒加载。
                    </li>
                    <li>
                      使用PureComponent&Memo优化代码，减少不必要的组件渲染。
                    </li>
                    <li>
                      参与封装公共函数ActionReducer，(组合Redux和fetch)，实现快速注册请求方法，并将数据托管给Redux，结合immerjs确保数据的不可变性。
                    </li>
                    <li>
                      封装动态表单列组件ColumnsControl、复合筛选组件FilterPanel、视频播放组件WebrtcVideo、文件列表组件FileListView等公共组件。
                    </li>
                  </ul>
                  技术栈：React、JavaScript、less、antd、webpack、immerjs、tailwindCSS。
                </div>
              </div>
            </div>
            <div className="content-box">
              <div className="left-col">
                <h3>2021</h3>
                <div className="time-range">2020.11-2021.03</div>
              </div>
              <div className="right-col">
                <h4>IBox一体机物联网应用管理</h4>
                <div className="content-wrap">
                  负责IBox一体机应用管理消息模板、告警中心开发
                  <ul>
                    <li>使用element-resize-detector实现告警卡片自适应布局。</li>
                    <li>基于element-ui封装自定义组件SelectTree。</li>
                    <li>使用vue-router管理前端路由。</li>
                    <li>使用vuex管理数据。</li>
                  </ul>
                  技术栈：Vue2、JavaScript、less、element-ui、webpack。
                </div>
              </div>
            </div>
            <div className="content-box">
              <div className="left-col">
                <h3>2021</h3>
                <div className="time-range">2019.04-2021.10</div>
              </div>
              <div className="right-col">
                <h4>H3C小物精灵、智慧办公、智慧空间小程序</h4>
                <div className="content-wrap">
                  H3C小物精灵、智慧办公、智慧空间小程序开发。
                  <ul>
                    <li>
                      移植物联网设备运维页面至小程序，实现小程序端设备管理以及设备工勘的需求。
                    </li>
                    <li>封装自定义组件SpaceTree，实现小程序端的空间树选择。</li>
                  </ul>
                  技术栈：JavaScript、Echarts、HTML5、CSS3、WEUI。
                </div>
              </div>
            </div>
            <div className="content-box">
              <div className="left-col">
                <h3>2020</h3>
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
          {/* <div className="qy-row">
            <div className="flex items-center">
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-mine" />
              </svg>
              <h2>个人</h2>
            </div>
            <hr />
          </div> */}
        </article>
      </div>
    );
  }
}

export default Resume;
