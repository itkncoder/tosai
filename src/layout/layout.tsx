import Header from "@/components/header/header"
import Sidebar from "@/components/sidebar/sidebar"
import { Box } from "@chakra-ui/react"

const Layout = ({children}: any) => {
    return (
        <Box color={"black"} bg={"white"}>
            <Box display={"flex"}>
                <Box>
                    <Sidebar/>
                </Box>
                <Box w={"100%"}>
                    <Box>
                        <Header/>
                    </Box>
                    <Box>
                        {children}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Layout