/* eslint-disable no-template-curly-in-string */
import React from 'react';
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';
import { useStateContext } from '../../contexts/ContextProvider';



const SparkLine = ({id, height, width, color, data, type, currentColor}) => { 
  useStateContext(); 


  return (
    <SparklineComponent 
      id={id}
      height={height}
      width={width}
      innerWidth={1}
      valueType='Numeric'
      fill={color}
      border={{ color: currentColor, width: 2 }}
      dataSource={data}
      xName="x"
      yName="yval"
      type={type}
      tooltipSettings={{
        format: '${x} : data ${yval}',
        visible:true,
        trackLineSettings: {
          visible: true,
        },
      }}
      markerSettings={{visible:['All'], size:2.5, fill:currentColor}} 
    >
      <Inject Service={[SparklineTooltip]} />
    </SparklineComponent>
  );
}

export default SparkLine;