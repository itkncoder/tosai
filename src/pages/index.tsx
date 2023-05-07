import Layout from "@/layout/layout"
import { Box, Button, Text } from "@chakra-ui/react"
import { BellIcon, CalendarIcon, ChatIcon, EmailIcon, InfoOutlineIcon, PhoneIcon, PlusSquareIcon, SettingsIcon, StarIcon, WarningTwoIcon } from "@chakra-ui/icons"
import Image from "next/image"
import mainTopImg from "@/assets/main-top.png"
import human from "@/assets/human.png"
import CatalogTexnic from "@/components/catalogTexnik/catalogTexnic"

const Home = () => {

  const [news , setNew] = useState('')
  const [phone , setPhone] = useState('')

  

  const handleSubmir = async () => {

    let mess = `<b>Habar keldi</b> \n`
    mess += `<i>News: ${news} </i>\n`
    mess += `<i?>`
     


  }
  


    return (
        <Layout>
            <Box position={"relative"}>
                <Box position={"relative"} display={"flex"} justifyContent={"center"} w={"100%"} bg={"linear-gradient(0deg, rgba(0, 0, 0, 0.37), rgba(0, 0, 0, 0.37))"}>
                    <Image alt="main-top" priority src={mainTopImg} width={1080} height={316} />
                    <Text maxW={"666px"} color={"white"} textAlign={"center"} position={"absolute"} w={"100%"} display={"flex"} justifyContent={"center"} alignItems={"center"} top={"55px"} fontSize={"42px"} fontWeight={"700"} >Доставим любую технику из Японии за 3 недели</Text>
                </Box>
                <Box position={"absolute"} left={"0"} top={"50%"} >
                    <CatalogTexnic/>
                </Box>
            </Box>
            <Box mt={"220px"} mb={"70px"} >
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
                                <Box display={"flex"} flexDirection={"column"} alignItems={"center"} border={"1px dashed #CD0000"} height={"190px"} rounded={"9px"} py={"35px"} gap={"8px"} px={"2px"} >
                                    <Text fontSize={"14px"} fontWeight={"600"}>Оставить заявку</Text>
                                    <ChatIcon fontSize={"32px"} color={"gray"} />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box my={"40px"} >
                <Text fontSize={"24px"} textAlign={"start"} px={"45px"} fontWeight={600} >Отзывы</Text>
                <Box mt={"30px"} display={"flex"} justifyContent={"space-between"} alignItems={"center"} px={"45px"}>
                    <Box display={"flex"} flexDirection={"column"} gap={"3px"} >    
                        <Box>
                            <iframe width={"90%"} height={"auto"} src="https://www.youtube.com/embed/Ss-7BY7u17I" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                        </Box>
                        <Box>
                            <Text fontWeight={"600"} >Космический Shuttle | HONDA FIT SHUTTLE 2013</Text>
                            <Text fontSize={"12px"} color={"gray"} >391 просмотр ♦ 3 недели назад</Text>
                        </Box>
                    </Box>
                    <Box display={"flex"} flexDirection={"column"} gap={"3px"} >    
                        <Box>
                            <iframe width={"90%"} height={"auto"} src="https://www.youtube.com/embed/Ss-7BY7u17I" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                        </Box>
                        <Box>
                            <Text fontWeight={"600"} >Компактный минивен I Toyota Siena 2017 г.</Text>
                            <Text fontSize={"12px"} color={"gray"} >391 просмотр ♦ 3 недели назад</Text>
                        </Box>
                    </Box>
                    <Box display={"flex"} flexDirection={"column"} gap={"3px"} >    
                        <Box>
                            <iframe width={"90%"} height={"auto"} src="https://www.youtube.com/embed/Ss-7BY7u17I" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                        </Box>
                        <Box>
                            <Text fontWeight={"600"} >Спецтехника по-крупному | KATO KB1500R</Text>
                            <Text fontSize={"12px"} color={"gray"} >391 просмотр ♦ 3 недели назад</Text>
                        </Box>
                    </Box>
                </Box>
                <Box w={"100%"} px={"50px"}>
                    <Button w={"100%"} my={"50px"} bg={"#F4F4F4"} fontWeight={400} >Смотреть все обзоры</Button>
                </Box>
            </Box>

            <Box>
                <Box py={"35px"} px={"45px"} display={"flex"} justifyContent={"space-between"} >
                    <Box w={"50%"}>
                        <Text fontWeight={500} fontSize={"24px"} >Как с нами связаться?</Text>
                        <Text color={"gray"} mt={"10px"} >Владивосток, ул. Фадеева, д. 47 строение 1</Text>
                        <Box display={"flex"} flexDirection={"column"} gap={"8px"} mt={"20px"}>
                            <Box display={"flex"} justifyContent={"start"} alignItems={"center"} gap={"8px"} >
                                <PhoneIcon fontSize={"18px"} color={"gray"} />
                                <Text><span style={{color: "red"}} >+7 (423) 208-11-18</span> - для заказа авто</Text>
                            </Box>
                            <Box display={"flex"} justifyContent={"start"} alignItems={"center"} gap={"8px"} >
                                <PhoneIcon fontSize={"18px"} color={"gray"} />
                                <Text><span style={{color:'red'}} >+7 (984) 197-77-78</span> - для заказа авто и мото техники</Text>
                            </Box>
                            <Box display={"flex"} justifyContent={"start"} alignItems={"center"} gap={"8px"} >
                                <PhoneIcon fontSize={"18px"} color={"gray"} />
                                <Text><span style={{color:"red"}}>+7 (914) 691-85-05</span> - для заказа спецтехники</Text>
                            </Box>
                        </Box>
                    </Box>
                    <Box w={"20%"} mt={"20px"}>
                        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"10px"} >
                            <BellIcon color={"green.400"} fontSize={"20px"} />
                            <Text color={"gray"}>+7 (984) 198-11-18</Text>
                        </Box>
                        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"10px"} >
                            <BellIcon color={"green.400"} fontSize={"20px"} />
                            <Text color={"gray"}>+7 (984) 197-77-78</Text>
                        </Box>
                    </Box>
                    <Box mt={"20px"} w={"20%"} display={"flex"} alignItems={"start"} gap={"10px"}>
                        <Box display={"flex"} alignItems={"center"} gap={"10px"} >
                            <EmailIcon color={"gray"} fontSize={"18px"} />
                            <a href=""><Text color={"#CD0000"} >spec@tosei.ru</Text></a>
                        </Box>
                    </Box>
                </Box>
            </Box>

        </Layout>
    )
}

export default Home