import React, {useState, useEffect} from 'react';
import {Button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import {DayCounter} from '../types/daycounter';

const DayCounterCTA: React.FC<DayCounter> = ({ startDateIso, label }) => {
    const [currentTime, setCurrentTime] = useState<number>(() => Date.now());
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => setCurrentTime(Date.now()), 3600000);
        return () => clearInterval(interval);
    }, []);

    const startTime = Date.parse(startDateIso);
    const daysPassed = Number.isFinite(startTime)
        ? Math.max(0, Math.floor((currentTime - startTime) / (1000 * 60 * 60 * 24)))
        : 0;
    const displayDays = `${daysPassed} Day${daysPassed !== 1 ? 's' : ''}`;

    return (
        <div className="d-grid gap-2 d-md-block">
            <Button
                variant="primary"
                size="lg"
                className="shadow-sm"
                onClick={() => navigate('/schedule')}
            >
                <span className="fw-bold">{label}: </span>
                {displayDays}
            </Button>
        </div>
    );
};

export default DayCounterCTA;