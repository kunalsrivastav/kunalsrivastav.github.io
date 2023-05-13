import React from 'react';
import './about-me.css';

const ABOUT_ME_INFO = [
    {
        key: '4',
        timespan: 'Apr 2022 - Apr 2023',
        // eslint-disable-next-line
        description: 'As a software developer intern at an EV company, I had the opportunity to work on an exciting project called the Fleet Management Web App. This web application was designed to cater to the needs of customers who purchased vehicles from our company. It aimed to provide them with a comprehensive and user-friendly platform to efficiently manage their vehicle fleet. \
                        The Fleet Management Web App offered a range of features to ensure that customers could effectively monitor and control their vehicles. The app\'s dashboard provided an overview of all the vehicles available in the fleet, allowing customers to access important information at a glance. The vehicles were displayed on a map, with each vehicle represented as a marker or cluster of markers, making it easy to visualize the distribution and status of the fleet. \
                        Customers could access live views of each vehicle, enabling them to track their real-time location, speed, and other essential parameters. Additionally, the app provided access to the history of past trips for each vehicle, allowing customers to review routes taken and analyze driving patterns. \
                        The Fleet Management Web App also included a notification system that alerted customers to important events related to their vehicles. Notifications included low battery alerts, speed threshold breaches, and other relevant information to ensure that customers remained informed about the status of their fleet. \
                        In order to support the charging needs of the vehicles, the app listed nearby charging stations, helping customers to easily locate and plan for charging their vehicles when necessary. \
                        Furthermore, the web app offered comprehensive reporting capabilities. Customers could generate reports for individual vehicles or the entire fleet, gaining insights into factors such as energy consumption, mileage, and overall fleet performance. \
                        During my internship, I actively contributed to the development and enhancement of this Fleet Management Web App. Working with a team of experienced developers, I utilized React JS to build the app\'s user interfaces, integrate with backend systems, and ensure a smooth and intuitive user experience. \
                        Overall, the Fleet Management Web App empowered customers to efficiently manage their vehicle fleet, leveraging features such as live tracking, trip history, notifications, charging station information, and comprehensive reports.'
    },
    {
        key: '3',
        timespan: 'Aug 2019 - May 2023',
        description: 'Completed Bachelor\'s of Technology in Computer Science Engineering from GLA University, Mathura, India.'
    },
    {
        key: '2',
        timespan: 'May 2019',
        description: 'Completed Intermediate(CBSE - PCM) from Vishwanath Academy, Lucknow, India.'
    },
    {
        key: '1',
        timespan: 'May 2017',
        description: 'Completed High School(CBSE) from Vishwanath Academy, Lucknow, India.'
    }
]

const AboutMe = () => {
    return (
        <div className='about-me'>
            <h2>About me</h2>
            <div className='about-box'>
                {
                    ABOUT_ME_INFO?.map((aboutMe: any) => {
                        return <div key={aboutMe?.key} className='about-card'>
                            <h3>{aboutMe?.timespan}</h3>
                            <p>{aboutMe?.description}</p>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default AboutMe;