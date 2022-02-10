import React from 'react'

const OcoinShow = (props) => {
  return (
    <div className='row rowCoin'>
      <div className='col-12 OcoinCOL'>
        <div className='ocoinText '>
          <span className='bgocoin'>
            <img src='https://i.imgur.com/4Od7WaP.gif' width='20' height='30' />&nbsp;
            {props.showocoin}
          </span>
        </div>
      </div>

    </div>
  )
}
export default OcoinShow
