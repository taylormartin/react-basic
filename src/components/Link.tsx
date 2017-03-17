import * as React from 'react';

export default class Link extends React.Component<{colorClass: string}, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      text: 'Link'
    };
  }

  toggleText = (): void => {
    let text = this.state.text === 'Link' ? 'Link Hover' : 'Link';
    this.setState({text: text});
  }

  public render() {
    return (
      <a href="#" className={this.props.colorClass} onMouseEnter={this.toggleText} onMouseLeave={this.toggleText}>{this.state.text}</a>
    );
  }

}
