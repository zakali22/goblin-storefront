import React from "react"
import Header from "./Header"
import {Content} from "../assets/styles/index"

const Layout: React.FC = ({children}) => (
    <div>
        <Header />
        <Content>
            {children}
        </Content>
    </div>
)


export default Layout 