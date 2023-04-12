import { ProductCard } from '@/components/ProductCard';
import { Props } from '@/pages';
import { SimpleGrid } from '@chakra-ui/react';

export function ProductSection({products}: Props){
    return(
        <SimpleGrid as='ol' minChildWidth='160px' listStyleType='none' gap={1}>
                {products.map(product =>{
                return <li key={product.id} ><ProductCard {...product}/></li>
                    })}
        </SimpleGrid>
    

    )
}