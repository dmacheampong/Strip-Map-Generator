import { useState, type FormEvent } from 'react'
import { useCSVReader } from 'react-papaparse';
import logo from '/logo.svg'
import './App.css'
import { StripMap } from './components/StripMap';

function App() {


  const { CSVReader } = useCSVReader();

  const [name, setName] = useState("");
  const [bullet, setBullet] = useState("");
  const [bulletTextColor, setBulletTextColor] = useState("#FFFFFF");
  const [color, setColor] = useState("#000000");
  const [stationsCSV, setStationsCSV] = useState();
  const [stationsDict, setStationsDict] = useState<Array<any>>([]);

  function parseStationsCSV(stationsCSV: any) {
    const cols = stationsCSV[0] as Array<string>;
    const stations = [];
    for (let i = 1; i < stationsCSV.length; i++) {
      const station = {
        id: i,
        name: stationsCSV[i][cols.indexOf('station')],
        borough: stationsCSV[i][cols.indexOf('borough')],
        transfers: stationsCSV[i][cols.indexOf('transfers')] ? stationsCSV[i][cols.indexOf('transfers')].split("/") : [],
        isAccessible: stationsCSV[i][cols.indexOf('is_accessible')] === 'yes'
      };

      stations.push(station);
    }
    console.log(stations);
    setStationsDict(stations);
  }

  function handleGenerate(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    parseStationsCSV(stationsCSV);
  }

  return (
    <>
      <div>
        <img src={logo} className="logo" alt="Logo" />
      </div>
      <h1>Subway Strip Map Maker</h1>
      <div className="card">
        <form onSubmit={handleGenerate}>
          <label>Line Name: { }
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
          </label>
          <br />
          <br />
          <label>Line Bullet: { }
            <input type="text" value={bullet} size={3} maxLength={3} onChange={e => setBullet(e.target.value)} />
          </label>
          <br />
          <br />
          <label>Bullet Text Color: { }
            <select value={bulletTextColor} onChange={e => setBulletTextColor(e.target.value)}>
              <option value={'#FFFFFF'}>White</option>
              <option value={'#000000'}>Black</option>
            </select>
          </label>
          <br />
          <br />
          <label>Line Color: { }
            <input type="color" value={color} onChange={e => setColor(e.target.value)} />
          </label>
          <br />
          <br />
          <label>Stations:
            <CSVReader onUploadAccepted={(results: any) => {
              setStationsCSV(results.data);
            }}>
              {({ getRootProps, acceptedFile, ProgressBar, getRemoveFileProps, }: any) => (
                <>
                  <div>
                    <button type="button" {...getRootProps()}>
                      Browse file
                    </button>
                    <div>
                      {acceptedFile && acceptedFile.name}
                    </div>
                    <button {...getRemoveFileProps()}>
                      Remove
                    </button>
                  </div>
                  <ProgressBar />
                </>
              )}
            </CSVReader>
          </label>
          <br />
          <button type="submit">
            Generate
          </button>
        </form>
        <br />
        <div>
          {stationsDict && <StripMap name={name} bulletText={bullet} bulletTextColor={bulletTextColor} color={color} stationsDict={stationsDict} />}
        </div>
      </div>
    </>
  )
}

export default App
