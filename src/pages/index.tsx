import Layout from "@/layout/layout"
import { Box, Text } from "@chakra-ui/react"
import Image from "next/image"
import mainTopImg from "@/assets/main-top.png"

const Home = () => {
    return (
        <Layout>
            <Box>
                <Box position={"relative"} display={"flex"} justifyContent={"center"} w={"100%"} bg={"linear-gradient(0deg, rgba(0, 0, 0, 0.37), rgba(0, 0, 0, 0.37))"}>
                    <Image alt="main-top" priority src={mainTopImg} width={1080} height={316} />
                    <Text maxW={"666px"} color={"white"} textAlign={"center"} position={"absolute"} w={"100%"} display={"flex"} justifyContent={"center"} alignItems={"center"} top={"62px"} fontSize={"42px"} fontWeight={"700"} >Доставим любую технику из Японии за 3 недели</Text>
                </Box>
            </Box>
            <Box my={"70px"} >
                <Text fontSize={"24px"} textAlign={"center"} fontWeight={600} >Наши преимущества</Text>
                <Box>

                </Box>
            </Box>
        </Layout>
    )
}

export default Home