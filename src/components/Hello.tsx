import * as React from 'react';
import Link from './Link';

export interface HelloProps { compiler: string; framework: string; }

export default class Hello extends React.Component<HelloProps, any> {

  constructor(props: HelloProps) {
    super(props);
    this.state = {
      class: 'black',
      linkClass: 'black'
    };
  }

  private onMouseEnter = (): void => {
    this.setState({class: 'red'});
  }

  private onMouseLeave = (): void => {
    this.setState({class: 'black'});
  }

  private toggleLinkColor = (): void => {
    let color = this.state.linkClass === 'black' ? 'green' : 'black';
    this.setState({linkClass: color});
  }

  public render() {
    return (
      <div>
        <h1 onMouseLeave={this.onMouseLeave} onMouseEnter={this.onMouseEnter} className={this.state.class}>Hello from {this.props.compiler} and {this.props.framework}!</h1>
        <button onClick={this.toggleLinkColor}>Change Link Color</button>
        <Link colorClass={this.state.linkClass}/>
        <div>text</div>
        <div>more text</div>
        <ul>
          <li>item one</li>
          <li>item two</li>
        </ul>
      </div>
    );
  }
}
