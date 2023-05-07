import Footer from "@/components/footer/footer"
import Header from "@/components/header/header"
import Sidebar from "@/components/sidebar/sidebar"
import { Box } from "@chakra-ui/react"

const Layout = ({children}: any) => {
    return (
        <Box color={"black"} bg={"#F7F7F9"}>
            <Box maxW={"1280px"} mx={"auto"} display={"flex"}>
                <Box>
                    <Sidebar/>
                </Box>
                <Box w={"100%"} bg={"white"}>
                    <Box>
                        <Header/>
                    </Box>
                    <Box>
                        {children}
                    </Box>
                    <Box>
                        <Footer/>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Layout