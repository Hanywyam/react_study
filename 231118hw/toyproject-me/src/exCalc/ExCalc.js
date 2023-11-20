import React, { useState } from 'react';
import ExCalcSelect from './ExCalcSelect';
import "../style/style.scss";

const ExCalc = () => {
    const [inputVal, setInputVal] = useState(0);
    const [selectedMoney, setSelectedMoney] = useState(null);
    const [calcAmount, setCalcAmount] = useState(0);

    const handleInput = (evt) => {
        setInputVal(evt.target.value);
    };

    const handleCalc = () => {
        // 일본만 계산 방법이 다르게..적용안됨
        // if (selectedMoney !== null && selectedMoney !== 0) {
        //     if (selectedMoney.id === 2) {
        //         setCalcAmount(inputVal / selectedMoney.money * 100);
        //     } else {
        //         setCalcAmount(inputVal / selectedMoney.money);
        //     }
        // }
        setCalcAmount(inputVal / selectedMoney);
    };

    return (
        <div className='container'>
            <h2>환율 계산기</h2>
            <p>송금국가: 한국(KRW)</p>
            <p>수취국가:
                <form action="#">
                    <ExCalcSelect setSelectedMoney={setSelectedMoney} />
                </form>
                <em>23.11.17 기준</em>
            </p>
            <p>송금액: <input type="text" value={inputVal} onChange={handleInput} /></p>
            <button type='submit' onClick={handleCalc}>확인</button>
            <p>환전 금액: {calcAmount.toFixed(2)}</p>
        </div>
    );
};

export default ExCalc;