import React from "react"
import {Container} from "../assets/styles/index"

type WrapperContainerProps = {
    title?: string,
    centered?: boolean,
    padding?: string,
    rounded?: boolean,
    marginTop?: string,
    marginBottom?: string
}

const WrapperContainer: React.FC<WrapperContainerProps> = ({children, title, centered, padding, rounded, marginTop, marginBottom}) => (
    <Container marginTop={marginTop} marginBottom={marginBottom} padding={padding} className={`nes-container ${title ? 'with-title' : ''} ${centered ? 'is-centered' : ''} ${rounded ? 'is-rounded' : ''}`}>
        {title && <p className="title">{title}</p>}
        {children}
    </Container>
)

export default WrapperContainer