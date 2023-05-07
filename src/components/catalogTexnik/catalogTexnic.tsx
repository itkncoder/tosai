import Layout from '@/layout/layout'
import { Link } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Checkbox } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'

const CatalogTexnic = () => {
    return (
        <Layout>
          <Box display={'flex'} justifyContent={'center'} alignItems={'center'} h={'60vh'} background={'#F7F7F9'}>

            <Box color={"black"}  w={'100'} h={'474px'} p={10} justifyContent={'flex-start'} gap={5} display={'flex'} alignItems={'flex-start'} flexDirection={'column'}>

                <Box display="flex" alignItems={'center'} gap={10}>
                    <Link href='/' color='#8B8B8B' >
                    Главная
                    </Link>

                    <ul>
                    <li></li>
                    </ul>

                    <Link href='contact' color={'#8B8B8B'}>
                    Контакты
                    </Link>




                </Box>

                <Box fontSize={32}>
                <h1>Каталог техники</h1>
                </Box>

                <Box background={'white'} display={'flex'} justifyContent={'flex-start'} flexDirection={'column'} alignItems={'flex-start'} gap={'30'} p={'10'} rounded={'10px'} boxShadow={"0px 9px 34px rgba(58, 68, 83, 0.24)"} w={'1007px'} h={'254px'}>

                <Box display={'flex'} gap={'30'} justifyContent={'flex-start'} alignItems={'flex-start'}>
                <Checkbox isInvalid>Полная пошлина</Checkbox>
                <Checkbox isInvalid>Распил или конструктор</Checkbox>
                </Box>

                <Box display={'flex'} w={"100%"} justifyContent={"space-between"} >


                <Box display={'flex'} flexDirection={'column'}>
                    <p>Тип техники</p>
                    <Accordion allowMultiple defaultIndex={[1]} background={'#F1F1F1'} rounded={'5px'}>
                    <AccordionItem border={'none'} w={'150px'}>
                        <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                            Не выбрано
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet,
                        </AccordionPanel>
                    </AccordionItem>

                    </Accordion>
                </Box>

                <Box display={'flex'} flexDirection={'column'}>
                    <p>Производитель</p>
                    <Accordion allowMultiple defaultIndex={[1]} background={'#F1F1F1'} rounded={'5px'}>
                    <AccordionItem border={'none'} w={'184px'}>
                        <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                            Не выбрано
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet,
                        </AccordionPanel>
                    </AccordionItem>

                    </Accordion>
                </Box>

                <Box display={'flex'} flexDirection={'column'}>
                    <p>Марка</p>
                    <Accordion allowMultiple defaultIndex={[1]} background={'#F1F1F1'} rounded={'5px'}>
                    <AccordionItem border={'none'} w={'187px'}>
                        <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                            Не выбрано
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet,
                        </AccordionPanel>
                    </AccordionItem>

                    </Accordion>
                </Box>

                <Box display={'flex'} flexDirection={'column'}>


                    <p>Год выпуска</p>

                    
                    <Box display={'flex'} gap={5}>
                        <Box >   
                            <Accordion allowMultiple defaultIndex={[1]} background={'#F1F1F1'} rounded={'5px'}>
                    <AccordionItem border={'none'} w={'100px'}>
                        <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                            от
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet,
                        </AccordionPanel>
                    </AccordionItem>

                            </Accordion>
                        </Box>
        
                        <Box>
                        <Accordion allowMultiple defaultIndex={[]} background={'#F1F1F1'} rounded={'5px'}>
                        <AccordionItem border={'none'} w={'100px'} >
                            <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    до
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                            Lorem ipsum dolor sit amet,
                            </AccordionPanel>
                        </AccordionItem>

                        </Accordion>
                        </Box>

                        <Box>
                            <Button colorScheme='red'>Найти</Button>
                        </Box>
                    </Box>
                </Box>
                </Box>

                    <Box display={'flex'} justifyContent={'space-between'} w={'100%'} alignItems={'center'}>  
                        <Box color={'gray.500'}>
                            <p>Автомобилей в наличии: <span className='spanRed'>256</span></p>
                        </Box>

                        <Box>
                            <Accordion defaultIndex={[1]} allowMultiple border={'1px'} rounded={'5px'}>
                                <AccordionItem border={'none'} w={'230px'}>
                                    <h2>
                                      <AccordionButton>
                                        <Box as="span" flex='1' textAlign='left' color={'red'}>
                                        Расширенный поиск
                                        </Box>
                                        <AccordionIcon />
                                      </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4} >
                                        Расширенный поиск
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        </Box>

                    </Box>
                </Box>


                </Box>

          </Box>

        </Layout>
    )
}

export default CatalogTexnic