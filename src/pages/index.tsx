import Layout from "@/layout/layout"
import { Box, Button, Text } from "@chakra-ui/react"
import { CalendarIcon, ChatIcon, InfoOutlineIcon, PlusSquareIcon, SettingsIcon, StarIcon, WarningTwoIcon } from "@chakra-ui/icons"
import Image from "next/image"
import mainTopImg from "@/assets/main-top.png"
import human from "@/assets/human.png"
import CatalogTexnic from "@/components/catalogTexnik/catalogTexnic"

const Home = () => {
    return (
        <Layout>
            <Box>
                <Box position={"relative"} display={"flex"} justifyContent={"center"} w={"100%"} bg={"linear-gradient(0deg, rgba(0, 0, 0, 0.37), rgba(0, 0, 0, 0.37))"}>
                    <Image alt="main-top" priority src={mainTopImg} width={1080} height={316} />
                    <Text maxW={"666px"} color={"white"} textAlign={"center"} position={"absolute"} w={"100%"} display={"flex"} justifyContent={"center"} alignItems={"center"} top={"62px"} fontSize={"42px"} fontWeight={"700"} >Доставим любую технику из Японии за 3 недели</Text>
                </Box>
                <Box>
                    <CatalogTexnic/>
                </Box>
            </Box>
            <Box my={"70px"} >
                <Text fontSize={"24px"} textAlign={"center"} fontWeight={600} >Наши преимущества</Text>
                <Box mt={"30px"} display={"flex"} justifyContent={"space-between"} alignItems={"center"} px={"45px"}>
                    <Box display={"flex"} flexDirection={"column"} gap={"8px"} >    
                        <InfoOutlineIcon fontSize={"38px"} color={"gray"} />
                        <Text maxW={"192px"} fontSize={"18px"} fontWeight={"700"} >20 лет на рынке</Text>
                        <Text maxW={"210px"} fontSize={"12px"} color={"gray"} >Мы транспортируем авто в порт Японии, грузим на судно и доставляем во Владивосток, где проходит таможенное оформление</Text>
                    </Box>
                    <Box display={"flex"} flexDirection={"column"} gap={"8px"} >
                        <InfoOutlineIcon fontSize={"38px"} color={"gray"} />
                        <Text maxW={"192px"} fontSize={"18px"} fontWeight={"700"} >Доставка по РФ</Text>
                        <Text maxW={"210px"} fontSize={"12px"} color={"gray"} >Мы транспортируем авто в порт Японии, грузим на судно и доставляем во Владивосток, где проходит таможенное оформление</Text>
                    </Box>
                    <Box display={"flex"} flexDirection={"column"} gap={"8px"} >
                        <InfoOutlineIcon fontSize={"38px"} color={"gray"} />
                        <Text maxW={"192px"} fontSize={"18px"} fontWeight={"700"} >Персональный менеджер</Text>
                        <Text maxW={"210px"} fontSize={"12px"} color={"gray"} >Мы транспортируем авто в порт Японии, грузим на судно и доставляем во Владивосток, где проходит таможенное оформление</Text>
                    </Box>
                    <Box display={"flex"} flexDirection={"column"} gap={"8px"} >
                        <InfoOutlineIcon fontSize={"38px"} color={"gray"} />
                        <Text maxW={"192px"} fontSize={"18px"} fontWeight={"700"} >Собственное представительство в Японии</Text>
                        <Text maxW={"210px"} fontSize={"12px"} color={"gray"} >Мы транспортируем авто в порт Японии, грузим на судно и доставляем во Владивосток, где проходит таможенное оформление</Text>
                    </Box>
                </Box>
            </Box>
            <Box mb={"70px"} >
                <Text fontSize={"24px"} textAlign={"center"} fontWeight={600} >Отзывы</Text>
                <Box mt={"30px"} display={"flex"} justifyContent={"space-between"} alignItems={"center"} px={"45px"}>
                    <Box display={"flex"} flexDirection={"column"} gap={"3px"} >    
                        <Box>
                            <iframe width={"90%"} height={"auto"} src="https://www.youtube.com/embed/Ss-7BY7u17I" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                        </Box>
                        <Box>
                            <StarIcon color={"#FFC85F"} fontSize={"14px"} />
                            <StarIcon color={"#FFC85F"} fontSize={"14px"} />
                            <StarIcon color={"#FFC85F"} fontSize={"14px"} />
                            <StarIcon color={"#FFC85F"} fontSize={"14px"} />
                            <StarIcon color={"#FFC85F"} fontSize={"14px"} />
                        </Box>
                        <Box>
                            <Text fontWeight={"600"} >Генадий Сергеевич</Text>
                            <Text fontSize={"14px"} color={"gray"} >Toyota Allion </Text>
                        </Box>
                    </Box>
                    <Box display={"flex"} flexDirection={"column"} gap={"3px"} >    
                        <Box>
                            <iframe width={"90%"} height={"auto"} src="https://www.youtube.com/embed/Ss-7BY7u17I" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                        </Box>
                        <Box>
                            <StarIcon color={"#FFC85F"} fontSize={"14px"} />
                            <StarIcon color={"#FFC85F"} fontSize={"14px"} />
                            <StarIcon color={"#FFC85F"} fontSize={"14px"} />
                            <StarIcon color={"#FFC85F"} fontSize={"14px"} />
                            <StarIcon color={"gray.400"} fontSize={"14px"} />
                        </Box>
                        <Box>
                            <Text fontWeight={"600"} >Генадий Сергеевич</Text>
                            <Text fontSize={"14px"} color={"gray"} >Toyota Allion </Text>
                        </Box>
                    </Box>
                    <Box display={"flex"} flexDirection={"column"} gap={"3px"} >    
                        <Box>
                            <iframe width={"90%"} height={"auto"} src="https://www.youtube.com/embed/Ss-7BY7u17I" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                        </Box>
                        <Box>
                            <StarIcon color={"#FFC85F"} fontSize={"14px"} />
                            <StarIcon color={"#FFC85F"} fontSize={"14px"} />
                            <StarIcon color={"#FFC85F"} fontSize={"14px"} />
                            <StarIcon color={"#FFC85F"} fontSize={"14px"} />
                            <StarIcon color={"#FFC85F"} fontSize={"14px"} />
                        </Box>
                        <Box>
                            <Text fontWeight={"600"} >Генадий Сергеевич</Text>
                            <Text fontSize={"14px"} color={"gray"} >Toyota Allion </Text>
                        </Box>
                    </Box>
                    <Box display={"flex"} flexDirection={"column"} gap={"3px"} >    
                        <Box>
                            <iframe width={"90%"} height={"auto"} src="https://www.youtube.com/embed/Ss-7BY7u17I" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                        </Box>
                        <Box>
                            <StarIcon color={"#FFC85F"} fontSize={"14px"} />
                            <StarIcon color={"#FFC85F"} fontSize={"14px"} />
                            <StarIcon color={"#FFC85F"} fontSize={"14px"} />
                            <StarIcon color={"#FFC85F"} fontSize={"14px"} />
                            <StarIcon color={"#FFC85F"} fontSize={"14px"} />
                        </Box>
                        <Box>
                            <Text fontWeight={"600"} >Генадий Сергеевич</Text>
                            <Text fontSize={"14px"} color={"gray"} >Toyota Allion </Text>
                        </Box>
                    </Box>
                </Box>
                <Box w={"100%"} px={"50px"}>
                    <Button w={"100%"} my={"50px"} bg={"#F4F4F4"} fontWeight={400} >Еще отзывы</Button>
                </Box>
            </Box>
            <Box my={"50px"} px={"40px"}>
                <Box display={"flex"} alignItems={"start"} >
                    <Box w={"100%"}>
                        <Image src={human} width={371} height={557} alt="human" />
                    </Box>
                    <Box w={"150%"} display={"flex"} flexDirection={"column"} >
                        <Text fontSize={"24px"} fontWeight={"700"} mb={"30px"} >Как происходит покупка</Text>
                        <Box display={"flex"} justifyContent={"start"} gap={"75px"} alignItems={"start"} >
                            <Box display={"flex"} flexDirection={"column"} gap={"55px"} >
                                <Box display={"flex"} flexDirection={"column"} gap={"8px"} >
                                    <CalendarIcon fontSize={"36px"} color={"gray"} />
                                    <Text fontWeight={"700"} maxW={"160px"} >Оставляете заявку</Text>
                                    <Text fontSize={"12px"} maxW={"160px"} color={"gray"} >Вы оставляете заявку на сайте,  либо связываетесь с нами удобным для вас способом.</Text>
                                </Box>
                                <Box display={"flex"} flexDirection={"column"} gap={"8px"} >
                                    <SettingsIcon fontSize={"36px"} color={"gray"} />
                                    <Text fontWeight={"700"} maxW={"160px"} >Доставка в РФ и оформление</Text>
                                    <Text fontSize={"12px"} maxW={"160px"} color={"gray"} >Мы транспортируем авто в порт Японии, грузим на судно и доставляем во Владивосток, где проходит таможенное оформление</Text>
                                </Box>
                            </Box>
                            <Box display={"flex"} flexDirection={"column"} gap={"55px"} >
                                <Box display={"flex"} flexDirection={"column"} gap={"8px"} >
                                    <ChatIcon fontSize={"36px"} color={"gray"} />
                                    <Text fontWeight={"700"} maxW={"160px"} >Заключаем договор</Text>
                                    <Text fontSize={"12px"} maxW={"160px"} color={"gray"} >Заключаем договор, Вы вносите гарантийный депозит.</Text>
                                </Box>
                                <Box display={"flex"} flexDirection={"column"} gap={"8px"} >
                                    <PlusSquareIcon fontSize={"36px"} color={"gray"} />
                                    <Text fontWeight={"700"} maxW={"160px"} >Оставляете заявку</Text>
                                    <Text fontSize={"12px"} maxW={"160px"} color={"gray"} >Мы доставляем авто в любой регион России выбранным Вами способом, либо Вы сами забираете его во Владивостоке.</Text>
                                </Box>
                            </Box>
                            <Box display={"flex"} flexDirection={"column"} gap={"55px"} >
                                <Box display={"flex"} flexDirection={"column"} gap={"8px"} >
                                    <WarningTwoIcon fontSize={"36px"} color={"gray"} />
                                    <Text fontWeight={"700"} maxW={"160px"} >Подбор и покупка авто</Text>
                                    <Text fontSize={"12px"} maxW={"160px"} color={"gray"} >Вам предлагаются подходящие варианты с аукционов, Вы принимаете решение, автомобиль выкупается.</Text>
                                </Box>
                                <Box display={"flex"} flexDirection={"column"} alignItems={"center"} border={"1px dashed #CD0000"} height={"190px"} rounded={"9px"} py={"25px"} gap={"8px"} >
                                    <Text fontWeight={"600"}>Оставить заявку</Text>
                                    <ChatIcon fontSize={"36px"} color={"gray"} />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Layout>
    )
}

export default Home