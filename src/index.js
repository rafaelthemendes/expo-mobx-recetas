import React from 'react';
import { registerRootComponent, Font } from 'expo';
import App from './App';
import './config/StatusBarConfig';

class AppContainer extends React.Component {
  state = {
    fontLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      'ProximaNova-Bold': require('../assets/fonts/ProximaNova-Bold.ttf'),
      'Montserrat-SemiBold': require('../assets/fonts/Montserrat-SemiBold.ttf'),
      Icons: require('../assets/fonts/icons.ttf')
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    const { fontLoaded } = this.state;
    if (!fontLoaded) return null;
    return <App />;
  }
}

export default registerRootComponent(AppContainer);
