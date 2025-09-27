import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const DataChart = () => {
    const data = [
        { name: 'Янв', value: 1000 },
        { name: 'Фев', value: 2000 },
        { name: 'Март', value: 1500 },
        { name: 'Апр', value: 2500 },
    ];

    return (
        <div style={{ width: '100%', height: 300, fontFamily: 'Arial, sans-serif', borderRadius: "20px" }}>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={data}
                    margin={{
                        top: 20,
                        bottom: 20,
                    }}
                >
                    <XAxis
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                        tick={({ x, y, payload }) => (
                            <g transform={`translate(${x},${y})`}>
                                <foreignObject x={-20} y={8} width={60} height={30}>
                                    <div
                                        xmlns="http://www.w3.org/1999/xhtml"
                                        className="bg-[#F5F7FA] rounded-[20px] px-3 py-1 text-xs text-gray-700 flex items-center justify-center"
                                    >
                                        {payload.value}
                                    </div>
                                </foreignObject>
                            </g>
                        )}
                    />
                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        domain={[0, 3000]}
                        ticks={[0, 500, 1000, 1500, 2000, 2500, 3000]}
                        tick={({ x, y, payload }) => (
                            <g transform={`translate(${x},${y})`}>
                                <foreignObject x={-45} y={-12} width={60} height={30}>
                                    <div
                                        xmlns="http://www.w3.org/1999/xhtml"
                                        className="bg-[#F5F7FA] rounded-[20px] px-2 py-0.5 text-xs text-gray-700 flex items-center justify-center"
                                    >
                                        {payload.value}
                                    </div>
                                </foreignObject>
                            </g>
                        )}
                    />

                    <Tooltip />
                    <Bar
                        dataKey="value"
                        fill="#0E9F6E"
                        radius={[10, 10, 0, 0]}
                        barSize={20}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default DataChart;
