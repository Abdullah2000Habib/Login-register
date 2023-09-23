import { LeftSideDetails, LeftSideImg, LeftSideImgWrapper, LeftSideSubTitle, LeftSideTitle, LeftSideTitleWrapper, LeftSideWrapper, LiftSideDescription } from "./style";

const LeftSide = ({img}) => {
    return (
        <LeftSideWrapper img={img}>
            <LeftSideImgWrapper>
                <LeftSideImg src={img}/>
            </LeftSideImgWrapper>
            <LeftSideDetails>
                <LeftSideTitleWrapper>
                    <LeftSideTitle>We’re here to optimised Your Workflow</LeftSideTitle>
                    <LeftSideSubTitle>Your docs, projects, notes and reminders.Together. Together</LeftSideSubTitle>
                </LeftSideTitleWrapper>
                <LiftSideDescription>Finally, all your work in one place.</LiftSideDescription>
            </LeftSideDetails>
        </LeftSideWrapper>
    );
}

export default LeftSide;
