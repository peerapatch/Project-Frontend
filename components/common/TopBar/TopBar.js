import React from 'react'
import _ from 'lodash'
import OcoinShow from '../../../screens/Dashboard/components/subcomponents/ocoinShow'
import WaxCoin from '../../../screens/Dashboard/components/subcomponents/waxCoin'
import { dashboardData } from '../../../hooks/dashboard'

const TopBar = (props) => {
  const {
    dataRoi
  } = dashboardData()

  console.log(dataRoi)

  return (
    <div>
      <div>
        {
           !_.isEmpty(dataRoi) &&
             <div>
               <OcoinShow showocoin={dataRoi.ocoin} />
               <WaxCoin showowaxcoin={dataRoi.wax} />
             </div>
        }
        <img className='imgHeader borderShadow' src='/static/dist/images/12b23a7752e8a7a4464c1ff5e596237f.gif' style={{ float: 'center,margin:auto', width: '100%' }} />
      </div>

      <div className='row containerNav'>
        <nav className='menu'>
          <ul className='main-menu '>
            <li className='active'><i class='fa fa-home' />PB</li>
            {/* <li><i className='fa fa-user' />Check</li> */}
          </ul>
        </nav>

      </div>
    </div>

  )
}

export default TopBar
