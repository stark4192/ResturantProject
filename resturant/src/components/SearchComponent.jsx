import {React} from 'react'
import {HStack,Input,Button,useBreakpointValue} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";


const SearchComponent=()=>{  
  const isFormVisible = useBreakpointValue({ base: false, md: true });
  
  const handleSearch = (event) => {
    event.preventDefault();
    // Perform search functionality here
  };

  return (
    <>
      {isFormVisible && (
        <HStack as="form" className="example" onSubmit={handleSearch}>
          <Input
            type="text"
            placeholder="Search.."
            variant="search"
            id="searchFor"
            border="1px solid"
          />
          <Button type="submit" leftIcon={<FaSearch />} marginLeft={0} />
        </HStack>
      )}
    </>
  );
}

export default SearchComponent