import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const StyledContainer = styled(Container)`
    margin-top: 320px;
    text-align: center;
`
const StyledRow = styled(Row)`
    border-bottom: flex;
    display: flex;
    justify-content: space-evenly;
`
const CircleDiv = styled.div`
    width: 40px;
    height: 40px;
    backgroud-color: ${props => props.color || 'red'};
    border: 1px soild red; 
    border-radius: 100%
`

const stores = ['Aldi', 'Ralph\'s', 'Nobles', '7-11', 'Smith', "Winco"];

const HorizontalRow = Styles(Row)`
    flex-direction: row;
`

const storesMap = stores.app((storeName, key) => {
    return <HorizontalRow key={key}>
        <Col xs='.5'>
            <CircleDiv />
        </Col>
        <Col>
            <h5 style={{ fontWeight: 'bold' }}>
                {storeName}
            </h5>
            <p>
                Delivary and Pickup 
            </p>
        </Col>
    </HorizontalRow>

})

export default function StoreListing() {
    return <StyledContainer>
        <StyledRow>
            {storesMap}
        </StyledRow>
    </StyledContainer>
}




