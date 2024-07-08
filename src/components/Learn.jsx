import { useLocation } from 'react-router-dom';
import Banner from './Banner';

const Learn = () => {
  const location = useLocation();
  const { element } = location.state || { element: 'default' };

  const renderContent = () => {
    switch (element) {
      case 'react':
        return <h1>Learn React Native Content</h1>;
      case 'angular':
        return <h1>Learn Angular Content</h1>;
      case 'javascript':
        return <h1>Learn JavaScript Content</h1>;
      case 'vue':
        return <h1>Learn Vue.js Content</h1>;
      default:
        return <h1>Select a tutorial to learn more.</h1>;
    }
  };

  return (
    <div>
      <Banner text={`Learn ${element}`} />
      {renderContent()}
    </div>
  );
};

export default Learn;
