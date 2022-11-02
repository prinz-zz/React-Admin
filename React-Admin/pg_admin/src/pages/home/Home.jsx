import React from 'react';
import './home.scss';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import Chart from '../../components/charts/Chart';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import { userData } from '../../data';

export default function Home() {
    return (
        <div className='home'>
            <FeaturedInfo />
            <Chart data={userData} title='User Analytics' grid dataKey="Active User" />
            <div className='homeWidgtes'>
            <WidgetSm />
            <WidgetLg/>
            </div>
        </div>
    )
}