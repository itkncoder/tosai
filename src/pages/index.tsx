import Layout from "@/layout/layout"
import { Box, Text , Button } from "@chakra-ui/react"
import Image from "next/image"
import mainTopImg from "@/assets/main-top.png"
import { useState } from "react"
import { log } from "console"

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
            <Box position={'relative'}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.7893395634133!2d-0.1312712239939944!3d41.05173567134441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5f5b5b75eccaa1%3A0x92575803a15a15cf!2sFedeva!5e0!3m2!1sru!2s!4v1683452177279!5m2!1sru!2s" width="100%" height="450" loading="lazy"></iframe>

              <Box w={'337px'} h={'315px'} background={'white'} rounded={'20px'} justifyContent={'space-between'}position={'absolute'} top={'70px'} left={20} p={'20px'}>
                <Box fontWeight={'bold'} fontSize={'24px'}><h1>Обратная связь</h1></Box>

               <Box >
                  <form onSubmit={(e) => e.preventDefault()} >
                    <label >
                      <span>Ваше имя</span><br />
                      <input className="formNew" type="text" placeholder="Ввести" onChange={(e) => setNew(e.target.value)}  />
                    </label>
                    <br /><br />

                    <label >
                      <span>Контактный телефон</span><br />
                      <input className="formNew" type="number" placeholder="+7"  onChange={(e) => setPhone(e.target.value)}/>
                    </label><br /><br />

                    <Button color={'white'} background={'red'}>Проконсультировать бесплатно</Button>


                  </form>
               </Box>

              </Box>
            </Box>
        </Layout>
    )
}

export default Home