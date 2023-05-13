import React from "react";
import './technology.css';

const TECHNOLOGIES_INFO = [
    {
        title: 'HTML',
        percentageShare: '90',
        level: 'Advance'
    },
    {
        title: 'CSS',
        percentageShare: '80',
        level: 'Advance'
    },
    {
        title: 'React JS',
        percentageShare: '80',
        level: 'Advance'
    },
    {
        title: 'Javascript',
        percentageShare: '75',
        level: 'Advance'
    },
    {
        title: 'Java',
        percentageShare: '70',
        level: 'Intermediate'
    },
    {
        title: 'Python',
        percentageShare: '50',
        level: 'Intermediate'
    },
    {
        title: 'Flask',
        percentageShare: '30',
        level: 'Beginner'
    },
]

const Technologies = () => {
    return (
        <div className="technology-info">
            <h2>Technologies</h2>
            <div className="technology-wrapper">
                {
                    TECHNOLOGIES_INFO?.map((technology: any, index: number) => {
                        return <div key={index} className="technology-card">
                            <div className="basic-info">
                                <h3>{technology?.title}</h3>
                                <div className="percentage" style={{ width: `${technology?.percentageShare}%` }}></div>
                            </div>
                            <span>{technology?.level}</span>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default Technologies;