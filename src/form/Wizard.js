import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Formik} from 'formik';
import {navigate} from 'gatsby';

import Navigation from './Navigation';

export const WizardContext = React.createContext();
export const useWizard = () => React.useContext(WizardContext);

const Wizard = ({children}) => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = React.Children.toArray(children);

  const initialValues = steps.reduce(
    (acc, current) => ({...acc, ...current.props.initialValues}), 
    {}
  );

  const step = steps[activeStep];
  const totalSteps = steps.length;
  const isFirstStep = activeStep === 0;
  const isLastStep = activeStep === totalSteps - 1;

  const handleSubmit = async (values) => {
    if (isLastStep) {
      console.log(JSON.stringify(values, null, 2));
      navigate('/confirmed/');
    }

    setActiveStep(activeStep + 1);
  };

  const handleClickPrevious = () => {
    if (isFirstStep) return;
    setActiveStep(activeStep - 1);
  }

  return (
    <WizardContext.Provider value={{ activeStep, isFirstStep, isLastStep}}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            {step}

            <Navigation onPreviousClick={handleClickPrevious} />
          </form>
        )}
      </Formik>
    </WizardContext.Provider>
  );
}

Wizard.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Wizard;