import { Grid, GridItem, Text } from "@chakra-ui/react";
import { IconType } from 'react-icons';
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
    <Grid gridTemplateColumns='40px 1fr' gap='1rem' alignItems='center'>
        <GridItem>
            <FontAwesomeIcon icon={icon}/>
        </GridItem>
        <GridItem>
            <Text textTransform='uppercase' fontSize='xs' fontWeight='bold'>{title}</Text>
            <Text>{content}</Text>                
        </GridItem>
    </Grid>
    )
}
