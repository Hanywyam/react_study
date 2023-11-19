import React from 'react';
import ExCalcSelect from './ExCalcSelect';

const ExCalc = () => {
    return (
        <div>
            <h2>환율 계산기</h2>
            <p>송금국가: 한국(KRW)</p>
            <p>수취국가: 
                <form action="#">
                    <select name="nation" id="nation">
                        <ExCalcSelect />
                    </select>
                </form>
            </p>
            <p>환율: </p>
            <p>송금액: <input type="text" /></p>
            <button type='submit'>확인</button>
        </div>
    );
};

export default ExCalc;