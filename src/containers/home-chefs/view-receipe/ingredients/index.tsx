import { tableData } from 'utils/helpers/dummyData'
import {Container} from './style'
import NoDataFound from 'components/particles/no-data-found'
import { useSelector } from 'react-redux';

export default function Ingredients() {
  const { isLoading } = useSelector((state:any) => state.user)
  return (
    <Container>
      <h1>Ingredients list</h1>
      <div className='data-table'>
        <table>
          <tbody>
            {tableData?.length > 0 ? (
              tableData
                ?.map((item, index) => (
                  <tr key={index}>
                    <td >
                        <img src={'https://picsum.photos/300'} alt="img" width={60} height={60} style={{borderRadius:'50%'}} />
                        {item.recipeName}
                    </td>
                    <td className='weight'>{item.quentity}</td>
                  </tr>
                ))
            ) : (
              <NoDataFound isShow={!isLoading} />
            )}
          </tbody>
        </table>
      </div>
    </Container>
  )
}
