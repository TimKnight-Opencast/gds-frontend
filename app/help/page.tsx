'use client'
import React from 'react';
import Layout from '@/components/layout/Layout';

export default function Help() {
    const handleClick = () => {
        // AnalyticsService.trackHelpEmailClicked();
    };

    return (
        <Layout
            title="Help"
            autoSpaceMainContent={false}
            showLoginInformation={true}
            currentPage="help"
        >
            <div className="govuk-grid-row">
                <div className="govuk-grid-column-two-thirds">
                    <h1 className="govuk-heading-xl">Get help with this service</h1>
                    <p className="govuk-body">
                        If you have any questions or need support with using this service,
                        email us at{' '}
                        <a
                            href="mailto:"
                            className="govuk-link"
                            onClick={handleClick}
                        >
                            someemail@dhsc.gov.uk
                        </a>
                        .
                    </p>
                </div>
            </div>
        </Layout>
    );
}