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
        <Grid templateColumns='540px 255px 255px' templateRows='200px 260px' gap='30px'>
            {categories.map((cat, key)=>{
            //funcion para sustituir el ' de la categoria y poder usar el nombre de la imagen
            const slug = slugify(cat)
            const imageUrl = `/pic-categories-${slug}.jpg`
            // propiedades del grid para evitar repetir codigo dentro de cada gridItem
            let gridItemProps: GridItemProps ={
                position: 'relative',
                w:'100%',
                h: '100%'
            }
            if(key == 0){
                gridItemProps.rowSpan = 2
            }
            if(key == categories.length-1){
                gridItemProps.colSpan = 2
            }

            return <GridItem {...gridItemProps} key={key}>
                <Image src={imageUrl} fill={true} alt={cat}/>
                <CenteredLabel>{cat}</CenteredLabel>
                </GridItem>
            })}
        </Grid>
    )
}

