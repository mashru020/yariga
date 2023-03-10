import { useList } from '@pankod/refine-core';
import { Typography, Box, Stack } from '@pankod/refine-mui';

import {
  PieChart,
  PropertyReferrals,
  TotalRevenue,
  PropertyCard,
  TopAgent
} from 'components'
const home = () => {
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
    </Box>
  )
}

export default home