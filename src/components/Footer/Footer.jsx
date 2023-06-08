import React from 'react'
import styled from "styled-components"
import Facebook from "../../assets/img/facebook.svg"
import IconPayment from "../../assets/img/icons_payment.svg"
import { Button } from '../Button'
import ScrollTopIcon from "../../assets/img/scroll-top-icon.svg"
const FooterWrapper =styled.div`
    overflow-x:hidden;   
    .footer-top{
        padding:220px 300px 80px 300px;
        display: flex;
        .footer-part{
        display: flex;
        flex-direction: column;
        padding:0 20px;
        h1{
            font-size:20px;

        }
        ul{
            list-style-type:none;
            padding:0;
            li{
                padding-bottom:14px;
            }

        }
        &-1{
            flex-basis:30%;
            p{
                font-family: 'Open Sans';
                font-style: normal;
                font-weight: 400;
                font-size: 18px;
                line-height: 22px;
                text-transform: capitalize;

/* Black 75 */

                color: rgba(30, 40, 50, 0.75);
            }
            &-icons{
                display: flex;

                img{
                width: 25px;
                height: 25px;
                margin-right:30px;
                }
            }
            
        }
        &-2{
            flex-basis:20%;
        }
        &-3{
            flex-basis:20%;
        }
        &-4{
            flex-basis:30%;
        }
    }
    }
   
    .footer-end{
        display: flex;
        padding:0px 300px;
        height:52px;
        align-items:center;
        justify-content:space-between;
        background-color:#1E2832;
        color:#fff;
        margin-bottom:0;
        .btn-scroll-top:hover{
            background-color:#1E2832;
        }
    }
    @media (min-width: 769px) and (max-width: 992px){
        .footer-top{
        padding:40px;
        display: flex;
    }
    .footer-end{
        padding:0 20px ;
    }
}
@media (min-width: 577px) and (max-width: 768px){
    .footer-top{
        padding:40px;
        display: flex;
        flex-direction:column;
    }
    .footer-end{
        padding:0 20px ;
       
    }
 }
 @media (max-width: 576px){
    .footer-top{
        padding:40px;
        display: flex;
        flex-direction:column;
    }
    .footer-end{
        padding:0 20px ;
       p{
        display:none;
       }
       span{
        display:none;
       }
    }
 }
`
export const Footer = () => {
    const scrollTopHandler=()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
    }
  return (
    <FooterWrapper >
        <div className='footer-top'>
        <div className="footer-part-1">
            <h1>Lisa</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua</p>
            <div className="footer-part-1-icons">
               <img src={Facebook} alt="" />
               <img src={Facebook} alt="" />
               <img src={Facebook} alt="" />
               <img src={Facebook} alt="" />
            </div>
        </div>
        <div className="footer-part footer-part-2">
            <h1>CATALOG</h1>
            <ul>
                <li>
                Necklaces
                </li>
                <li>
                Necklaces
                </li>
                <li>
                Necklaces
                </li>
                <li>
                Necklaces
                </li>
            </ul>
        </div>
        <div className="footer-part footer-part-3">
        <h1>CATALOG</h1>
            <ul>
                <li>
                Necklaces
                </li>
                <li>
                Necklaces
                </li>
                <li>
                Necklaces
                </li>
                <li>
                Necklaces
                </li>
            </ul>
        </div>
        <div className="footer-part footer-part-4">
        <h1>CATALOG</h1>
            <ul>
                <li>
                Necklaces
                </li>
                <li>
                Necklaces
                </li>
                <li>
                Necklaces
                </li>
                <li>
                Necklaces
                </li>
            </ul>
        </div>
        </div>
       
        <div className="footer-end">
            <p>© 2023 LISA , Inc.</p>
            <img src={IconPayment} alt="" />
            <Button onClick={scrollTopHandler} className="btn-scroll-top" height={30} width={200} fontsize={18} textcolor={"#fff"} bordercolor={"#1E2832"}>
                <span>Scroll to top</span>
                <img  src={ScrollTopIcon} alt="" />
            </Button>
        </div>
    </FooterWrapper>
  )
}
