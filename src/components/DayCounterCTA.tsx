import React, { useState, useEffect } from 'react';

interface DayCounterProps {
    startDateIso: string;
    label: string;
}

const DayCounterCTA: React.FC<DayCounterProps> = ({ startDateIso, label }) => {
    const [daysPassed, setDaysPassed] = useState<number>(0);

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

    return (
        <div className="d-grid gap-2 d-md-block">
            <button
                className="btn btn-primary btn-lg shadow-sm"
                type="button"
                onClick={() => window.location.href = '#booking'} // Example CTA action
            >
                <span className="fw-bold">{label}:</span> {daysPassed} Days
            </button>
        </div>
    );
};
export default DayCounterCTA;
