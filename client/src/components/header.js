import React, {createRef} from 'react'
import { Header, Sticky  } from 'semantic-ui-react'

const HeaderApp = () => {
    const contextRef = createRef()
    return (
        <Sticky context={contextRef}>
            <Header as='h1' style={{padding: '2rem'}}>Jubelio test - surya</Header>
        </Sticky>
    )
}

export default HeaderApp
