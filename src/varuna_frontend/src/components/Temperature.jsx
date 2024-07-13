import React, { useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';

const Temperature = () => {
    const chartContainerRef = useRef(null);

    useEffect(() => {
        const chart = createChart(chartContainerRef.current, {
            width: chartContainerRef.current.clientWidth,
            height: 300,
            layout: {
                textColor: '#000000', // Color del texto
                background: { type: 'solid', color: '#ffffff' }, // Color de fondo blanco
            },
            timeScale: {
                timeVisible: true,
                secondsVisible: false,
            },
        });

        const areaSeries = chart.addAreaSeries({
            lineColor: '#FF0000', // Línea roja
            topColor: 'rgba(255, 0, 0, 0.56)', // Rojo con transparencia para el área superior
            bottomColor: 'rgba(255, 0, 0, 0.04)', // Rojo claro con transparencia para el área inferior
        });

        const data = [
            { time: '2024-07-01', value: 20 },
            { time: '2024-07-02', value: 21.8 },
            { time: '2024-07-03', value: 25 },
            { time: '2024-07-04', value: 23.2 },
            { time: '2024-07-05', value: 19.8 },
            { time: '2024-07-06', value: 21.1 },
            { time: '2024-07-07', value: 22.5 },
            { time: '2024-07-08', value: 20.3 },
            { time: '2024-07-09', value: 20 },
        ];

        areaSeries.setData(data);

        chart.timeScale().fitContent();

        return () => {
            chart.remove();
        };
    }, []);

    return (
        <div style={{ position: 'relative', width: '100%', height: '300px' }}>
            <h2 style={{ textAlign: 'center' }}>Temperatura</h2>
            <div ref={chartContainerRef} style={{ position: 'relative', width: '100%', height: '300px' }} />
        </div>
    );
};

export default Temperature;

