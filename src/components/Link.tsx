import * as React from 'react';
// f9
// f11
// f12

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
      <div>
        <div>title</div>
        <div>that other title</div>
        <div>text about f2</div>
        <div>f7</div>
        <a href="#" className={this.props.colorClass} onMouseEnter={this.toggleText} onMouseLeave={this.toggleText}>{this.state.text}</a>
      </div>

    );
  }

}
