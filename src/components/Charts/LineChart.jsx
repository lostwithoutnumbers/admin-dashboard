import React from 'react'
import { ChartComponent, SeriesCollectionDirective,SeriesDirective, LineSeries, Inject, DateTime, Legend, Tooltip } from '@syncfusion/ej2-react-charts'

import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from '../../data/dummy'

const LineChart = () => {
  return (
    <ChartComponent>  
        <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
        <SeriesCollectionDirective>
        </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default LineChart