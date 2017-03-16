import * as React from 'react';

export default class Link extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      text: 'Link'
    };
  }

  private onMouseEnter = (e: any): void => {
    this.setState({text: 'Link Hovering'});
  }

  private onMouseLeave = (e: any): void => {
    this.setState({text: 'Link'});
  }

  public render() {
    return (
      <a href="#" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>{this.state.text}</a>
    );
  }

}
