import React from 'react'
import { Container, CardContainer } from './style'

export default function Nutrition() {
    return (
        <Container>
            <h1>Nutrition Per Serving</h1>
            <CardContainer>
                <div className='cart'>
                    <h2>Calories</h2>
                    <p>1192</p>
                </div>
                <div className='cart'>
                    <h2>Fat</h2>
                    <p>59.9g</p>
                </div>
                <div className='cart'>
                    <h2>Protein</h2>
                    <p>87.6g</p>
                </div>
                <div className='cart'>
                    <h2>Carbs</h2>
                    <p>94.2g</p>
                </div>

            </CardContainer>
        </Container>
    )
}
