import { PureComponent, startTransition } from 'react';
import _ from 'lodash';
import Charts from './Charts';
import Clock from './Clock';
import './index.less';

const cachedData = new Map();

interface Props {}

interface State {
  value: string;
  strategy: string;
  showDemo: boolean;
  showClock: boolean;
}

class ConcurrentDemo extends PureComponent<Props, State> {
  state = {
    value: '',
    strategy: 'sync',
    showDemo: true,
    showClock: false,
  };

  // Random data for the chart
  getStreamData(input) {
    if (cachedData.has(input)) {
      return cachedData.get(input);
    }
    const multiplier = input.length !== 0 ? input.length : 1;
    const complexity =
      (parseInt(window.location.search.substring(1), 10) / 100) * 25 || 25;
    const data = _.range(5).map(t =>
      _.range(complexity * multiplier).map(j => {
        return {
          x: j,
          y: (t + 1) * _.random(0, 255),
        };
      })
    );
    cachedData.set(input, data);
    return data;
  }

  componentDidMount() {
    window.addEventListener('keydown', e => {
      if (e.key.toLowerCase() === '?') {
        e.preventDefault();
        this.setState(state => ({
          showClock: !state.showClock,
        }));
      }
    });
  }

  handleChartClick = e => {
    if (this.state.showDemo) {
      if (e.shiftKey) {
        this.setState({ showDemo: false });
      }
      return;
    }
    if (this.state.strategy !== 'async') {
      this.setState(state => ({
        showDemo: !state.showDemo,
      }));
      return;
    }
    if (this._ignoreClick) {
      return;
    }
    this._ignoreClick = true;
    this.setState({ showDemo: true }, () => {
      this._ignoreClick = false;
    });
  };

  debouncedHandleChange = _.debounce(value => {
    if (this.state.strategy === 'debounced') {
      this.setState({ value: value });
    }
  }, 1000);

  throttleHandleChange = _.throttle(value => {
    if (this.state.strategy === 'throttle') {
      this.setState({ value: value });
    }
  }, 1000);

  renderOption(strategy, label) {
    const { strategy: currentStrategy } = this.state;
    return (
      <label className={strategy === currentStrategy ? 'selected' : null}>
        <input
          type="radio"
          checked={strategy === currentStrategy}
          onChange={() => {
            this.setState({ strategy });
          }}
        />
        &nbsp;{label}
      </label>
    );
  }

  handleChange = e => {
    const value = e.target.value;
    const { strategy } = this.state;
    switch (strategy) {
      case 'sync':
        this.setState({ value });
        break;
      case 'setTimeout':
        setTimeout(() => {
          this.setState({ value });
        });
        break;
      case 'throttle':
        this.throttleHandleChange(value);
        break;
      case 'debounced':
        this.debouncedHandleChange(value);
        break;
      case 'async':
        startTransition(() => {
          this.setState({ value });
        });
        break;
      default:
        break;
    }
  };

  render() {
    const { showClock } = this.state;
    const data = this.getStreamData(this.state.value);
    return (
      <div className="concurrent-demo">
        <div className="container">
          <div className="rendering">
            {this.renderOption('sync', 'Synchronous')}
            {this.renderOption('setTimeout', 'SetTimeout')}
            {this.renderOption('debounced', 'Debounced')}
            {this.renderOption('throttle', 'Throttle')}
            {this.renderOption('async', 'Concurrent')}
          </div>
          <input
            style={{ color: '#000' }}
            className={'input ' + this.state.strategy}
            placeholder="longer input → more components and DOM nodes"
            onChange={this.handleChange}
          />
          <div className="demo" onClick={this.handleChartClick}>
            {this.state.showDemo && (
              <Charts data={data} onClick={this.handleChartClick} />
            )}
            <div style={{ display: showClock ? 'block' : 'none' }}>
              <Clock />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ConcurrentDemo;
