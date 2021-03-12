import styled from 'styled-components';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function Header() {
    return (
        <Container>
            <Main>
                <AccessTimeIcon />
                    <SearchContainer>
                        <Search>
                            <input type="text" placeholder="Search..."/>
                        </Search>
                    </SearchContainer>
                <HelpOutlineIcon/>
            </Main>
            <UserContainer>
                <Name>
                    Nicolas
                </Name>
                <UserImage>
                    <img src="https://i.imgur.com/6VBx3io.png" />
                </UserImage>
            </UserContainer>
        </Container>
    )
}



export default Header

const Container = styled.div`
    background: #350d36;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Main = styled.div`
    display: flex;

`;
const UserContainer = styled.div`
    align-items: center;
    display: flex;
`;
const SearchContainer = styled.div`
    min-width: 400px;
`;
const Search = styled.div`
    box-shadow: inset 0 0 0 1px rgb(103 74 104);
    width: 100%;
    border-radius: 6px;
    display: flex;
    align-items: center;

    input {
        background-color: transparent;
        border: none;
        padding: 4px 8px 4px 8px;
        color: white;

        :focus {
            outline: none;
        }
    }
`;
const Name = styled.div``;
const UserImage = styled.div``;