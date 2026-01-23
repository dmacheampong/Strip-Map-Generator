import { useState, type FormEvent } from 'react'
import { useCSVReader } from 'react-papaparse';
import viteLogo from '/vite.svg'
import './App.css'
import StripMap from './components/StripMap';

function App() {


  const { CSVReader } = useCSVReader();

  const [name, setName] = useState("");
  const [bullet, setBullet] = useState("");
  const [bulletTextColor, setBulletTextColor] = useState("#FFFFFF");
  const [color, setColor] = useState("#000000");
  //const [line, setLine] = useState<Line>();
  const [stationsCSV, setStationsCSV] = useState();
  const stations: any[] = [];

  function parseStationsCSV(stationsCSV: any): Array<any> {
    const cols = stationsCSV[0] as Array<string>;

    for (let i = 1; i < stationsCSV.length; i++) {

      const row: { [key: string]: any } = {};
      for (let j = 0; j < cols.length; j++) {
        const s: string = cols[j];
        row[s] = stationsCSV[i][j];
      }

      stations.push(row);
    }
    // let stationTransfers = [];

    //if (stationsCSV[i][2]) {
    //stationTransfers = stationsCSV[i][2].split("/");
    //}

    //const isAccessible = (stationsCSV[i][3] == 'yes');
    //const station = new Station(stationName, stationBorough, stationTransfers, isAccessible);
    //stations.push(station);

    return stations;
  }

  function handleGenerate(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const stations = parseStationsCSV(stationsCSV);
    console.log(stations);
    // const route = new Line(name, bullet, bulletTextColor, color, stations);
    //setLine(route);
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Strip Map Maker</h1>
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
          {stationsCSV && <StripMap name={name} bulletText={bullet} bulletTextColor={bulletTextColor} color={color} stationsDict={stations} />}
        </div>
      </div>
    </>
  )
}

export default App
