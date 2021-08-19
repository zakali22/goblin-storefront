import React from "react"
import {Container} from "../assets/styles/index"

type WrapperContainerProps = {
    title?: string,
    centered?: boolean,
    padding?: string,
    rounded?: boolean
}

const WrapperContainer: React.FC<WrapperContainerProps> = ({children, title, centered, padding, rounded}) => (
    <Container padding={padding} className={`nes-container ${title ? 'with-title' : ''} ${centered ? 'is-centered' : ''} ${rounded ? 'is-rounded' : ''}`}>
        {title && <p className="title">{title}</p>}
        {children}
    </Container>
)

export default WrapperContainer