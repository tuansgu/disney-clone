import styled from "styled-components";
//import Viewers from "./Viewers";
import Explore from "./Explore";
import { useState } from "react";
import {ListImage} from "./Explore"



function search(items, query) {
    query = query.toLowerCase();
    return items.filter((item) => {
        if (item.name && typeof item.name === 'string' && item.name.split) {
            if (item.name.split(" ").some((word) => word.toLowerCase().startsWith(query))) {
                return true;
            }
        }

        if (item.category && typeof item.category === 'string' && item.category.split) {
            if (item.category.split(" ").some((word) => word.toLowerCase().startsWith(query))) {
                return true;
            }
        }

        return false;
    });
}




    const Search = (props) => {
        const [query, setQuery] = useState("");

        function handleChange(e) 
        {
        setQuery(e.target.value);
        }

    const result = search(ListImage, query);

        return(
            <Container>
                <BoxSearch query={query} onChange={handleChange}>
                    <form>
                        <input value={query} placeholder="Search by title, character or genre"/>
                    </form>
                </BoxSearch>
                <InforSearch>
                    <Title>
                        <h1>Explore</h1>    
                    </Title> 
                    <Explore/>
                </InforSearch>

            </Container>
        );
        
    }



const Title = styled.h1`
    


`;



const Container = styled.main`
    position: relative;
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);
    &:after {
        background: url("/images/home-background.png") center center / cover
        no-repeat fixed;
        content: "";
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index: -1;
`;
const BoxSearch = styled.div`
    form {
        width: 120%;
        height: 120px;
        text-align: center;
        color-white;
        margin-left: -80px;
        input::placeholder {
            color: #fff; /* Thay đổi màu placeholder thành màu xám (#999) */
          }
    }

    input {
        
        width: 100%;
        padding-left: 80px;
        border: 1px solid #ccc;
        height: 100px;
        background-color: gray;
        font-size: 40px; /* Điều chỉnh cỡ chữ cho input */
        font-weight: Bold;
        color: white;
    }
    input::placeholder {
        color: #fff; /* Thay đổi màu placeholder thành màu xám (#999) */
      }

`;

const InforSearch = styled.div`

`;



export default Search