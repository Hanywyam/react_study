import React, { useState } from 'react';
import ExCalcDB from '../DB/ExCalcDB';
import ExMoney from './ExMoney';

const ExCalcSelect = ({ setSelectedMoney }) => {
    const [selectedVal, setSelectedVal] = useState("");

    const handleSelect = (evt) => {
        const selectedItemId = evt.target.value;
        setSelectedVal(selectedItemId);

        const selectedItem = ExCalcDB.find(item => item.nation === selectedItemId);

        if (selectedItem) {
            setSelectedMoney(selectedItem.money);
        }
    };

    return (
        <>
            <select onChange={handleSelect}>
                <option value="">국가를 선택하세요.</option>
                {ExCalcDB.map((item) => (
                    <option key={item.id} value={item.nation}>
                        {item.nation}/{item.unit}
                    </option>
                ))}
            </select>

            <p><ExMoney selectedVal={selectedVal} /></p>

        </>
    );
};


export default ExCalcSelect;