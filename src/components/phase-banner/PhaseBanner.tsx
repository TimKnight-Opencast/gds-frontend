import React from 'react';

const PhaseBanner: React.FC = () => {

    return (
        <div className="govuk-phase-banner govuk-width-container">
            <p className="govuk-phase-banner__content">
                <strong className="govuk-tag govuk-phase-banner__content__tag">
                    Prototype
                </strong>
                <span className="govuk-phase-banner__text">
        This isn't a real service – it is an example.
      </span>
            </p>
        </div>
    );
};

export default PhaseBanner;
