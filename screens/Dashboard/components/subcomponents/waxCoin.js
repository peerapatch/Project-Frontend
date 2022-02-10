import React from 'react'

const WaxCoin = (props) => {
  return (
    <div className='row rowWaxCoin'>
      <div className='col-12 WaxCoinCOL'>
        <div className='WaxCoinText '>
          <span className='bgWaxCoin'>
            <img src='https://s2.coinmarketcap.com/static/img/coins/64x64/2300.png' width='18' height='18' /> &nbsp;
            {props.showowaxcoin}
          </span>
        </div>
      </div>
    </div>
  )
}
export default WaxCoin
