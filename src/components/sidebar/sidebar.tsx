import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Text } from "@chakra-ui/react"
import Image from "next/image"
import logo from "@/assets/logo.png"

const Sidebar = () => {
    return (
        <Box minH={"100vh"} py={"30px"} w={"240px"} bg={"#F7F7F9"}>
            <Box>
                <Image width={200} alt="logo" src={logo} />
            </Box>
            <Box mt={"50px"} display={"flex"} flexDirection={"column"} gap={"28px"} px={"26px"} >
                <Text fontWeight={600} fontSize={"16px"} >Услуги</Text>
                <Text fontWeight={600} fontSize={"16px"} >Каталог техники</Text>
                <Text fontWeight={600} fontSize={"16px"} >Аукционы</Text>
                <Accordion defaultIndex={[0]} allowMultiple >
                    <AccordionItem border={"0"}>
                        <AccordionButton pl={"0"} >
                            <Box > 
                                <Text fontWeight={600} fontSize={"16px"} >Информация</Text>
                            </Box>
                            <AccordionIcon color={"#CD0000"} />
                        </AccordionButton>
                        <AccordionPanel pl={"0"} display={"flex"} flexDirection={"column"} alignItems={"start"} gap={"5px"} pb={4}>
                            <Text fontWeight={600} fontSize={"16px"} >О придпринимателе</Text>
                            <Text fontWeight={600} fontSize={"16px"} >О разработчике</Text>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
                <Text fontWeight={600} fontSize={"16px"} >О нас</Text>
                <Text fontWeight={600} fontSize={"16px"} >Отзывы</Text>
                <Text fontWeight={600} fontSize={"16px"} >Контакты</Text>
            </Box>
        </Box>
    )
}

export default Sidebar