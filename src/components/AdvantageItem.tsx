import { Grid, GridItem, Show, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type Props = {
    title: string;
    content: string;
    icon:  IconProp;
    children: never[]
}
export function AdvantageItem({title, content, icon} : Props){
    return(
    <Grid gridTemplateColumns={{
        base:'1fr',
        sm: '40px 1fr'
    }}
    gap={{
        base: '1rem',
        sm: '0.5rem'
    }} 
    alignItems='center' justifyItems='center' margin='0 0.5rem'>
        <GridItem>
            <FontAwesomeIcon icon={icon} width='40px'/>
        </GridItem>
        <GridItem>
            <Text textTransform='uppercase' fontSize='xs' fontWeight='bold'>{title}</Text>
            <Show above="sm">
                <Text>{content}</Text> 
            </Show>
        </GridItem>
    </Grid>
    )
}
