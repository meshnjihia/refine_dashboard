import ReactApexChart from 'react-apexcharts'
import { Typography, Box, Stack } from '@pankod/refine-mui'

import { PieChartProps } from 'interfaces/home'

const PieChart = ({ title, value, series, colors }: PieChartProps) => {
  return (
    <Box
      id='chart'
      flex={1}
      flexDirection={'row'}
      display={'flex'}
      bgcolor={'#fcfcfc'}
      justifyContent={'space-between'}
      alignItems={'center'}
      minHeight={'110px'}
      pl={3.5}
      py={2}
      gap={2}
      borderRadius={'15px'}
      width={'fit-content'}
    >
      <Stack direction={'column'}>
        <Typography fontSize={14} color="#808191">
          {title}
        </Typography>
        <Typography fontSize={24} fontWeight={700} mt={1} color="#11142d">
          {value}
        </Typography>
      </Stack>
      <ReactApexChart
        options={{
          chart: { type: 'donut' },
          colors,
          legend: { show: false },
          dataLabels: { enabled: false },
        }}
        series={series}
        type='donut'
        width='120px'
      />
    </Box>
  )
}

export default PieChart
