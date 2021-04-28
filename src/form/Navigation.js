import React from 'react'
import PropTypes from 'prop-types';

import { useWizard } from './Wizard';

const Navigation = ({onPreviousClick}) => {
  const {isFirstStep, isLastStep} = useWizard();

  return (
    <div style={{marginTop: `1em`}}>
      <button 
        type='button' 
        onClick={onPreviousClick}
        style={{marginRight: `1em`}}
        disabled={!!isFirstStep}
      >
        Previous
      </button>

      <button type='submit'>
        {isLastStep ? 'Send' : 'Next'}
      </button>
    </div>
  )
}  

Navigation.propTypes = {
  onPreviousClick: PropTypes.func.isRequired,
}

export default Navigation;