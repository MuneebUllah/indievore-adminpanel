import { FC } from 'react';
import { Container, TopTiles, InfoTile, TableContainer } from './style';
import { DashboardTopTilesData, tableData } from 'utils/helpers/dummyData';
import { DashboardOverviewChart } from 'components/Graph/index';
import AreaChart from 'components/Graph/area-chart';
import rating from 'assets/images/RatingStar.svg'
import NoDataFound from 'components/particles/no-data-found';
import { useSelector } from 'react-redux';


interface DashboardProps {
  // title:string
}

const Dashboard: FC<DashboardProps> = () => {
  const { isLoading } = useSelector((state:any) => state.user)

  const columns: any = [
    {
      name: 'Session id',
      class: 'th'
    },
    {
      name: 'Dish name',
      class: ''
    },
    {
      name: 'Placed on',
      class: ''
    },
    {
      name: 'Placed by',
      class: ''
    },
    {
      name: 'Cook Name',
      class: ''
    },
    {
      name: 'Amount',
      class: 'th'
    },
    {
      name: 'Section type',
      class: 'th'
    },
    {
      name: 'Rating',
      class: 'th'
    },
  ]
  return (
    <Container>
      <div className='title'>
        <h1>Dashboard</h1>
      </div>
      <TopTiles>
        {DashboardTopTilesData?.map((item, index) => (
          <InfoTile key={index} last={index === DashboardTopTilesData.length - 1}>
            <img src={item.icon} alt={item.name} />
            <div >
              <h5>{item.name}</h5>
              <h1>{item.value.toLocaleString()}</h1>
              <div className='percentage-graph'><img src={item.image} alt="img" /><span style={{color:item.color}}>{item.percentage}</span>this month </div>
            </div>
          </InfoTile>
        ))}
      </TopTiles>
      <div className='graph-container'>
        <div className='graph-left'>
          <div className='title'>
            <h1>Sales Overview</h1>
            <div className='dropdown-container'>
                {/* <div
                onClick={() => setIsStatisticsComponentVisible(!isStatisticsVisible)}
                > */}
                  {/* <p>{'This Week'}</p>
                  <img src={dropDownArrow} alt="Dropdown Arrow" /> */}
                  <select name="users" id="users">
                    <option value="This week">This week</option>
                    <option value="last 2 week">Two weeks</option>
                    <option value="This month">This month</option>
                    <option value="This year">This Year</option>
                  </select>
                {/* </div> */}
                {/* {isStatisticsVisible && (
                  <DropdownMenu ref={StatisticsRef}>
                    <div className='menu-item'
                    >
                      This Week
                    </div>
                    <div className='menu-item'
                    >
                      Last 2 Weeks
                    </div>
                    <div className='menu-item'
                    >
                      Last Month
                    </div>
                    <div className='menu-item'

                    >
                      Last Year
                    </div>
                  </DropdownMenu>
                )} */}
              </div>
          </div>
          <AreaChart />
        </div>
        <div className='graph-right'>
          <div className='graph-cart'>
            <div className='title'>
              <h1> Users Overview  </h1>
              <div className='dropdown-container'>
                {/* <div
                onClick={() => setIsStatisticsComponentVisible(!isStatisticsVisible)}
                > */}
                  {/* <p>{'This Week'}</p>
                  <img src={dropDownArrow} alt="Dropdown Arrow" /> */}
                  <select name="users" id="users">
                    <option value="This week">This week</option>
                    <option value="last 2 week">Two weeks</option>
                    <option value="This month">This month</option>
                    <option value="This year">This Year</option>
                  </select>
                {/* </div> */}
                {/* {isStatisticsVisible && (
                  <DropdownMenu ref={StatisticsRef}>
                    <div className='menu-item'
                    >
                      This Week
                    </div>
                    <div className='menu-item'
                    >
                      Last 2 Weeks
                    </div>
                    <div className='menu-item'
                    >
                      Last Month
                    </div>
                    <div className='menu-item'

                    >
                      Last Year
                    </div>
                  </DropdownMenu>
                )} */}
              </div>
            </div>
            <div className='graph'>
              <DashboardOverviewChart text={'Excellent'} percentage={40} color={'#1B473B'}/>
            </div>
          </div>
          <div className='graph-cart'>
            <div className='title'>
              <h1> Home Cook Overview  </h1>
              <div className='dropdown-container'>
                {/* <div
                onClick={() => setIsStatisticsComponentVisible(!isStatisticsVisible)}
                > */}
                  <select name="users" id="users">
                    <option value="This week">This week</option>
                    <option value="last 2 week">Two weeks</option>
                    <option value="This month">This month</option>
                    <option value="This year">This Year</option>
                  </select>
                  {/* <img src={dropDownArrow} alt="Dropdown Arrow" /> */}
                </div>
                {/* {isStatisticsVisible && (
                  <DropdownMenu ref={StatisticsRef}>
                    <div className='menu-item'
                    >
                      This Week
                    </div>
                    <div className='menu-item'
                    >
                      Last 2 Weeks
                    </div>
                    <div className='menu-item'
                    >
                      Last Month
                    </div>
                    <div className='menu-item'

                    >
                      Last Year
                    </div>
                  </DropdownMenu>
                )} */}
              {/* </div> */}
            </div>
            <div className='graph'>
              <DashboardOverviewChart text={'Excellent'} percentage={70} color='#00B087'/>
            </div>
          </div>
        </div>
      </div>
      <TableContainer>
        <h1>Best Sessions  </h1>
        <div className='data-table'>
          <table>
            <thead>
              <tr>
                {
                  columns.map((column: any, index: number) => {
                    return <th className={column.class} key={index}>{column.name}</th>
                  })
                }
              </tr>
            </thead>
            <tbody>
              {tableData?.length > 0 ? (
                tableData
                  ?.map((item, index) => (
                    <tr key={index}>
                      <td className='th'>
                        {item.id}
                      </td>
                      <td >{item.recipeName}</td>
                      <td >{item.placedOn}</td>
                      <td>{item.placedBy}</td>
                      <td>{item.chefname}</td>
                      <td className='th'>{item.price}</td>
                      <td className='th'>{item.sectionType}</td>
                      <td className='th'><img src={rating} alt="img" /> {item.rating}</td>
                    </tr>
                  ))
              ) : (
                <NoDataFound isShow={!isLoading} />
              )}
            </tbody>
          </table>
        </div>


      </TableContainer>
    </Container>
  );
};

export default Dashboard;
