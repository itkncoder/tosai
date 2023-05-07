import CatalogTexnic from '@/components/catalogTexnik/catalogTexnic'
import Layout from '@/layout/layout'
import { Link } from '@chakra-ui/react'
import { Flex, Spacer, Box } from '@chakra-ui/react'
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import { Button, ButtonGroup , Stack } from '@chakra-ui/react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'

const Catalog = () => {
    return (
        <CatalogTexnic />
    )
}

export default Catalog