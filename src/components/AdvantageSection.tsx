import { Flex } from "@chakra-ui/react";
import { AdvantageItem } from "./AdvantageItem";
import { faDesktop, faTruck, faUndo } from "@fortawesome/free-solid-svg-icons";


export function AdvantageSection (){
    return(
        <Flex gap='2rem' justifyContent='space-between ' margin='2rem 0 ' w='100%'>
            <AdvantageItem
                title='Envio Gratis'
                content='Para ordenes mayores a $10.000'
                icon={faTruck}
                >
            </AdvantageItem>
            <AdvantageItem
                title='Reembolso'
                content='10 dias para regresar tu compra'
                icon={faUndo} 
                >
            </AdvantageItem>
            <AdvantageItem
                title='Soporte'
                content='soporte las 24 hs'
                icon={faDesktop}
                >
            </AdvantageItem>

        </Flex >
    )
}
