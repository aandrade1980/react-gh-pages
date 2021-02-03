import { EasybaseProvider, useEasybase } from 'easybase-react';
import { useEffect } from 'react';

import ebconfig from './ebconfig';

import './App.css';

const Notes = () => {
  const { Frame, sync, configureFrame } = useEasybase();

  useEffect(() => {
    configureFrame({ tableName: 'REACT-SERVERLESS', limit: 10 });
    sync();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const noteRootStyle = {
    border: '2px #0af solid',
    borderRadius: 9,
    margin: 20,
    backgroundColor: '#efefef',
    padding: 6
  };

  return (
    <div style={{ width: 400 }}>
      {Frame().map((ele, index) => (
        <div style={noteRootStyle} key={index}>
          <h3>{ele.title}</h3>
          <p>{ele.description}</p>
          <small>{String(ele.createdat).slice(0, 10)}</small>
        </div>
      ))}
    </div>
  );
};

const NewNoteButton = () => {
  const { Frame, sync } = useEasybase();

  const buttonStyle = {
    position: 'absolute',
    left: 10,
    top: 10,
    fontSize: 21
  };

  const handleClick = () => {
    const title = prompt('Please enter a title for your note');
    const description = prompt('Please enter your description');

    Frame().push({
      title,
      description,
      createdat: new Date().toISOString()
    });

    sync();
  };

  return (
    <button style={buttonStyle} onClick={handleClick}>
      📓 Add Note 📓
    </button>
  );
};

function App() {
  return (
    <div className="App" style={{ display: 'flex', justifyContent: 'center' }}>
      <EasybaseProvider ebconfig={ebconfig}>
        <NewNoteButton />
        <Notes />
      </EasybaseProvider>
    </div>
  );
}

export default App;
