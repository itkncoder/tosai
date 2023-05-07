import { BellIcon, EmailIcon, ExternalLinkIcon } from "@chakra-ui/icons"
import { Box, Text } from "@chakra-ui/react"

const Footer = (): JSX.Element => {
    return (
        <Box>
            <Box py={"35px"} px={"45px"} display={"flex"} justifyContent={"space-between"} >
                <Box w={"40%"}>
                    <Text fontWeight={500} fontSize={"14px"} >© Тосэй 2021. Все права защищены</Text>
                    <Text fontSize={"12px"} maxW={"325px"} mt={"10px"} >Продажа грузовой и спецтехники, легковых автомобилей, водной техники. Любая техника из Японии, США, Кореи, Китая и Сингапура. Авто с аукционов.</Text>
                    <Box mt={"20px"} display={"flex"} alignItems={"center"} gap={"10px"} >
                        <ExternalLinkIcon fontSize={"18px"} color={"#CD0000"} />
                        <Text color={'gray'} fontSize={"14px"} >Владивосток, ул. Фадеева, д. 47, строение 1</Text>
                    </Box>
                </Box>
                <Box w={"20%"}>
                    <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"10px"} >
                        <BellIcon color={"green.400"} fontSize={"20px"} />
                        <Text color={"gray"}>+7 (984) 198-11-18</Text>
                    </Box>
                    <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"10px"} >
                        <BellIcon color={"green.400"} fontSize={"20px"} />
                        <Text color={"gray"}>+7 (984) 197-77-78</Text>
                    </Box>
                </Box>
                <Box w={"20%"} display={"flex"} alignItems={"start"} gap={"10px"}>
                    <Box display={"flex"} alignItems={"center"} gap={"10px"} >
                        <EmailIcon color={"gray"} fontSize={"18px"} />
                        <a href=""><Text color={"#CD0000"} >spec@tosei.ru</Text></a>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Footer