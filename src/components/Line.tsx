import React from 'react';
import { AxisOptions, Chart } from 'react-charts';
import useDemoConfig from '../hooks/useDemoConfig';

export default function Line({
  noAxis,
  Data,
}: {
  noAxis?: [boolean, boolean];
  Data?: {
    label: string;
    data: {
      primary: string | number | Date | null;
      secondary: number | null;
      radius: number | undefined;
    }[];
  }[];
}) {
  const { data, randomizeData } = useDemoConfig({
    series: 1,
    dataType: 'time',
  });

  const primaryAxis = React.useMemo<
    AxisOptions<(typeof data)[number]['data'][number]>
  >(() => {
    return {
      getValue: datum => datum.primary as unknown as Date,
    };
  }, []);

  const secondaryAxes = React.useMemo<
    AxisOptions<(typeof data)[number]['data'][number]>[]
  >(
    () => [
      {
        getValue: datum => datum.secondary,
      },
    ],
    []
  );

  console.log('data', Data);
  return (
    <>
      {/* <ResizableBox> */}
      <Chart
        options={{
          data: Data || [
            {
              label: '',
              data: [
                {
                  primary: new Date(),
                  secondary: 0,
                  radius: 0,
                },
              ],
            },
          ],
          primaryAxis,
          secondaryAxes,
        }}
      />
      {/* </ResizableBox> */}
    </>
  );
}
