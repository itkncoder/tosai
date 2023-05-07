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
  return <Box background={'#F7F7F9'} w={'1080px'} h={'364px'} justifyContent={'flex-start'} display={'flex'} alignItems={'flex-start'} flexDirection={'column'}>

    <Box display="flex" alignItems={'center'}  >
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

     <Box >
      <Box display={'flex'} flexDirection={'column'}>
        <p>Тип техники</p>
        <Accordion defaultIndex={[1]} background={'#F1F1F1'}>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                Не выбрано
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            </AccordionPanel>
          </AccordionItem>

        </Accordion>
      </Box>





     </Box>


    </Box>



  </Box>
}

export default Catalog