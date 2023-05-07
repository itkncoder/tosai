import {Box} from '@chakra-ui/react'
import { ArrowBackIcon, ArrowForwardIcon, Icon } from '@chakra-ui/icons'
import { Radio, RadioGroup , Stack , Button  } from '@chakra-ui/react'
import Honda from "@/assets/Honda.png"
import Bmw from "@/assets/Bmw.png"
import Tayota from "@/assets/Tayota.png"
import Image from "next/image"


const CatalogCars = () => {
  return <Box display={'flex'} flexDirection={'column'} gap={10} p={50}>

    <Box>
        <Box fontWeight={'600'} fontSize={'24px'}>
            <h1>Популярные автомобили</h1>
        </Box>

        <RadioGroup defaultValue='1'>
            <Stack spacing={5} direction='row'>
              <Radio colorScheme='red' value='1'>
                Любые
              </Radio>
              <Radio colorScheme='red' value='2'>
                В наличии
              </Radio>

              <Radio colorScheme='red' value='3'>
              Под заказ
              </Radio>
            </Stack>
        </RadioGroup>
    </Box>

    <Box w={'997px'} h={'180px'} border={'1px'} borderColor={'#9999'} rounded={10} display={'flex'}  p={3} justifyContent={'space-between'} alignItems={'center'}>
        <Image alt="Honda Img" priority src={Honda} />

        <Box color={'black'} display={'flex'} flexDirection={'column'} gap={2}>
            <Box fontWeight={'bold'} fontSize={22}><h1>Honda Fit</h1></Box>
            <p className='gray-500'>Объем двигателя <span className='spanBlack'>1,2 л.с.</span></p>
            <p className='gray-500'>Год <span className='spanBlack'>2015 г.</span></p>
            <p className='gray-500'>Пробег <span className='spanBlack'>34 000 км</span></p>
            <p>Под полную пошлину</p>
        </Box>

        <Box>
            <p className='gray-500'>Привод <span className='spanBlack'>Задний</span></p>
            <p className='gray-500'>КПП <span className='spanBlack'>Автомат</span></p>
        </Box>

        <Box display={'flex'} flexDirection={'column'} gap={5}>
            <p className='gray-500'>Стоимость во Владивостоке</p>
            <Box fontWeight={'bold'} fontSize={20}> 
                <h1>630 000 ₽</h1>
            </Box>
            <Button colorScheme='green'>В наличии</Button>
        </Box>

    </Box>

    <Box w={'997px'} h={'180px'} border={'1px'} borderColor={'#9999'} rounded={10} display={'flex'}  p={3} justifyContent={'space-between'} alignItems={'center'}>
        <Image alt="Bmw Img" priority src={Bmw} />

        <Box color={'black'} display={'flex'} flexDirection={'column'} gap={2} >
            <Box fontWeight={'bold'} fontSize={22}><h1>BMW - X5 2005</h1></Box>
            <p className='gray-500'>Объем двигателя <span className='spanBlack'>230 л.с.</span></p>
            <p className='gray-500'>Год <span className='spanBlack'>2005 г.</span></p>
            <p className='gray-500'>Пробег <span className='spanBlack'>110 000 км</span></p>
            <p>Под полную пошлину</p>
        </Box>

        <Box>
            <p className='gray-500'>Привод <span className='spanBlack'>Полный</span></p>
            <p className='gray-500'>КПП <span className='spanBlack'>Автомат</span></p>
        </Box>

        <Box display={'flex'} flexDirection={'column'} gap={5}>
            <p className='gray-500'>Стоимость во Владивостоке</p>
            <Box fontWeight={'bold'} fontSize={20}>
                <h1>275 000 ₽</h1>
            </Box>
            <Button colorScheme='orange'>Под заказ</Button>
        </Box>

    </Box>

    <Box w={'997px'} h={'180px'} border={'1px'} borderColor={'#9999'} rounded={10} display={'flex'}  p={3} justifyContent={'space-between'} alignItems={'center'}>
        <Image alt="Honda Img" priority src={Tayota} />

        <Box color={'black'} display={'flex'} flexDirection={'column'} gap={2}>
            <Box fontWeight={'600'} fontSize={24}><h1>Toyota Prius</h1></Box>
            <p className='gray-500'>Объем двигателя <span className='spanBlack'>109 л.с.</span></p>
            <p className='gray-500'>Год <span className='spanBlack'>2009 г.</span></p>
            <p className='gray-500'>Пробег <span className='spanBlack'>57 000 км</span></p>
            <p>Под полную пошлину</p>
        </Box>

        <Box>
            <p className='gray-500'>Привод <span className='spanBlack'>Передний</span></p>
            <p className='gray-500'>КПП <span className='spanBlack'>Автомат</span></p>
        </Box>

        <Box display={'flex'} flexDirection={'column'} gap={5}>
            <p className='gray-500'>Стоимость во Владивостоке</p>
            <Box fontWeight={'bold'} fontSize={20}>
                <h1>310 000 ₽</h1>
            </Box>
            <Button colorScheme='green'>В наличии</Button>
        </Box>

    </Box>

    <Box w={'997px'} h={'180px'} border={'1px'} borderColor={'#9999'} rounded={10} display={'flex'}  p={3} justifyContent={'space-between'} alignItems={'center'}>
        <Image alt="Honda Img" priority src={Honda} />

        <Box color={'black'} display={'flex'} flexDirection={'column'} gap={2}>
            <Box fontWeight={'bold'} fontSize={22}><h1>Honda Fit</h1></Box>
            <p className='gray-500'>Объем двигателя <span className='spanBlack'>1,2 л.с.</span></p>
            <p className='gray-500'>Год <span className='spanBlack'>2015 г.</span></p>
            <p className='gray-500'>Пробег <span className='spanBlack'>34 000 км</span></p>
            <p>Под полную пошлину</p>
        </Box>

        <Box>
            <p className='gray-500'>Привод <span className='spanBlack'>Задний</span></p>
            <p className='gray-500'>КПП <span className='spanBlack'>Автомат</span></p>
        </Box>

        <Box display={'flex'} flexDirection={'column'} gap={5}>
            <p className='gray-500'>Стоимость во Владивостоке</p>
            <Box fontWeight={'bold'} fontSize={20}> 
                <h1>630 000 ₽</h1>
            </Box>
            <Button colorScheme='green'>В наличии</Button>
        </Box>

    </Box>

    <Box w={'997px'} h={'180px'} border={'1px'} borderColor={'#9999'} rounded={10} display={'flex'}  p={3} justifyContent={'space-between'} alignItems={'center'}>
        <Image alt="Bmw Img" priority src={Bmw} />

        <Box color={'black'} display={'flex'} flexDirection={'column'} gap={2} >
            <Box fontWeight={'bold'} fontSize={22}><h1>BMW - X5 2005</h1></Box>
            <p className='gray-500'>Объем двигателя <span className='spanBlack'>230 л.с.</span></p>
            <p className='gray-500'>Год <span className='spanBlack'>2005 г.</span></p>
            <p className='gray-500'>Пробег <span className='spanBlack'>110 000 км</span></p>
            <p>Под полную пошлину</p>
        </Box>

        <Box>
            <p className='gray-500'>Привод <span className='spanBlack'>Полный</span></p>
            <p className='gray-500'>КПП <span className='spanBlack'>Автомат</span></p>
        </Box>

        <Box display={'flex'} flexDirection={'column'} gap={5}>
            <p className='gray-500'>Стоимость во Владивостоке</p>
            <Box fontWeight={'bold'} fontSize={20}>
                <h1>275 000 ₽</h1>
            </Box>
            <Button colorScheme='orange'>Под заказ</Button>
        </Box>

    </Box>

    <Box w={'997px'} h={'180px'} border={'1px'} borderColor={'#9999'} rounded={10} display={'flex'}  p={3} justifyContent={'space-between'} alignItems={'center'}>
        <Image alt="Honda Img" priority src={Tayota} />

        <Box color={'black'} display={'flex'} flexDirection={'column'} gap={2}>
            <Box fontWeight={'600'} fontSize={24}><h1>Toyota Prius</h1></Box>
            <p className='gray-500'>Объем двигателя <span className='spanBlack'>109 л.с.</span></p>
            <p className='gray-500'>Год <span className='spanBlack'>2009 г.</span></p>
            <p className='gray-500'>Пробег <span className='spanBlack'>57 000 км</span></p>
            <p>Под полную пошлину</p>
        </Box>

        <Box>
            <p className='gray-500'>Привод <span className='spanBlack'>Передний</span></p>
            <p className='gray-500'>КПП <span className='spanBlack'>Автомат</span></p>
        </Box>

        <Box display={'flex'} flexDirection={'column'} gap={5}>
            <p className='gray-500'>Стоимость во Владивостоке</p>
            <Box fontWeight={'bold'} fontSize={20}>
                <h1>310 000 ₽</h1>
            </Box>
            <Button colorScheme='green'>В наличии</Button>
        </Box>

    </Box>

    <Box w={'997px'} h={'180px'} border={'1px'} borderColor={'#9999'} rounded={10} display={'flex'}  p={3} justifyContent={'space-between'} alignItems={'center'}>
        <Image alt="Honda Img" priority src={Tayota} />

        <Box color={'black'} display={'flex'} flexDirection={'column'} gap={2}>
            <Box fontWeight={'600'} fontSize={24}><h1>Toyota Prius</h1></Box>
            <p className='gray-500'>Объем двигателя <span className='spanBlack'>109 л.с.</span></p>
            <p className='gray-500'>Год <span className='spanBlack'>2009 г.</span></p>
            <p className='gray-500'>Пробег <span className='spanBlack'>57 000 км</span></p>
            <p>Под полную пошлину</p>
        </Box>

        <Box>
            <p className='gray-500'>Привод <span className='spanBlack'>Передний</span></p>
            <p className='gray-500'>КПП <span className='spanBlack'>Автомат</span></p>
        </Box>

        <Box display={'flex'} flexDirection={'column'} gap={5}>
            <p className='gray-500'>Стоимость во Владивостоке</p>
            <Box fontWeight={'bold'} fontSize={20}>
                <h1>310 000 ₽</h1>
            </Box>
            <Button colorScheme='green'>В наличии</Button>
        </Box>

    </Box>

    <Box w={'997px'} h={'180px'} border={'1px'} borderColor={'#9999'} rounded={10} display={'flex'}  p={3} justifyContent={'space-between'} alignItems={'center'}>
        <Image alt="Honda Img" priority src={Tayota} />

        <Box color={'black'} display={'flex'} flexDirection={'column'} gap={2}>
            <Box fontWeight={'600'} fontSize={24}><h1>Toyota Prius</h1></Box>
            <p className='gray-500'>Объем двигателя <span className='spanBlack'>109 л.с.</span></p>
            <p className='gray-500'>Год <span className='spanBlack'>2009 г.</span></p>
            <p className='gray-500'>Пробег <span className='spanBlack'>57 000 км</span></p>
            <p>Под полную пошлину</p>
        </Box>

        <Box>
            <p className='gray-500'>Привод <span className='spanBlack'>Передний</span></p>
            <p className='gray-500'>КПП <span className='spanBlack'>Автомат</span></p>
        </Box>

        <Box display={'flex'} flexDirection={'column'} gap={5}>
            <p className='gray-500'>Стоимость во Владивостоке</p>
            <Box fontWeight={'bold'} fontSize={20}>
                <h1>310 000 ₽</h1>
            </Box>
            <Button colorScheme='green'>В наличии</Button>
        </Box>

    </Box>

    <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
        <ArrowBackIcon fontSize={20}/>
        
        <Box display={'flex'} gap={10} alignItems={'center'}>
            <h1>1</h1>
            <h1>2</h1>
            <h1 className='bgRed'>3</h1>
            <h1>4</h1>
            <h1>5</h1>
            <h1>6</h1>
            <h1>7</h1>
            <h1>8</h1>
            <h1>9</h1>
            <h1>...</h1>
            <h1>34</h1>
        </Box>




        <ArrowForwardIcon fontSize={20} />


        
    </Box>








  </Box>
}

export default CatalogCars