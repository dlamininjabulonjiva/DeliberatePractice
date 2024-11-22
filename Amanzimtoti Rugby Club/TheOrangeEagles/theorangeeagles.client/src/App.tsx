// import { useEffect, useState } from 'react';
// import './App.css';

// interface Forecast {
//     date: string;
//     temperatureC: number;
//     temperatureF: number;
//     summary: string;
// }

// function App() {
//     const [forecasts, setForecasts] = useState<Forecast[]>();

//     useEffect(() => {
//         populateWeatherData();
//     }, []);

//     const contents = forecasts === undefined
//         ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
//         : <table className="table table-striped" aria-labelledby="tableLabel">
//             <thead>
//                 <tr>
//                     <th>Date</th>
//                     <th>Temp. (C)</th>
//                     <th>Temp. (F)</th>
//                     <th>Summary</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {forecasts.map(forecast =>
//                     <tr key={forecast.date}>
//                         <td>{forecast.date}</td>
//                         <td>{forecast.temperatureC}</td>
//                         <td>{forecast.temperatureF}</td>
//                         <td>{forecast.summary}</td>
//                     </tr>
//                 )}
//             </tbody>
//         </table>;

//     return (
//         <div>
//             <h1 id="tableLabel">Weather forecast</h1>
//             <p>This component demonstrates fetching data from the server.</p>
//             {contents}
//         </div>
//     );

//     async function populateWeatherData() {
//         const response = await fetch('weatherforecast');
//         const data = await response.json();
//         setForecasts(data);
//     }
// }

// export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard'
import { Box, Toolbar } from '@mui/material'
import Navigation from './components/Navigation'
import Players from './pages/Players'
import TeamSetup from './pages/TeamSetup'
import TopBar from './components/TopBar'

const drawerWidth = 240

function App() {
  return (
    <Router>
      <TopBar />
      <Navigation />
      <Box
        component="main"
        sx={{
          marginLeft: `${drawerWidth}px`,
          marginTop: '30px',
          paddingLeft: 3,
        }}
      >
        <Toolbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/players" element={<Players />} />
          <Route path="/team-setup" element={<TeamSetup />} />
        </Routes>
      </Box>
    </Router>
  )
}

export default App
