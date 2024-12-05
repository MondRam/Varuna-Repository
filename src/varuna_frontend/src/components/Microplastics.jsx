import React, { useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';

const Chart = () => {
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
            lineColor: '#FFA500', // Línea naranja
            topColor: 'rgba(255, 165, 0, 0.56)', // Naranja con transparencia para el área superior
            bottomColor: 'rgba(255, 165, 0, 0.04)', // Naranja claro con transparencia para el área inferior
        });

        const data = [
            { time: '2024-07-01', value: 100 },
            { time: '2024-07-02', value: 95 },
            { time: '2024-07-03', value: 87 },
            { time: '2024-07-04', value: 70 },
            { time: '2024-07-05', value: 65 },
            { time: '2024-07-06', value: 48 },
            { time: '2024-07-07', value: 40 },
            { time: '2024-07-08', value: 25 },
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
            <h2 style={{ textAlign: 'center', color: '#FFA500', fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>
                Microplásticos
            </h2>
            <div ref={chartContainerRef} style={{ position: 'relative', width: '100%', height: '300px' }} />
        </div>
    );
};

export default Chart;
