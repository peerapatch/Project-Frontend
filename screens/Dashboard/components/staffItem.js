import React from 'react'
import _ from 'lodash'
import LoaderPB from './subcomponents/loaderPB'
import Dataassets from './subcomponents/dataAssets'

const StaffItem = (props) => {
  let color

  console.log(props.data.dataAssets)

  return (
    <>
      <div className='row mt-3'>
        {
          !_.isEmpty(props.data.dataResult) &&

            <div className='col-12  staffItemInner colCenter mb-3'>
              <>
                {color}
                <LoaderPB name={props.data.acc} />
                <Dataassets data={props.data} />
                <div className='borderBottom'>
                  <span>RESULT</span>
                </div>
                <div className='innerCol'>
                  <span className='innertextleft'>Ocoin/Day (All)</span>
                  <span className='innertextright'>{`~${props.data.dataResult.allOcoinPerDay}`}</span>
                </div><br />
                <div className='innerCol'>
                  <span className='innertextleft'>Wax/Day (All)</span>
                  <span className='innertextright'>{`~${props.data.dataResult.allWaxPerDay}w`}</span>
                </div><br />
              </>
            </div>
        }
      </div>
      <div className='row mt-3'>

        {Object.keys(props.data.dataAssets).map(function (key) {
          if (!_.isEmpty(props.data.dataAssets[key].dataStaff)) {
            if (props.data.dataAssets[key].dataStaff.rarity === 'intern') {
              color = 'colorIntern'
            } else if (props.data.dataAssets[key].dataStaff.rarity === 'junior') {
              color = 'colorJunior'
            } else if (props.data.dataAssets[key].dataStaff.rarity === 'senior') {
              color = 'colorSenior'
            } else if (props.data.dataAssets[key].dataStaff.rarity === 'leader') {
              color = 'colorLeader'
            } else if (props.data.dataAssets[key].dataStaff.rarity === 'manager') {
              color = 'colorManager'
            }
          }
          return (
            <>
              {
                !_.isEmpty(props.data.dataAssets[key].dataStaff) &&
                  <>

                    <div className='col-6 staffItem text-center mt-2'>
                      <div className='col imgItemInner'>
                        <img src={`https://resizer.atomichub.io/images/v1/preview?ipfs=${props.data.dataAssets[key].dataStaff.img}&size=370`} width={100} height={150} />
                      </div>
                      <div className='col  staffItemInner '>
                        <div className={`borderBottom ${color} text-white`}>
                          <span>{props.data.dataAssets[key].dataStaff.name}</span>
                        </div>
                        <div className='innerCol'>
                          <span className='innertextleft'>SR (+Buff)</span>
                          <span className='innertextright'>{`${props.data.dataAssets[key].dataStaff.successRate}%`}</span>
                        </div><br />
                        <div className='innerCol'>
                          <span className='innertextleft'>ocoin/day</span>
                          <span className='innertextright'>{`~${props.data.dataAssets[key].dataStaff.ocoinperday.toFixed(2)}`}</span>
                        </div><br />
                        <div className='innerCol'>
                          <span className='innertextleft'>wax/day</span>
                          <span className='innertextright'>{`~${props.data.dataAssets[key].dataStaff.waxperday.toFixed(2)}w`}</span>
                        </div>
                      </div>
                    </div>
                  </>
              }
            </>
          )
        })}
      </div>
    </>
  )
}

export default StaffItem
