import Layout from '@/layout/layout'
import { Link } from '@chakra-ui/react'
import { Flex, Spacer, Box } from '@chakra-ui/react'
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'

const Catalog = () => {
    return (
        <Layout>
          <Box display={'flex'} justifyContent={'center'} alignItems={'center'} h={'100vh'}>

            <Box color={"black"} background={'#F7F7F9'} w={'100'} h={'364px'} p={10} justifyContent={'flex-start'} display={'flex'} alignItems={'flex-start'} flexDirection={'column'}>

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

                <Box>
                <h1>Каталог техники</h1>
                </Box>

                <Box background={'white'} display={'flex'} justifyContent={'flex-start'} flexDirection={'column'} alignItems={'flex-start'} gap={'30'} p={'4'} rounded={'10px'} boxShadow={"0px 9px 34px rgba(58, 68, 83, 0.24)"} w={'997px'} h={'204px'}>

                <Box display={'flex'} gap={'30'} justifyContent={'flex-start'} alignItems={'flex-start'}>
                <Checkbox isInvalid>Полная пошлина</Checkbox>
                <Checkbox isInvalid>Распил или конструктор</Checkbox>
                </Box>

                <Box display={'flex'}>


                <Box display={'flex'} flexDirection={'column'}>
                    <p>Тип техники</p>
                    <Accordion allowMultiple defaultIndex={[1]} background={'#F1F1F1'}>
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
                    <Accordion allowMultiple defaultIndex={[1]} background={'#F1F1F1'}>
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
                    <Accordion allowMultiple defaultIndex={[1]} background={'#F1F1F1'}>
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
                   <Box>
                    <p>Год выпуска</p>
                   </Box>

                   <Box display={'flex'} justifyContent={'space-between'} w={100}>

                    <Accordion allowMultiple defaultIndex={[1]} background={'#F1F1F1'}>
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

                    <Accordion allowMultiple defaultIndex={[1]} background={'#F1F1F1'}>
                    <AccordionItem border={'none'} w={'100px'}>
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
                </Box>





                </Box>


                </Box>



                </Box>

          </Box>

        </Layout>
    )
}

export default Catalog