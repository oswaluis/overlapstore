import { ProductCard } from '@/components/ProductCard';
import { Props } from '@/pages';
import { Box, Grid, SimpleGrid } from '@chakra-ui/react';

export function ProductSection({products}: Props){
    return(
            <Grid  
            gap='1.85rem'
            gridTemplateColumns={{
                base:'repeat(auto-fit, 255px)',
                md: 'repeat(auto-fit, minmax(255px, 1fr))' 
            }}
            gridAutoColumns='255px'
            gridAutoFlow={{
                base:'column',
                md:'row'
            }}
            overflowX={'scroll'}
            scrollBehavior={'smooth'}
            scrollSnapType={'x mandatory'}
            scrollSnapStop={'always'}>
                {products.map((product, i) =>{
                return <Box key={product.id}
                    marginLeft={{
                        base: i===0 ?'1rem':'0',
                        md: '0'
                    }}
                    border='solid 1px' 
                    borderColor={"gray.100"} 
                    scrollSnapAlign={'center'}>
                            <ProductCard {...product}  /></Box>
                    })}
        </Grid>

    )
}