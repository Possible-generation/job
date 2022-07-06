import './index.css';
import LIST from './Person_list/List';
import { Datalist } from './Person_list/Data';

// const [Data, useData] = React.useState(Datalist);

function App() {
  return (
    <div>
      {Datalist.map((data) => {
        return <LIST {...data} />;
      })}
    </div>
  );
}

export default App;
