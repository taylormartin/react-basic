import * as React from 'react';
import Link from './Link';

export interface HelloProps { compiler: string; framework: string; }

export default class Hello extends React.Component<HelloProps, any> {

  constructor(props: HelloProps) {
    super(props);
    this.state = {
      class: 'black'
    };
  }

  private onMouseEnter = (e: any): void => {
    this.setState({class: 'red'});
  }

  private onMouseLeave = (e: any): void => {
    this.setState({class: 'black'});
  }

  public render() {
    return (
      <div>
        <h1 onMouseLeave={this.onMouseLeave} onMouseEnter={this.onMouseEnter} className={this.state.class}>Hello from {this.props.compiler} and {this.props.framework}!</h1>
        <Link/>
      </div>
    );
  }
}
