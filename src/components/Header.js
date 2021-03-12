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

                        </Search>
                    </SearchContainer>
                <HelpOutlineIcon/>
            </Main>
            <UserContainer>

            </UserContainer>
        </Container>
    )
}



export default Header

const Container = styled.div``;
const Main = styled.div``;
const UserContainer = styled.div``;
const SearchContainer = styled.div``;
const Search = styled.div``;