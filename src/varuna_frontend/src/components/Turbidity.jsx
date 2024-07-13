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
            lineColor: '#00FF00', // Línea verde
            topColor: 'rgba(0, 255, 0, 0.56)', // Verde con transparencia para el área superior
            bottomColor: 'rgba(0, 255, 0, 0.04)',
        });

        const data = [
            { time: '2024-07-01', value: 200 },
            { time: '2024-07-02', value: 228 },
            { time: '2024-07-03', value: 230 },
            { time: '2024-07-04', value: 230 },
            { time: '2024-07-05', value: 215 },
            { time: '2024-07-06', value: 219 },
            { time: '2024-07-07', value: 228 },
            { time: '2024-07-08', value: 223 },
            { time: '2024-07-09', value: 200 },
        ];

        areaSeries.setData(data);

        chart.timeScale().fitContent();

        return () => {
            chart.remove();
        };
    }, []);

    return (
        <div style={{ position: 'relative', width: '100%', height: '300px' }}>
            <h2 style={{ textAlign: 'center', color: '#00FF00', fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>
                Gráfica de Turbidez
            </h2>
            <div ref={chartContainerRef} style={{ position: 'relative', width: '100%', height: '300px' }} />
        </div>
    );
};

export default Chart;
