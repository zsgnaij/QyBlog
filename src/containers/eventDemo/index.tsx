/**
 */
import { Component, createRef } from 'react';
import './index.less';

interface Props {}
interface State {}

class EventDemo extends Component<Props, State> {
  state = {};

  parentRef = createRef<HTMLDivElement>();
  childRef = createRef<HTMLDivElement>();

  componentDidMount(): void {
    const parentNode = this.parentRef.current;
    const childNode = this.childRef.current;
    // 第三个参数为是否是捕获事件
    parentNode.addEventListener(
      'click',
      () => {
        console.log('[Native parent capture]');
      },
      true
    );
    childNode.addEventListener(
      'click',
      () => {
        console.log('[Native child capture]');
      },
      true
    );
    parentNode.addEventListener('click', () => {
      console.log('[Native parent bubbled]');
    });
    childNode.addEventListener('click', () => {
      console.log('[Native child bubbled]');
    });
  }

  onParentClick = () => {
    console.log('[React parent bubbled]');
  };

  onChildClick = () => {
    console.log('[React child bubbled]');
  };

  onParentCapture = () => {
    console.log('[React parent capture]');
  };

  onChildCapture = () => {
    console.log('[React child capture]');
  };

  render() {
    return (
      <div className="event-demo">
        <div
          className="parent"
          ref={this.parentRef}
          onClick={this.onParentClick}
          onClickCapture={this.onParentCapture}
        >
          parent
          <div
            className="child"
            ref={this.childRef}
            onClick={this.onChildClick}
            onClickCapture={this.onChildCapture}
          >
            child
          </div>
        </div>
      </div>
    );
  }
}

export default EventDemo;
