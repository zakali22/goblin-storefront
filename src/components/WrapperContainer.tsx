import React from "react"
import {Container} from "../assets/styles/index"

type WrapperContainerProps = {
    title: string,
    centered?: boolean
}

const WrapperContainer: React.FC<WrapperContainerProps> = ({children, title, centered}) => (
    <Container className={`nes-container ${title ? 'with-title' : ''} ${centered ? 'is-centered' : ''}`}>
        <p className="title">{title}</p>
        {children}
    </Container>
)

export default WrapperContainer