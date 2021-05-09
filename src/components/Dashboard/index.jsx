import React, { PureComponent } from 'react';

import styles from './styles.module.scss';

class Dashboard extends PureComponent {
  static propTypes = {
  }

  getOpeningText() {
    const { name } = this.props;

    if (name) return `Welcome back, ${name}.`;

    return 'Welcome back.';
  }

  render() {
    return (
      <div className={ styles.Root }>
        <h2>Home</h2>
        <h3>{ this.getOpeningText() }</h3>
      </div>
    );
  }
}

export default Dashboard;
