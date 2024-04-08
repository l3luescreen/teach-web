const start = () => {
  setInterval(() => {
    const timestamp = new Date();
    const mockDataTemp = Math.random() * 10;
    const mockDataHumid = Math.random() * 10;
    return { timestamp: timestamp, temp: mockDataTemp, humid: mockDataHumid };
  }, 1000);
};

genRandomData = () => {
  const timestamp = new Date();
  const mockDataTemp = Math.random() * 10;
  const mockDataHumid = Math.random() * 10;

  const mockData = {
    timestamp: timestamp,
    temp: mockDataTemp,
    humid: mockDataHumid,
  };
  return mockData;
};
