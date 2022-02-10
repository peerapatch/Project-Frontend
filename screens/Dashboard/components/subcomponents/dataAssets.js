import React from 'react'

const Dataassets = (props) => {
  console.log(props.data)
  return (
    <div className='row rowFitContent'>
      {Object.keys(props.data.dataAssets).map(function (key) {
        return (
          <div>
            {!_.isEmpty(props.data.dataAssets[key].dataHat) &&

              <div className='col-6'>
                <img src={`https://resizer.atomichub.io/images/v1/preview?ipfs=${props.data.dataAssets[key].dataHat.img}&size=370`} width={75} height={100} />
              </div>}
          </div>
        )
      })}

    </div>
  )
}
export default Dataassets
