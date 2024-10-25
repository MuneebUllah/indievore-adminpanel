import Button from 'components/particles/primary-button'
import { Container, CardContainer, CardContainerTitle , TableContainer} from './styled'
import { tableData } from 'utils/helpers/dummyData'
import NoDataFound from 'components/particles/no-data-found'
import { useSelector } from 'react-redux'

export default function PrintView() {
  const {isLoading } = useSelector((state:any) => state.user)

  const handlePrint = () =>{
    window.print()
  }

  const columns = [
    'Sr. No',
    'Product Name',
    'Product Quantity',
    'Item Price',
    'Amount',
  ]

  return (
    <Container>
      <h1 className='no-print'>Invoice</h1>
      <div className='print-container print-only content'>
        <CardContainerTitle>
          <div>  
            <h1>{('Invoice').toLocaleUpperCase()}</h1>
            <p>#258942</p>
          </div>
          <div className='no-print'>
            <Button title="Print" width="12rem" backgroundcolor='#007AFF' fill='true' onclick={handlePrint}/>
          </div>
      </CardContainerTitle>
        <CardContainer>
          <div>
            <p>{'BILL FROM:'}</p>
            <h1>{'Daily Service'}</h1>
            <p>3331 Sandy Way
              South Lake Tahoe, CA 96510 USA</p>
          </div>
          <div>
            <p>{'BILL TO:'}</p>
            <h1>{'Tom Jones'}</h1>
            <p>381 E. Evelyn Ave
              Mountain View, CA 94041 USA</p>
          </div>
          <div>
            <div >
              <p>Date: {'Mar 8,2024'}</p>
            </div>
            <div>
              <p>Time: {' 07:25 AM'}</p>
            </div>
          </div>
        </CardContainer>
        <TableContainer>
      <div className='data-table'>
        <table>
          <thead>
            <tr>
              {
                columns.map((column:string , index:number)=>{
                  return(
                    <th key={index}>{column}</th>
                  )
                })
              }
            </tr>
          </thead>
            {tableData?.length > 0 ? (
              <>
          <tbody>
             { tableData
                ?.map((item, index) => (
                  <tr key={index}>
                    <td >
                        {item.id}
                    </td>
                    <td >{item.recipeName}</td>
                    <td>{item.placedBy}</td>
                    <td>{item.price}</td>
                    <td>{item.chefname}</td>
                  </tr>

                ))}
          </tbody>
          <div className='total'>
            <div className='total-cart'>
            <h5>Total</h5>
            <h1>$ 750</h1>
            </div>
          </div>
          </>
            ) : (
              <NoDataFound isShow={!isLoading} />
            )}
        </table>
      </div>
      </TableContainer>
      </div>
    </Container>
  )
}
