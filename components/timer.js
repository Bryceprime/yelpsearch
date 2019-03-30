import React, { useEffect, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';


const getProgress = () => new Date().getSeconds() / 60 * 100;

function Timer(props) {
    let [completed, changeCompleted] = useState(new Date().getSeconds() / 60 * 100);
    useEffect(() => {
        const timer = setInterval(() => {
            changeCompleted(getProgress())
        }, 1000);

        return () => {
            clearInterval(timer);
        }
    });

    return (
        <div>
            <CircularProgress
                variant="static"
                value={completed}
            />
        </div>
    )
}

export default Timer

