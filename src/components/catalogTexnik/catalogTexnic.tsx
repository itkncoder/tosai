import Layout from '@/layout/layout'
<<<<<<< HEAD
import { Link } from '@chakra-ui/react'
import { Flex, Spacer, Box } from '@chakra-ui/react'
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import { Button, ButtonGroup , Stack , Text } from '@chakra-ui/react'
=======
import { Link, Text } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Checkbox } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
>>>>>>> 82ab4e6613f0ae037a0d637a357b79b02c542529
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'

const CatalogTexnic = () => {
    return (
<<<<<<< HEAD
          <Box display={'flex'} justifyContent={'center'} alignItems={'center'} h={'60vh'} background={'#F7F7F9'}>

            <Box color={"black"}  w={'100'} h={'474px'} p={10} justifyContent={'flex-start'} gap={5} display={'flex'} alignItems={'flex-start'} flexDirection={'column'}>

                <Box display="flex" alignItems={'center'} gap={10}  >
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

                <Box fontSize={32} fontWeight={'600'}>
                <h1>Каталог техники</h1>
                </Box>
=======
          <Box w={"96%"} display={'flex'} justifyContent={'center'} alignItems={'center'}>

            <Box color={"black"} h={'474px'} p={10} justifyContent={'flex-start'} gap={5} display={'flex'} alignItems={'flex-start'} flexDirection={'column'}>
>>>>>>> 82ab4e6613f0ae037a0d637a357b79b02c542529

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
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                            Не выбрано
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </AccordionItem>

                    </Accordion>
                </Box>

                <Box display={'flex'} flexDirection={'column'}>
                    <p>Производитель</p>
                    <Accordion allowMultiple defaultIndex={[1]} background={'#F1F1F1'} rounded={'5px'}>
                    <AccordionItem border={'none'} w={'184px'}>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                            Не выбрано
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </AccordionItem>

                    </Accordion>
                </Box>

                <Box display={'flex'} flexDirection={'column'}>
                    <p>Марка</p>
                    <Accordion allowMultiple defaultIndex={[1]} background={'#F1F1F1'} rounded={'5px'}>
                    <AccordionItem border={'none'} w={'187px'}>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                            Не выбрано
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </AccordionItem>

                    </Accordion>
                </Box>

                <Box display={'flex'} flexDirection={'column'}>


                    <p>Год выпуска</p>

                    
                    <Box display={'flex'} gap={5}>
                        <Box >   
                            <Accordion allowMultiple defaultIndex={[1]} background={'#F1F1F1'} rounded={'5px'}>
                    <AccordionItem border={'none'} w={'100px'}>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                            от
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </AccordionItem>

                            </Accordion>
                        </Box>
        
                        <Box>
                        <Accordion allowMultiple defaultIndex={[]} background={'#F1F1F1'} rounded={'5px'}>
                        <AccordionItem border={'none'} w={'100px'} >
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    до
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </AccordionItem>

                        </Accordion>
                        </Box>

                        <Box>
                            <Button color={"white"} bg={"#CD0000"}>Найти</Button>
                        </Box>
                    </Box>
                </Box>
                </Box>

                    <Box display={'flex'} justifyContent={'space-between'} w={'100%'} alignItems={'center'}>  
                        <Box color={'gray.500'}>
                            <p>Автомобилей в наличии: <span className='spanRed'>256</span></p>
                        </Box>

                        <Box>
                            <Accordion defaultIndex={[1]} border={'1.5px solid #CACACA'} allowMultiple rounded={'8px'}>
                                <AccordionItem w={'230px'}>
                                      <AccordionButton>
                                        <Box as="span" flex='1' textAlign='left' color={'red'}>
                                            Расширенный поиск
                                        </Box>
                                        <AccordionIcon />
                                      </AccordionButton>
                                </AccordionItem>
                            </Accordion>
                        </Box>

                    </Box>
                </Box>


                </Box>

          </Box>
<<<<<<< HEAD

=======
>>>>>>> 82ab4e6613f0ae037a0d637a357b79b02c542529
    )
}

export default CatalogTexnic