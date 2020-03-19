import styled, { css } from "styled-components";

export const Container = styled.div`
  margin: 2em auto;
  max-width: 630px;
`;

export const Tooltip = styled.div`
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.black};
  padding: 10px 0;
  border-radius: 4px;
  width: 250px;
  margin-bottom: 10px;
  text-align: center;
`;

export const Text = styled.p``;
export const FundraiseRemainingText = styled.strong``;
export const FundraiseCurrentFundingText = styled.strong``;
export const FundraiseGoalText = styled.strong``;

export const BoxFrame = styled.div`
  width: 250px;
  border: 1px solid ${({ theme }) => theme.color.lightGrey};
  text-align: left;
`;

export const BoxFrameContent = styled.div`
  margin: 10px;
`;

export const ProgressBarContainer = styled.div`
  position: relative;
  height: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.color.lightGrey};
`;

export const ProgressBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: ${({ theme, progress }) =>
    progress >= 100 ? theme.color.green : theme.color.blue};
  width: ${({ progress }) => (progress > 100 ? 100 : progress)}%;
`;

export const FundraiseForm = styled.form``;

export const TextField = styled.input`
  padding: 11px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.color.lightGrey};
`;

export const SubmitButton = styled.input`
  padding: 12px;
  background-color: ${({ theme }) => theme.color.green};
  border: 0px;
  color: ${({ theme }) => theme.color.white};
  border-radius: 5px;
`;

const Notification = css`
  border: 1px solid;
  border-radius: 5px;
  padding: 10px;
  margin: 10px 0;
`;

export const NotificationSuccess = styled.div`
  ${Notification}
  border-color:${({ theme }) => theme.color.green};
  background-color: ${({ theme }) => theme.color.lightGreen};
`;

export const NotificationError = styled.div`
  ${Notification}
  border-color:${({ theme }) => theme.color.orange};
  background-color: ${({ theme }) => theme.color.lightOrange};
`;

export const CloseNotification = styled.a`
  color: ${({ theme }) => theme.color.black};
`;
