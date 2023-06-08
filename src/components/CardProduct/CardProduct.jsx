import React from 'react'
import styled from "styled-components"
import { Button } from '../Button'
import TopMainIcon from "../../assets/img/topmain-icon.svg"
const CardProductWrapper = styled.div`
.img-product{
    position: relative;
    cursor: pointer;
    .tag-product-hot{
         background-color:#FF6F61; 

        }
        .tag-product-sale{
         background-color:#1E2832; 

        }
    .tag-product{
        
        color:#fff;
        /* background-color:#FF6F61; */
        position:absolute;
            top:20px;
            left:0;
         
            /* padding:10px; */
            height:24px;
            width:52px;
            p{
                margin:0;
                text-align:center;
            }
            /* display:none; */
    }
    .title-img{
            display: flex;
            justify-content:space-between;
            align-items:center;
            color:#fff;
            background-color:#1E2832;
            position:absolute;
            bottom:4px;
            left:0;
            right:0;
            padding:10px;
            height:34px;
            display:none;
        }
        &:hover .title-img{
            display:flex;
           
        }
}
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    h3{
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        /* identical to box height */

        text-transform: capitalize;
    }
    .type-cost{
        display: flex;
        justify-content:space-between;
        align-items:center;
        .type{
            font-weight:300;
            font-size: 18px;
        }
        .cost{
            font-weight:700;
            font-size: 16px;
        }
    }
    
`
export const CardProduct = ({tag,section,img,title,type,cost}) => {
  return (
    <CardProductWrapper>
        <div className="img-product ">
            <img src={img} alt="" />
            {section === "product" ? (
          <div className="title-img">
            <p>Product</p>
            <Button hovertextcolor={"#FF6F61"} hoverbg={"#1E2832"} bordercolor={"#1E2832"} fontweight={400} height={36} width={140} backgroundcolor={"#1E2832"} fontsize={16} textcolor={"#fff"}>
                <img style={{ width: '25px', height: '25px'}} src={TopMainIcon} alt="top-main-icon" className='top-main-icon' />
                <span>Shop Now</span>
            </Button>
          </div>
        ) : (
          <div className="title-img">
            <p>Manto</p>
            <p>86 Products</p>
          </div>
        )}
            {
            tag && (
                <div className={`tag-product tag-product-${tag.toLowerCase()}`}>
                <p>{tag}</p>            
                </div>
            )
            }
        
            
        </div>
        
            {title && (
                <div className="inform">
            
            <h3>{title}</h3>
            <div className="type-cost">
                <p className='type'>{type}</p>
                <div className="cost">
                    <span>${cost}</span>
                </div>
            </div>
        </div>
            )
            }
        
        
    </CardProductWrapper>
  )
}
