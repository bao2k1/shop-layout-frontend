import React from 'react'
import styled from "styled-components"
import SearchIcon from "../../assets/img/search-icon.svg"
import Account1 from "../../assets/img/account1.svg"
import Account2 from "../../assets/img/account2.svg"

const HeaderWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color:red; */
    height: 60px;
    border-bottom:#E3E3E3 1px solid;
    padding-bottom:20px;
    .logo{
        font-family: 'AmstelvarAlpha';
        font-style: normal;
        font-weight: 400;
        font-size: 42px;
        line-height: 50px;
    }
    .search-icon{
        width: 25px;
        height: 25px;
        
    }
    .account{
        display: flex;
        align-items:center;
        .account-item{
            display:flex;
            align-items:center;
            padding-left:24px;
            &:hover span{
                cursor:pointer;
                color:#FF6F61;
            }
        }
        .account-item-img{
            width: 25px;
            height: 25px;
            padding-right:10px;
        }
    }
    @media (min-width: 577px) and (max-width: 768px){
        .account{
            span{
                display: none;
            }
        }
    }
`
export const Header = () => {
  return (
    <HeaderWrapper>
      <img className='search-icon' src={SearchIcon} alt="" />
      <div className="logo">Lisa Store</div>
      <div className="account">

            <div className="account-item">
                <img className="account-item-img" src={Account1} alt="" />
                <span>Account</span>
            </div>
            <div className="account-item">
                <img className="account-item-img" src={Account2} alt="" />
                <span>Shopping</span>
            </div>
      </div>
    </HeaderWrapper>
  )
}
