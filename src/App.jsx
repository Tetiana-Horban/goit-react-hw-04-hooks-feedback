import React, { useState } from 'react';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Sections from './components/Section/Section';
import Notification from './components/Notification/Notification';
import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 15px;
  background-image: url(https://media.istockphoto.com/photos/blue-spot-lights-picture-id178414064?k=20&m=178414064&s=612x612&w=0&h=15j2Xwzr92YNwryXFPC6Apz7HH5_mkv6nkLCvIA2TUw=);
  background-repeat: no-repeat;
  background-size: cover;
`;

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = value => {
    switch (value) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => good + neutral + bad;
  const countPositiveFeedbackPercentage = () =>
    Math.round((good / countTotalFeedback()) * 100) || 0;
  const total = countTotalFeedback();

  return (
    <AppContainer>
      <Sections title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys({ good, neutral, bad })}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Sections>
      <Sections title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Sections>
    </AppContainer>
  );
};
export default App;
