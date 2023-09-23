import styled from "styled-components";

export const LeftSideWrapper = styled('div')`
    width:50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right:1rem;
    position: relative;
    `
export const LeftSideImgWrapper = styled('div')`
    width:100%;
    max-height: 96vh;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    overflow: hidden;
    `
export const LeftSideImg = styled('img')`
    width: 100%;
    max-height:100%;
    object-fit: cover;
    overflow: hidden;
    border-radius: 8px;
    `
export const LeftSideDetails = styled('div')`
    position: absolute;
    padding:0 3rem;
    padding-top:6rem;
    padding-bottom: 8rem;
    top:0;
    left:0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    `
export const LeftSideTitleWrapper = styled('div')`
    display: flex;
    flex-direction: column;
    gap:2rem;
    color:white;
    `
export const LeftSideTitle = styled('h3')`
    font-size: 45px;
    font-weight: 500;
    color:white;
    width: 80%;
    `
export const LeftSideSubTitle = styled('span')`
color:white;
width: 60%;
font-weight:500;
    `
export const LiftSideDescription = styled('span')`
    color:white;
    width: 60%;
    font-weight:500;
    `