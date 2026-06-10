import React, {useState, useEffect} from 'react';
import {Button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import {DayCounter} from '../types/daycounter';

const DayCounterCTA: React.FC<DayCounter> = ({ startDateIso, label }) => {
    const [daysPassed, setDaysPassed] = useState<number | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const calculateDays = () => {
            const start = new Date(startDateIso).getTime();
            const now = new Date().getTime();
            const diffInMs = now - start;
            const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

            setDaysPassed(days > 0 ? days : 0);
        };

        calculateDays();

        const interval = setInterval(calculateDays, 3600000);
        return () => clearInterval(interval);
    }, [startDateIso]);

    const displayDays = daysPassed !== null ? `${daysPassed} Day${daysPassed !== 1 ? 's' : ''}` : 'Loading...';

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