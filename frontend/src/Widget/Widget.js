import React, { useState, useEffect } from "react";
import { getEvent, postFunds, getPayments } from "../API/";
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
  const [eventData, setEventData] = useState(null);
  const [isGoalMet, setIsGoalMet] = useState(false);
  const [totalRaised, setTotalRaised] = useState(null);

  useEffect(() => {
    (async () => {
      const [event, payments] = await Promise.all([getEvent(), getPayments()]);
      setEventData(event.data);

      const totalRaised = payments.data.reduce((a, b) => {
        return a + b;
      }, 0);
      setTotalRaised(totalRaised);
    })();
  }, [isPledgeCompleted]);

  useEffect(() => {
    if (!totalRaised || !eventData) return;
    if (totalRaised >= eventData.goal) {
      setIsGoalMet(true);
    } else {
      setIsGoalMet(false);
    }
  }, [totalRaised, eventData]);

  const handleInputChange = e => {
    setPledgeAmount(e.target.value);
  };

  const submitHandler = e => {
    if (pledgeAmount == parseInt(pledgeAmount) && parseInt(pledgeAmount) > 0) {
      const res = postFunds(parseInt(pledgeAmount));
      if ((res.status = 200)) {
        setIsPledgeSuccess(true);
        setIsPledgeCompleted(true);
        setPledgeAmount("");
        if (isPledgeError) {
          setIsPledgeError(false);
        }
      }
    } else {
      setIsPledgeError(true);
    }
    e.preventDefault();
  };

  const loadedView = (
    <Container>
      <Tooltip>
        <FundraiseRemainingText>
          {eventData ? parseInt((totalRaised / eventData.goal) * 100) : null}%
        </FundraiseRemainingText>{" "}
        of the goal funded
      </Tooltip>

      <BoxFrame>
        <ProgressBarContainer>
          <ProgressBar
            progress={eventData ? (totalRaised / eventData.goal) * 100 : null}
          />
        </ProgressBarContainer>

        <BoxFrameContent>
          {isGoalMet ? (
            <Text>
              The goal of
              <FundraiseGoalText>
                {` $${eventData ? eventData.goal : null} `}
              </FundraiseGoalText>
              has been met! No more money can be donated!
            </Text>
          ) : (
            <>
              <Text>
                Only 3 days left to fund this project,
                <FundraiseCurrentFundingText>
                  {` $${totalRaised ? totalRaised : null} `}
                </FundraiseCurrentFundingText>
                has been raised towards the goal to raise
                <FundraiseGoalText>
                  {` $${eventData ? eventData.goal : null}`}
                </FundraiseGoalText>
                .
              </Text>
              <Text>
                Pledge money by entering the sum in the field below and press
                pledge, we already know your credit card details.
              </Text>
            </>
          )}

          {isPledgeSuccess || isGoalMet ? null : (
            <FundraiseForm onSubmit={submitHandler}>
              <TextField
                type="text"
                value={pledgeAmount}
                onChange={handleInputChange}
              />
              <SubmitButton type="submit" value="Pledge" />
            </FundraiseForm>
          )}

          {isPledgeSuccess ? (
            <NotificationSuccess>
              <div>Thank you for your pledge! </div>
              <CloseNotification
                href="#"
                onClick={() => {
                  setIsPledgeSuccess(false);
                  setIsPledgeCompleted(false);
                }}
              >
                Close
              </CloseNotification>
            </NotificationSuccess>
          ) : null}

          {isPledgeError ? (
            <NotificationError>
              <div>Integer values only </div>
              <CloseNotification
                href="#"
                onClick={() => {
                  setIsPledgeError(false);
                }}
              >
                Close
              </CloseNotification>
            </NotificationError>
          ) : null}
        </BoxFrameContent>
      </BoxFrame>
    </Container>
  );
  return !eventData ? <div>loading...</div> : loadedView;
};

export default Widget;
