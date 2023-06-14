import React, { useContext, useState } from 'react';
import Footer from 'components/footer/Footer';
import Navbar from 'components/navbar/Navbar';
import Button from 'components/button/Button';
import Styles from './styles.module.css';
import {
  collapseCircle,
  addCircle,
  trakrAssetImage,
  trakrAssetMobileImage,
} from 'resources/images/Images';
import ProblemsCard from 'components/cards/problemscard/ProblemsCard';
import {
  featuresCardData,
  freqQuestionData,
  problemsCardData,
} from 'components/cards/cardsData';
import FeaturesCard from 'components/cards/featurescard/FeaturesCard';
import Modal from 'components/modal/Modal';
import { StringsContext } from 'providers/StringsCotextProvider';

const Home = () => {
  const { strings } = useContext(StringsContext);
  const { landingPageStrings } = strings;

  const [collapse, setCollapse] = useState(0);
  const [showDemoPopUp, setShowDemoPopUP] = useState(false);
  const evenFeaturesCardData = featuresCardData.filter(
    (item, index) => index % 2 === 0
  );
  const oddFeaturesCardData = featuresCardData.filter(
    (item, index) => index % 2 === 1
  );
  const showAnswer = (index) => {
    if (collapse === index) {
      setCollapse(null);
    }
    setCollapse(index);
  };

  const returnAllAssetSection = () => {
    return (
      <div className={Styles.allAssetsOuterContinerStyles}>
        <div className={Styles.allAssetsInnerContinerStyles}>
          <div className={Styles.assAssetsTopStyles}>
            <h2 className={Styles.allAssetsHeadingStyles}>
              {landingPageStrings.allAssetsHeadText}
            </h2>
            <div className={Styles.allAssetsButtonGropStyles}>
              <Button
                btnName={landingPageStrings.bookDemoButtonText}
                buttonStyles={Styles.bookDemoButtonStyles}
                onClick={() => setShowDemoPopUP(true)}
              />
              <Button
                btnName={landingPageStrings.joinButtonText}
                buttonStyles={Styles.contactButtonStyles}
                onClick={() => setShowDemoPopUP(true)}
              />
            </div>
          </div>
          <div className={Styles.allAssetImageOuterBlockStyles}>
            <div className={Styles.allAssetsImagBlockStyles}>
              <img
                src={trakrAssetImage}
                alt="all_assets_Image"
                className={Styles.allAssetsImageStyles}
              />
              <img
                src={trakrAssetMobileImage}
                alt="all_assets_Image"
                className={Styles.allAssetsMobileImageStyles}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
  const returnProblemSection = () => {
    return (
      <div className={Styles.problemsOuterContainerStyles} id="problemsSection">
        <div className={Styles.problemsInnerContainerStyles}>
          <div className={Styles.problemsLeftStyles}>
            <h3 className={Styles.problemsHeadingStyles}>
              {landingPageStrings.problemSectionHeadText}
            </h3>
            <p className={Styles.problemsDescStyles}>
              {landingPageStrings.problemLeftSectionDescText}
            </p>
            <Button
              btnName={landingPageStrings.tryTrakrNowButtonText}
              buttonStyles={Styles.tryTtrakrButtonStyles}
              onClick={() => setShowDemoPopUP(true)}
            />
          </div>
          <div className={Styles.problemsRightStyles}>
            {problemsCardData &&
              problemsCardData.map((item, index) => (
                <ProblemsCard
                  key={index}
                  icon={item.icon}
                  heading={item.heading}
                  desc={item.desc}
                />
              ))}
          </div>
          <Button
            btnName={landingPageStrings.tryTrakrNowButtonText}
            buttonStyles={Styles.tryTtrakrMobileButtonStyles}
            onClick={() => setShowDemoPopUP(true)}
          />
        </div>
      </div>
    );
  };
  const returnAdvantagesSection = () => {
    return (
      <div className={Styles.advantagesOuterContainerStyles} id="stats">
        <div className={Styles.advantagesInnerContainerStyles}>
          <div className={Styles.advatageBlockStyles}>
            <h3 className={Styles.advantageHeadingStyles}>
              {landingPageStrings.hours}
            </h3>
            <p className={Styles.advantageDescStyles}>
              {landingPageStrings.hoursDesc}
            </p>
          </div>
          <div className={Styles.advatageBlockStyles}>
            <h3 className={Styles.advantageHeadingStyles}>
              {' '}
              {landingPageStrings.tonnes}
            </h3>
            <p className={Styles.advantageDescStyles}>
              {landingPageStrings.tonnesDesc}
            </p>
          </div>
          <div className={Styles.advatageBlockStyles}>
            <h3 className={Styles.advantageHeadingStyles}>
              {' '}
              {landingPageStrings.revenue}
            </h3>
            <p className={Styles.advantageDescStyles}>
              {landingPageStrings.revenueDesc}
            </p>
          </div>
          <div className={Styles.advatageBlockStyles}>
            <h3 className={Styles.advantageHeadingStyles}>
              {' '}
              {landingPageStrings.outOf}
            </h3>
            <p className={Styles.advantageDescStyles}>
              {landingPageStrings.outOfDesc}
            </p>
          </div>
        </div>
      </div>
    );
  };
  const returnFeaturesSection = () => {
    return (
      <div className={Styles.featuresOuterContainerStyles} id='featuresSection'>
        <div className={Styles.featuresInnerContainerStyles}>
          <div className={Styles.featuresLeftContainerStyles}>
            <h3 className={Styles.featuresCardHeadingStyle}>
              Features that set trakr apart from the competition:
            </h3>
          </div>
          <div className={Styles.featuresRightContainerStyles}>
            {featuresCardData &&
              featuresCardData.map((item, index) => (
                <FeaturesCard
                  icon={item.icon}
                  fName={item.fName}
                  lName={item.lName}
                  key={index}
                />
              ))}
          </div>
          <div className={Styles.mobileFeaturesRightContainerStyles}>
            {evenFeaturesCardData &&
              evenFeaturesCardData.map((item, index) => (
                <FeaturesCard
                  icon={item.icon}
                  fName={item.fName}
                  lName={item.lName}
                  key={index}
                />
              ))}
            {oddFeaturesCardData &&
              oddFeaturesCardData.map((item, index) => (
                <FeaturesCard
                  icon={item.icon}
                  fName={item.fName}
                  lName={item.lName}
                  key={index}
                />
              ))}
          </div>
        </div>
      </div>
    );
  };
  const returnFrequentlyQuestionSection = () => {
    return (
      <div className={Styles.freqQuestionOuterContainerStyles} id="faqSection">
        <div className={Styles.freqQuestionInnerContainerStyles}>
          <div className={Styles.freqQuestionTopStyles}>
            <h3 className={Styles.freqQuestionHeadingStyles}>
              Frequently asked questions
            </h3>
          </div>
          <div className={Styles.freqQuestionBottomStyles}>
            <div className={Styles.freqQuetionBottomInnerStyles}>
              {freqQuestionData.map((item, index) => (
                <div className={Styles.questionAnswerBlockStyles} key={index}>
                  <div
                    className={Styles.questionBlockStyles}
                    onClick={() => {
                      showAnswer(index);
                    }}
                  >
                    <div className={Styles.freqQuestionIconBlockStyles}>
                      <img
                        src={collapse === index ? collapseCircle : addCircle}
                        alt="icon"
                        className={Styles.freqQuestionIconStyles}
                      />
                    </div>
                    <p className={Styles.questionStyles}> {item.question}</p>
                  </div>
                  <div
                    className={
                      collapse === index
                        ? Styles.answerBlockStyles
                        : Styles.answerBlockCollapseStyles
                    }
                  >
                    <p className={Styles.answerStyles}>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Navbar />
      <div className={Styles.landingPageContainerStyles}>
        {returnAllAssetSection()}
        {returnProblemSection()}
        {returnAdvantagesSection()}
        {returnFeaturesSection()}
        {returnFrequentlyQuestionSection()}
      </div>
        {showDemoPopUp && <Modal closePopUp={setShowDemoPopUP} />}
      <Footer />
    </div>
  );
};

export default Home;
