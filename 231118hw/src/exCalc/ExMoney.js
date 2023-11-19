import React from 'react';
import ExCalcDB from '../DB/ExCalcDB';

const ExMoney = ({ selectedVal }) => {

  const selectedItem = ExCalcDB.find(item => item.nation === selectedVal);

  return (
    <>
      {selectedItem && (
        <div>
          <p>환율: {selectedItem.money}</p>
        </div>
      )}
    </>
  );
};

export default ExMoney;