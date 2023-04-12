import { Grid, GridItem, GridItemProps } from "@chakra-ui/react"
import { CenteredLabel } from "./CenteredLabel"
import Image from "next/image"
import { slugify } from "@/utils/slugify"
import { Categories } from "@/pages/models/Categories"


type Props= {
    categories : Categories[]
    }
export function HomeHeroCategories({categories}: Props){
    return(
        <Grid templateColumns={{
            base: '1fr 1fr',
            md:' 540px 255px 255px'
        }} templateRows={{
            base:'130px 154px 130px',
            md:'200px 260px'
        }} gap={{
            base: '0.5rem',
            md:'2rem'
        }}
        templateAreas={{
            base:`
            'cat1 cat1'
            'cat2 cat3'
            'cat4 cat4'
            `,
            md:`
            'cat1 cat2 cat3'
            'cat1 cat4 cat4'
            `

        }}>
            {categories.map((cat, index)=>{
            //funcion para sustituir el ' de la categoria y poder usar el nombre de la imagen
            const slug = slugify(cat)
            const imageUrl = `/pic-categories-${slug}.jpg`

            return <GridItem  
                position ='relative' w='100%' h= '100%' gridArea= {`cat${index + 1}`} key={index} 
                fontSize={{
                    base:'0.85rem',
                    md:'1rem'
                }}>
                <Image src={imageUrl} fill={true} alt={cat} style={{objectFit:'cover'}}/>
                <CenteredLabel>{cat}</CenteredLabel>
                </GridItem>
            })}
        </Grid>
    )
}

