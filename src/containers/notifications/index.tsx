import { Cart, Container, InnerContainer } from "./style"


 const Notification = () =>{
    return(
        <Container>
            <h1>Notifications</h1>
            <InnerContainer>
                <div className="time">
                <span>Today</span>
                </div>
                <Cart>
                    <div className="left">
                    <h1>New Home Cook Joined </h1>
                    <span>Chef Arnold  </span>
                    </div>
                    <div className="right">
                        <p>12:30 pm</p>
                    </div>
                </Cart>
                <Cart>
                    <div className="left">
                    <h1>New User Joined  </h1>
                    <span>Chef Reymond   </span>
                    </div>
                    <div className="right">
                        <p> 14:36 pm</p>
                    </div>
                </Cart>
                <Cart>
                    <div className="left">
                    <h1>Live Session Requested by Sam </h1>
                    <span>Sam Johnson</span>
                    </div>
                    <div className="right">
                        <p>2:30 am</p>
                    </div>
                </Cart>
            </InnerContainer>
            <InnerContainer>
                <div className="time">
                <span>Yesterday</span>
                </div>
                <Cart>
                    <div className="left">
                    <h1>Request Declined by Sam for Live Session </h1>
                    <span>Sam Johnson</span>
                    </div>
                    <div className="right">
                        <p>2:30 am</p>
                    </div>
                </Cart>
                <Cart>
                    <div className="left">
                    <h1>Request Declined by Sam for Live Session </h1>
                    <span>Sam Johnson </span>
                    </div>
                    <div className="right">
                        <p>2:30 am</p>
                    </div>
                </Cart>
            </InnerContainer>
        </Container>
    )
}

export default Notification