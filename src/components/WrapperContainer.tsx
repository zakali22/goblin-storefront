import React from "react"
import {Container} from "../assets/styles/index"

type WrapperContainerProps = {
    title: string,
    centered?: boolean,
    padding?: string
}

const WrapperContainer: React.FC<WrapperContainerProps> = ({children, title, centered, padding}) => (
    <Container padding={padding} className={`nes-container ${title ? 'with-title' : ''} ${centered ? 'is-centered' : ''}`}>
        <p className="title">{title}</p>
        {children}
    </Container>
)

export default WrapperContainer