import React from 'react';

export const ScheduleIframe: React.FC = () => {
    return (
        <iframe
            style={{
                border: 0,
                display: 'block',
                width: '100%',
                height: '650px'
            }}
            src="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2ZCzKMpxsDgy3QIYZTfsvvJUdvRk-jvBV0w8lJruHsQC7XKkoXjSkAI2Tti5absT-wnaXc05Zy"
            title="Book an eStop driving lesson with Google Calendar"

        />
    );
};
