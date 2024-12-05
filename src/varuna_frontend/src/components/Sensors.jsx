import React, { useState, useEffect } from 'react';

function Sensors() {
    const [greeting, setGreeting] = useState('');
    const [sample, setSample] = useState(null);
    const [newSample, setNewSample] = useState({
        id: '',
        dateTime: '',
        pH: 0,
        temperature: 0,
        turbidity: 0,
    });

    useEffect(() => {
        const fetchGreeting = async () => {
            try {
                const response = await fetch('http://a4tbr-q4aaa-aaaaa-qaafq-cai.localhost:4943/greet');
                if (!response.ok) {
                    throw new Error('Failed to fetch greeting');
                }
                const data = await response.json();
                setGreeting(data.message);
            } catch (error) {
                console.error('Error fetching greeting:', error);
            }
        };

        const fetchSample = async () => {
            try {
                const response = await fetch('http://a4tbr-q4aaa-aaaaa-qaafq-cai.localhost:4943/sample');
                if (!response.ok) {
                    throw new Error('Failed to fetch sample');
                }
                const data = await response.json();
                setSample(data.message);
            } catch (error) {
                console.error('Error fetching sample:', error);
            }
        };

        fetchGreeting();
        fetchSample();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://a4tbr-q4aaa-aaaaa-qaafq-cai.localhost:4943/post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newSample),
            });
            if (!response.ok) {
                throw new Error('Failed to post sample');
            }
            const data = await response.json();
            setSample(data.sample);
        } catch (error) {
            console.error('Error posting sample:', error);
        }
    };

    return (
        <div>
            <h1>{greeting}</h1>
            <h2>Sample Data:</h2>
            {sample && (
                <pre>{JSON.stringify(sample, null, 2)}</pre>
            )}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="ID"
                    value={newSample.id}
                    onChange={(e) => setNewSample({ ...newSample, id: e.target.value })}
                />
                <input
                    type="datetime-local"
                    value={newSample.dateTime}
                    onChange={(e) => setNewSample({ ...newSample, dateTime: e.target.value })}
                />
                <input
                    type="number"
                    placeholder="pH"
                    value={newSample.pH}
                    onChange={(e) => setNewSample({ ...newSample, pH: parseFloat(e.target.value) })}
                />
                <input
                    type="number"
                    placeholder="Temperature"
                    value={newSample.temperature}
                    onChange={(e) => setNewSample({ ...newSample, temperature: parseFloat(e.target.value) })}
                />
                <input
                    type="number"
                    placeholder="Turbidity"
                    value={newSample.turbidity}
                    onChange={(e) => setNewSample({ ...newSample, turbidity: parseFloat(e.target.value) })}
                />
                <button type="submit">Update Sample</button>
            </form>
        </div>
    );
}

export default Sensors;