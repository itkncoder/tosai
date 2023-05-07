import { Link } from '@chakra-ui/react'
import { Flex, Spacer, Box } from '@chakra-ui/react'
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'

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

    <Box background={'white'} rounded={'10px'} className='box' w={'997px'} h={'204px'}>
      <Checkbox colorScheme='red' defaultChecked>
        Checkbox
      </Checkbox>

      
    </Box>



  </Box>
}

export default Catalog