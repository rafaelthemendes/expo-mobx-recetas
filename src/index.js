import React from 'react';
import { registerRootComponent, Font } from 'expo';
import App from './pages/App';
import './config/StatusBarConfig';

class AppContainer extends React.Component {
  state = {
    fontLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      'ProximaNova-Bold': require('../assets/fonts/ProximaNova-Bold.ttf'),
      'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
      Icons: require('../assets/fonts/icons.ttf')
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    if (!this.state.fontLoaded) return null;
    return <App />;
  }
}

export default registerRootComponent(AppContainer);
