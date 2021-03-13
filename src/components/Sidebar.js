import styled from 'styled-components';

function Sidebar() {
    return (
        <Container>
            <WorkSpaceContainer>
                <Name>
                    Nicolas
                </Name>
                <NewMessage>

                </NewMessage>
            </WorkSpaceContainer>
        </Container>
    )
}

export default Sidebar

const Container = styled.div`
    background: #3F0E40;
`

const WorkSpaceContainer = styled.div`
    color: white;
    height: 64px;
    display: flex;
    align-items: center;
    padding-left: 19px;
`
const Name = styled.div``
const NewMessage = styled.div``