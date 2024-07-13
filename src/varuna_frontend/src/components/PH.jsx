import React, { useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';

const PHChart = () => {
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
            lineColor: '#2962FF',
            topColor: 'rgba(41, 98, 255, 0.56)',
            bottomColor: 'rgba(41, 98, 255, 0.04)',
        });

        const data = [
            { time: '2024-07-01', value: 7.5 },
            { time: '2024-07-02', value: 8 },
            { time: '2024-07-03', value: 7.8 },
            { time: '2024-07-04', value: 7 },
            { time: '2024-07-05', value: 7 },
            { time: '2024-07-06', value: 7.3 },
            { time: '2024-07-07', value: 7.5 },
            { time: '2024-07-08', value: 7.8 },
            { time: '2024-07-09', value: 8.1 },
        ];

        areaSeries.setData(data);

        chart.timeScale().fitContent();

        return () => {
            chart.remove();
        };
    }, []);

    return (
        <div style={{ position: 'relative', width: '100%', height: '300px' }}>
            <h2 style={{ textAlign: 'center' }}>Gráfica de pH</h2>
            <div ref={chartContainerRef} style={{ position: 'relative', width: '100%', height: '300px' }} />
        </div>
    );
};

export default PHChart;
