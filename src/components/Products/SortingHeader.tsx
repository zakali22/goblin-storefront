import {Wrapper, Container} from "../../assets/styles/index"
import {useAppState} from "../../utils/useAppState"
import {setCategory} from "../../state/appStateActions"

const SortingHeader = () => {
    const {state: {categories}, dispatch} = useAppState()

    const selectCategory = (e: any) => {
        // dispatch(setCategory('all'))
        dispatch(setCategory(e.target.value.toLowerCase()))
    }

    return (
        <Container marginBottom="20px">
            <label htmlFor="default_select">Category</label>
            <Wrapper className="nes-select">
                <select required id="default_select" onChange={selectCategory}>
                    <option value="" disabled selected hidden>Select category</option>
                    <option value="all">All products</option>
                    {categories.map(({name}) => <option key={name} value={name}>{name}</option>)}
                </select>
            </Wrapper>
        </Container>
    )
}

export default SortingHeader