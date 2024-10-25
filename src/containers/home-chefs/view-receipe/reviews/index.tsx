import { Container, CardContainer } from './style'
import reviews from 'assets/images/RatingStar.svg'

export default function Reviews() {
    return (
        <Container>
            <h1>All reviews</h1>
            <CardContainer>
                <div className='user-profile'>
                    <div className='profile'>

                    <img src={'https://picsum.photos/300'} alt="img" height={80} width={80} style={{ borderRadius: '50%' }} />
                    <div className='user-detail'>
                        <h1>{'User Name'}</h1>
                        <p>4.0 <img src={reviews} /> <img src={reviews} /> <img src={reviews} /> <img src={reviews} /> <img src={reviews} /></p>
                    </div>
                    </div>
                    <div>
                        <p>3 day ago</p>
                    </div>
                </div>
                <div className='location'>
                    <h2>Location :</h2>
                    <p>Pakistan</p>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam inventore quisquam illum ut voluptatum tempore est neque, cupiditate saepe. Nisi ipsam, vitae maiores laudantium, corporis labore dicta nobis eveniet quos numquam neque veritatis quia ipsa. Ipsum est, quia odio quod facere soluta perferendis, mollitia molestiae iusto, ducimus sit id in!</p>
            </CardContainer>
        </Container>
    )
}
