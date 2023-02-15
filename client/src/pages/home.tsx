import { useList } from '@pankod/refine-core'
import { Typography, Box, Stack } from '@pankod/refine-mui'

import {
  PieChart,
  PropertyReferrals,
  TotalRevenue,
  PropertyCard,
} from 'components'

const Home = () => {
  const { data, isLoading, isError } = useList({
    resource: 'properties',
    config: {
      pagination: {
        pageSize: 4,
      },
    },
  })

  const latestProperties = data?.data ?? []

  if (isLoading) return <Typography>Loading...</Typography>
  if (isError) return <Typography>Something went wrong!</Typography>
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color={'#11142D'}>
        Dashboard
      </Typography>

      <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
        <PieChart
          title="Properties for sale"
          value={684}
          series={[75, 25]}
          colors={['#d08b15', '#d08bc5']}
        />
        <PieChart
          title="Properties for rent"
          value={895}
          series={[60, 40]}
          colors={['#11c7b1', '#e4c8ef']}
        />
        <PieChart
          title="Total customers"
          value={8684}
          series={[75, 25]}
          colors={['#040f14', '#144e69']}
        />
        <PieChart
          title="Properties for cities"
          value={389}
          series={[85, 15]}
          colors={['#bea925', '#6c25be']}
        />
      </Box>
      <Stack
        mt={'25px'}
        width={'100%'}
        direction={{ xs: 'column', lg: 'row' }}
        gap={4}
      >
        <TotalRevenue />
        <PropertyReferrals />
      </Stack>
      <Box
        flex={1}
        borderRadius="15px"
        padding="20px"
        bgcolor="#fcfcfc"
        display="flex"
        flexDirection="column"
        minWidth="100%"
        mt="25px"
      >
        <Typography fontSize="18px" fontWeight={600} color="#11142d">
          Latest Properties
        </Typography>

        <Box mt={2.5} sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
          {latestProperties.map((property) => (
            <PropertyCard
              key={property._id}
              id={property._id}
              title={property.title}
              location={property.location}
              price={property.price}
              photo={property.photo}
            />
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default Home
