import React from 'react';
import './Footer.scss';

// put mock sign up form in landing page
// will direct user to the home page of the app

class Footer extends React.Component {
  render() {
    return (
      <main className='footerMain'>
        <h3>Healthy habit resources:</h3>
        <div className='resources'>
          <p>
            <a
              href='https://newsinhealth.nih.gov/2018/03/creating-healthy-habits'
              target='_blank'
              rel='noopener noreferrer'
            >
              Creating Healthy Habits
            </a>
          </p>
          <p>
            <a
              href='https://www.nytimes.com/2020/02/18/well/mind/how-to-build-healthy-habits.html'
              target='_blank'
              rel='noopener noreferrer'
            >
              How to Build Healthy Habits
            </a>
          </p>
          <p>
            <a
              href='https://www.tonyrobbins.com/ask-tony/develop-healthier-habits/'
              target='_blank'
              rel='noopener noreferrer'
            >
              How Do I Develop Healthier Habits
            </a>
          </p>
          <p>
            <a
              href='https://www.livingmagazine.net/7-healthy-habits-healthy-life/'
              target='_blank'
              rel='noopener noreferrer'
            >
              7 Healthy Habits for a Healthy Life
            </a>
          </p>
        </div>
      </main>
    );
  }
}

export default Footer;
