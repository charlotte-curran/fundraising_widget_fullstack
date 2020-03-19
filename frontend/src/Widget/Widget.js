import React, { useState } from "react";
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
  NotificationError,
  CloseNotification
} from "./Widget.styles";

const Widget = () => {
  const [isPledgeSuccess, setIsPledgeSuccess] = useState(false);
  const [isPledgeError, setIsPledgeError] = useState(false);
  const [isPledgeCompleted, setIsPledgeCompleted] = useState(false);
  const [pledgeAmount, setPledgeAmount] = useState("");

  const dollarsRaised = 900;
  const dollarGoal = 1000;
  const progress = (dollarsRaised / dollarGoal) * 100;

  const handleInputChange = e => {
    setPledgeAmount(e.target.value);
  };

  const submitHandler = e => {
    console.log(pledgeAmount);
    console.log(Number.isInteger(parseInt(pledgeAmount)));
    if (Number.isInteger(parseInt(pledgeAmount))) {
      setIsPledgeSuccess(true);
      setIsPledgeCompleted(true);
    } else {
      setIsPledgeError(true);
    }
    e.preventDefault();
  };

  return (
    <Container>
      <Tooltip>
        <FundraiseRemainingText>{progress}%</FundraiseRemainingText> of the goal
        funded
      </Tooltip>

      <BoxFrame>
        <ProgressBarContainer>
          <ProgressBar progress={progress} />
        </ProgressBarContainer>

        <BoxFrameContent>
          <Text>
            Only 3 days left to fund this project,
            <FundraiseCurrentFundingText>
              {` $${dollarsRaised} `}
            </FundraiseCurrentFundingText>
            has been raised towards the goal to raise
            <FundraiseGoalText> {` $${dollarGoal}`}</FundraiseGoalText>.
          </Text>

          <Text>
            Pledge money by entering the sum in the field below and press
            pledge, we already know your credit card details.
          </Text>

          <FundraiseForm onSubmit={submitHandler}>
            <TextField
              type="text"
              value={pledgeAmount}
              onChange={handleInputChange}
            />
            <SubmitButton type="submit" value="Pledge" />
          </FundraiseForm>

          {isPledgeSuccess ? (
            <NotificationSuccess>
              Thank you for your pledge!{" "}
              <CloseNotification href="#">Close</CloseNotification>
            </NotificationSuccess>
          ) : null}
          {isPledgeError ? (
            <NotificationError>
              Integer values only{" "}
              <CloseNotification href="#">Close</CloseNotification>
            </NotificationError>
          ) : null}
        </BoxFrameContent>
      </BoxFrame>
    </Container>
  );
};

export default Widget;
