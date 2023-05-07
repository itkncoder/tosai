import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Text } from "@chakra-ui/react"
import Image from "next/image"
import logo from "@/assets/logo.png"
import watsapp from "@/assets/watsapp.png"
import instagramm from "@/assets/instagramm.png"
import youtube from "@/assets/youtube.png"
import Link from "next/link"

const Sidebar = () => {
    return (
        <Box minH={"100vh"} display={"flex"} flexDirection={"column"} justifyContent={"space-between"} py={"30px"} w={"240px"} bg={"#F7F7F9"}>
            <Box>
                <Box>
                    <Image width={200} alt="logo" src={logo} />
                </Box>
                <Box mt={"50px"} display={"flex"} flexDirection={"column"} gap={"28px"} px={"26px"} >
                    <Text _hover={{color: "gray"}} cursor={"pointer"} fontWeight={600} fontSize={"16px"} ><Link href={"/"}>Услуги</Link></Text>
                    <Text _hover={{color: "gray"}} cursor={"pointer"} fontWeight={600} fontSize={"16px"} ><Link href={"/catalog"}>Каталог техники</Link></Text>
                    <Text _hover={{color: "gray"}} cursor={"pointer"} fontWeight={600} fontSize={"16px"} ><Link href={"/"}>Аукционы</Link></Text>
                    <Accordion defaultIndex={[1]} allowMultiple >
                        <AccordionItem border={"0"}>
                            <AccordionButton _hover={{bg: "none"}} borderRadius={"5px"} pl={"0"} >
                                <Box> 
                                    <Text cursor={"pointer"} fontWeight={600} fontSize={"16px"}>Информация</Text>
                                </Box>
                                <AccordionIcon color={"#CD0000"} />
                            </AccordionButton>
                            <AccordionPanel pl={"0"} display={"flex"} flexDirection={"column"} alignItems={"start"} gap={"5px"} pb={4}>
                                <Text _hover={{color: "gray"}} cursor={"pointer"} fontWeight={600} fontSize={"16px"} ><Link href={"/"}>О придпринимателе</Link></Text>
                                <Text _hover={{color: "gray"}} cursor={"pointer"} fontWeight={600} fontSize={"16px"} ><Link href={"/"}>О разработчике</Link></Text>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                    <Text _hover={{color: "gray"}} cursor={"pointer"} fontWeight={600} fontSize={"16px"} ><Link href={"/"}>О нас</Link></Text>
                    <Text _hover={{color: "gray"}} cursor={"pointer"} fontWeight={600} fontSize={"16px"} ><Link href={"/"}>Отзывы</Link></Text>
                    <Text _hover={{color: "gray"}} cursor={"pointer"} fontWeight={600} fontSize={"16px"} ><Link href={"/"}>Контакты</Link></Text>
                </Box>
            </Box>
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"8px"}>
                <a href="/">
                    <Image src={watsapp} width={32} alt="watsapp" />
                </a>
                <a href="/">
                    <Image src={instagramm} width={32} alt="insta" />
                </a>
                <a href="/">
                    <Image src={youtube} width={32} alt="youtube" />
                </a>
            </Box>
        </Box>
    )
}

export default Sidebar