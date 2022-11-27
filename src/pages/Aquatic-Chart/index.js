import { useEffect, useState } from 'react';
import LineChart from '~/components/Linechart/LineChart';
import * as aquaticInfomation from '~/components/apiService/aquaticInfomation';

import { useParams } from 'react-router-dom';

function Chart() {
  const { id } = useParams();
  console.log(id);
  //const [listOfDevice, setListOfDevice] = useState([]);
  const [temperature, setTemperature] = useState({
    labels: '',
    datasets: [
      {
        label: '',
        data: [],
      },
    ],
  });
  const [humidity, setHumidity] = useState({
    labels: '',
    datasets: [
      {
        label: '',
        data: [],
      },
    ],
  });
  const [ph, setPh] = useState({
    labels: '',
    datasets: [
      {
        label: '',
        data: [],
      },
    ],
  });
  const [dissolvedOxygen, setDissolvedOxygen] = useState({
    labels: '',
    datasets: [
      {
        label: '',
        data: [],
      },
    ],
  });

  useEffect(() => {
    const getDeviceId = async () => {
      const results = await aquaticInfomation.getAllByDevice(id);
      //setListOfDevice(results.content);
      setTemperature({
        labels: results.content.map((data) => data.createDate),
        datasets: [
          {
            label: 'temperature',
            data: results.content.map((data) => data.temperature),
          },
        ],
      });
      setHumidity({
        labels: results.content.map((data) => data.createDate),
        datasets: [
          {
            label: 'humidity',
            data: results.content.map((data) => data.humidity),
          },
        ],
      });
      setPh({
        labels: results.content.map((data) => data.createDate),
        datasets: [
          {
            label: 'ph',
            data: results.content.map((data) => data.ph),
          },
        ],
      });
      setDissolvedOxygen({
        labels: results.content.map((data) => data.createDate),
        datasets: [
          {
            label: 'dissolvedOxygen',
            data: results.content.map((data) => data.dissolvedOxygen),
          },
        ],
      });
    };
    getDeviceId();
  }, [id]);
  return (
    <div className="wrapper">
      <div className="row">
        <div className="col-md-6">
          <LineChart chartData={temperature} />
        </div>
        <div className="col-md-6">
          <LineChart chartData={humidity} />
        </div>
        <div className="col-md-6">
          <LineChart chartData={ph} />
        </div>
        <div className="col-md-6">
          <LineChart chartData={dissolvedOxygen} />
        </div>
      </div>
    </div>
  );
}

export default Chart;
