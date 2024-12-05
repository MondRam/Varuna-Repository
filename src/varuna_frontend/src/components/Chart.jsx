import React from 'react';
import PHChart from './PH';
import Temperature from './Temperature';
import Turbidity from './Turbidity';
import Microplastics from './Microplastics';

const Chart = () => {
    const chartStyle = {
        marginBottom: '80px', // Aumenta la distancia entre los elementos
    };

    return (
        <div>
            <div style={chartStyle}>
                <PHChart />
            </div>
            <div style={chartStyle}>
                <Temperature />
            </div>
            <div style={chartStyle}>
                <Turbidity />
            </div>
            <div style={chartStyle}>
                <Microplastics />
            </div>
        </div>
    );
};

export default Chart;

