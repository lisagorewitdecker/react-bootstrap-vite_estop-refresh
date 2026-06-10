import React, { useEffect, useRef } from 'react';

interface IframeMessageData {
    type: string;
    payload: unknown;
}

export const ScheduleIframe: React.FC = () => {
    const iframeRef = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            if (event.origin !== 'https://calendar.google.com') return;

            const data = event.data as IframeMessageData;

            if ( data.type === 'DATA_FROM_CHILD') {
                console.log('Received data from iframe:', data.payload);
            }
        };

        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
    }, []);

    return (
        <iframe
            ref={iframeRef}
            style={{
                border: 0,
                display: 'block',
                width: '100%',
                height: '650px'
            }}
            src="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2ZCzKMpxsDgy3QIYZTfsvvJUdvRk-jvBV0w8lJruHsQC7XKkoXjSkAI2Tti5absT-wnaXc05Zy"
            title="Secure Child Frame"
            allow="calendar"

        />
    );
};
