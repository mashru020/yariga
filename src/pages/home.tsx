import { useList } from '@pankod/refine-core';
import { Typography, Box, Stack } from '@pankod/refine-mui';

import {
  PieChart,
  PropertyReferrals,
  TotalRevenue,
  PropertyCard,
  TopAgent
} from 'components'

const Home = () => {
  
  const { data, isLoading, isError } = useList({
    resource: 'properties',
    config: {
      pagination: {
        pageSize: 4,
      }
    }
  })

  const latestProperties = data?.data ?? [];

  if(isLoading) return <div>Loadig...</div>
  if(isError) return <div>Something went wrong!</div>

  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142D">
        Dashboard
      </Typography>

      <Box mt="20px" display="flex" flexWrap="wrap" gap={4} >
        <PieChart 
          title="Properties for Sale"
          value={684}
          series={[25, 75]}
          colors={['#436be8', '#e4e8ef']}
        />
        <PieChart 
          title="Properties for Rent"
          value={550}
          series={[60, 40]}
          colors={['#b7abf8', '#e4e8ef']}
        />
        <PieChart 
          title="Total customers"
          value={5648}
          series={[35, 65]}
          colors={['#17abe8', '#e4e8ef']}
        />
        <PieChart 
          title="Total Cities"
          value={384}
          series={[75, 25]}
          colors={['#a76be8', '#e4e8ef']}
        />
      </Box>
      <Stack mt="25px" width="100%" direction={{xs:'column', lg:'row'}} gap={4}>
        <TotalRevenue/>
        <PropertyReferrals />
      </Stack>
      <Box
        flex={1}
        borderRadius="20px"
        bgcolor="#fcfcfc"
        display='flex'
        flexDirection="column"
        minWidth="100%"
        mt="25px"
      >
        <Typography fontSize={18} fontWeight={600} color="#11142d">Latest Properties</Typography>
        <Box mt={2.5} sx={{display:'flex', flexWrap:"wrap", gap:4}}>
          {
            latestProperties.map((property) => (
              <PropertyCard 
                key={property._id}
                id={property._id}
                title={property.title}
                price={property.price}
                location={property.location}
                photo={property.photo}
              />
            ))
          }
        </Box>
      </Box>
    </Box>
  )
}

export default Home