import * as React from 'react';

export interface HelloProps { compiler: string; framework: string; }

export default class Hello extends React.Component<HelloProps, any> {

  constructor(props: HelloProps) {
    super(props);
    this.state = {
      class: 'black'
    };
  }

  private onMouseEnter = (): void => {
    this.setState({class: 'red'});
  }

  private onMouseLeave = (): void => {
    this.setState({class: 'black'});
  }

  public render() {
    return (
      <h1 onMouseLeave={this.onMouseLeave} onMouseEnter={this.onMouseEnter} className={this.state.class}>Hello from {this.props.compiler} and {this.props.framework}!</h1>
    );
  }
}
