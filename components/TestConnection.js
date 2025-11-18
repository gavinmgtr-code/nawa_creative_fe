// components/TestConnection.js
import { useEffect } from 'react';

export default function TestConnection() {
    useEffect(() => {
        // Test connection to NestJS
        fetch('http://localhost:3000/bookings')
            .then(response => response.json())
            .then(data => console.log('Connection successful:', data))
            .catch(error => console.error('Connection failed:', error));
    }, []);

    return <div>Testing connection to NestJS backend...</div>;
}
