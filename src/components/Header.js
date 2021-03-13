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
    justify-content: center;
    position: relative;
`;
const Main = styled.div`
    display: flex;
    margin-left: 16px;

`;
const UserContainer = styled.div`
    display: flex;
    align-items: center;
    padding-right: 16px;
    position: absolute;
    right: 0;
`;
const SearchContainer = styled.div`
    min-width: 400px;
    margin: 0 16px 0 16px;
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
const Name = styled.div`
    padding-right: 16px;
`;
const UserImage = styled.div`
    width: 28px;
    height: 28px;
    border: 2px solid white;
    border-radius: 3px;

    img {
        width: 100%;
    }
`;