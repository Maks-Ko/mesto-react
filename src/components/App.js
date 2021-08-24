import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div className="root">
      <Header />
      <Main />
      <Footer />      
      <template id="element-template">
        <li className="element">
          <button type="button" className="element__delete"></button>
          <img className="element__foto" />
          <div className="element__lable">
            <p className="element__title"></p>
            <div className="element__lable-likes">
              <button type="button" className="element__like"></button>
              <p className="element__numder-likes">0</p>
            </div>
          </div>
        </li>
      </template>
    </div>
  );
}

export default App;
