import React from 'react';
import { ScaleLoader } from 'react-spinners'; // Importa ScaleLoader en lugar de ClockLoader

const Loading = () => {
  return (
    <ScaleLoader
      height={35}
      margin={3}
      radius={2}
      width={4}
    />
  );
};

export default Loading;
