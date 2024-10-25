import calender from 'assets/images/Wallet.svg'
import time from 'assets/images/time.svg'
import { ViewDetail , ReceipeDetail} from './style'
import receipe from 'assets/images/receipe.svg'
import Button from 'components/particles/primary-button'

export default function Detail() {

    const handlePrint = () =>{
        window.print()
      }

    return (
        <ViewDetail>
            <div className='title no-print'>
            <h1>Preparation Detail</h1>
            <Button title="Print" width="16rem" fill='true' backgroundcolor='#007AFF' onclick={handlePrint}/>
            </div>
            <div className='print-container print-only content'>
            <div className='view-detail-top-section'>

                <div>
                    <h2>Section : Home Chef Mark Robert </h2>
                </div>
                <div className='date-time-container'>
                    <div className='date-time'>
                        <img src={calender} alt="img" />
                        <h1>23/3/2024</h1>
                    </div>
                    <div className='date-time'>
                        <img src={time} alt="img" />
                        <h1>9:30 AM</h1>
                    </div>
                </div>
            </div>
            <ReceipeDetail>
                <div>
                <h2>Chana Palak Recipe</h2>
                <p>4 Servings | Prep Time 10 mins | Total Time: 30 minutes</p>
                <h1>Ingredients</h1>
                <ul>
                    <li>Any oil of preference</li>
                    <li>7 oz. whole cumin seeds</li>
                    <li>3.5 oz whole cloves</li>
                    <li>1 oz bay leaf</li>
                    <li>7 oz. coriander powder </li>
                    <li>7 oz turmeric powder</li>
                    <li>7 oz. garam masala</li>
                    <li>100 gm Chana Masala</li>
                    <li>2 whole garlic</li>
                    <li>1 head of ginger</li>
                    <li>7 oz turmeric powder</li>
                    <li>7 oz. garam masala</li>
                    <li>100 gm Chana Masala</li>
                    <li>2 whole garlic</li>
                    <li>1 head of ginger</li>
                </ul>
                <h1>Pre-Cooking Steps</h1>
                <ul>
                    <li>1 head of ginger</li>
                    <li>7 oz turmeric powder</li>
                    <li>7 oz. garam masala </li>
                    <li>100 gm Chana Masala</li>
                    <li>2 whole garlic</li>
                    <li>1 head of ginger</li>
                </ul>
                <h1>Pre-Cooking Steps</h1>
                <ul>
                    <li>1 head of ginger</li>
                    <li>7 oz turmeric powder</li>
                    <li>7 oz. garam masala</li>
                    <li>100 gm Chana Masala</li>
                    <li>2 whole garlic</li>
                    <li>1 head of ginger</li>
                </ul>
                </div>
                <div className='receipe-img'>
                    <img src={receipe} alt="img" />
                    <div className='receipe-img-detail'>
                        <div className='receipe-imag-detail-cart'>
                            <span style={{width:'27px' , height:'27px',display:'flex', borderRadius:'1rem', border:'1px solid #808D9E'}}></span>
                            <span>Vegitarian</span>
                        </div>
                        <div className='receipe-imag-detail-cart'>
                            <span style={{width:'27px' , height:'27px',display:'flex', borderRadius:'1rem',backgroundColor:'#EF9B0F'}}></span>
                            <span>High Protin</span>
                        </div>
                        <div className='receipe-imag-detail-cart'>
                            <span style={{width:'27px' , height:'27px',display:'flex', borderRadius:'1rem',backgroundColor:'#EF9B0F'}}></span>
                            <span>Vegan</span>
                        </div>
                        <div className='receipe-imag-detail-cart'>
                            <span style={{width:'27px' , height:'27px',display:'flex', borderRadius:'1rem',backgroundColor:'#EF9B0F'}}></span>
                            <span>Dairy Free</span>
                        </div>
                    </div>
                </div>
            </ReceipeDetail>
            </div>
        </ViewDetail>
    )
}
