import { ProductCard } from '@/components/ProductCard';
import { Props } from '@/pages';
import { SimpleGrid } from '@chakra-ui/react';

export function ProductSection({products}: Props){
    return(
        <SimpleGrid  minChildWidth='255px' listStyleType='none' spacing='1.86rem' >
                {products.map(product =>{
                return <ProductCard {...product} key={product.id} />
                    })}
        </SimpleGrid>
    

    )
}