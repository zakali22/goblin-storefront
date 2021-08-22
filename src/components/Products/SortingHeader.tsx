import {Wrapper, Container} from "../../assets/styles/index"
import {useAppState} from "../../utils/useAppState"

const SortingHeader = () => {
    const {state: {categories}} = useAppState()

    return (
        <Container marginBottom="20px">
            <label htmlFor="default_select">Category</label>
            <Wrapper className="nes-select">
                <select required id="default_select">
                    <option value="" disabled selected hidden>Select category</option>
                    <option value="all" >All products</option>
                    {categories.map(({name}) => <option value={name} >{name}</option>)}
                </select>
            </Wrapper>
        </Container>
    )
}

export default SortingHeader