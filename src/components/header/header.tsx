import { Box, Text } from "@chakra-ui/react"

const Header = () => {
    return (
        <Box py={"33px"} px={"42px"}>
            <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                <Text maxW={"195px"} fontSize={"14px"}>
                    Автомобили из японии с доставокй по всей России
                </Text>
                <Box display={"flex"} flexDirection={"column"} fontWeight={600} alignItems={"end"}>
                    <Text fontSize={"22px"} color={"#CD0000"} ><a href="tel: 8 800 250-78-07">8 800 250-78-07</a></Text>
                    <Text fontSize={"14px"} fontWeight={"400"} >Бесплатный звонок по всей России</Text>
                </Box>
            </Box>
        </Box>
    )
}

export default Header