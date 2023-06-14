import './App.scss';
import ModalAdd from './component/ModalAdd';
import useModal from './useReact/useModalAdd';

function App() {

  const {isShowing, toggle} = useModal();

  return (
    <div className="App">
      <header className="App-header">
      <button className="button-default" onClick={toggle}>Show Modal</button>
      <ModalAdd
        isShowing={isShowing}
        hide={toggle}
      />
      </header>
    </div>
  );
}

export default App;
