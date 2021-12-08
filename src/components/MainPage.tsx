import React, { useEffect, useState } from 'react';
import { randomNumber, sortArray } from './helpFunctions';
import Button from '@mui/material/Button';
import './main-page.sass';

const MainPage = () => {
    const [evenArray, setEvenArray] = useState<number[]>([]);
    const [oddArray, setOddArray] = useState<number[]>([]);
    const [processing, setProcessing] = useState<boolean>(false);

    useEffect(() => {
        if (processing){
            for (let i = 1; i <= 20; i++){
                const number = randomNumber();
                if (number % 2 === 0){
                    evenArray.push(number);
                } else {
                    oddArray.push(number);
                }
            }
        }
        setProcessing(false);
    },[processing])

    const reset = () => {
        setEvenArray([]);
        setOddArray([]);
    }

    return (
        <div className='main-page'>
            <Button variant="contained" onClick={ () => {
                setProcessing(true);
            }}>
                Generate twenty random numbers
            </Button>
            <div className="table">
                {!processing &&
                    <>
                        <div className="column even">
                            Even numbers
                            {evenArray.sort(sortArray).map((number) => {
                                return ( <div>{number}</div> )
                                }
                            )}
                        </div>
                        <div className="column odd">
                            0dd numbers
                            {oddArray.sort(sortArray).map((number) =>{
                                    return ( <div>{number}</div> )
                                }
                            )}
                        </div>
                    </>
                }
            </div>
            <Button variant="contained" onClick={ () => { reset() }}>
                Reset
            </Button>
        </div>
    );
};

export default MainPage;