import React from "react";
import {
  Container,
  Tooltip,
  FundraiseRemainingText,
  BoxFrame,
  ProgressBarContainer,
  ProgressBar,
  Text,
  FundraiseCurrentFundingText,
  FundraiseGoalText,
  BoxFrameContent,
  FundraiseForm,
  TextField,
  SubmitButton,
  NotificationSuccess,
  CloseNotification
} from "./Widget.styles";

const Widget = () => {
  return (
    <Container>
      <Tooltip>
        <FundraiseRemainingText>0%</FundraiseRemainingText> of the goal funded
      </Tooltip>

      <BoxFrame>
        <ProgressBarContainer>
          <ProgressBar />
        </ProgressBarContainer>
        <BoxFrameContent>
          <Text>Only 3 days left to fund this project, </Text>
          <FundraiseCurrentFundingText>$0 </FundraiseCurrentFundingText>
          has been raised towards the goal to raise
          <FundraiseGoalText> $1000</FundraiseGoalText>.
          <Text>
            Pledge money by entering the sum in the field below and press
            pledge, we already know your credit card details.
          </Text>
          <FundraiseForm>
            <TextField type="text" />
            <SubmitButton type="submit" value="Pledge" />
          </FundraiseForm>
          <NotificationSuccess>
            Thank you for your pledge!{" "}
            <CloseNotification href="#">Close</CloseNotification>
          </NotificationSuccess>
        </BoxFrameContent>
      </BoxFrame>
    </Container>
  );
};

export default Widget;
