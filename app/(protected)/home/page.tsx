import React from 'react';
import Layout from '@/components/layout/Layout';

export default function Home() {
    return (
        <Layout
            title="Home"
            autoSpaceMainContent={false}
            showLoginInformation={true}
            currentPage="home"
        >
            <div className="govuk-grid-row">
                <div className="govuk-grid-column-two-thirds">
                    <h1 className="govuk-heading-xl">Homepage with some Content</h1>
                    <p className="govuk-body-l">
                        This page has some example content
                    </p>
                    <p className="govuk-body-m">
                        I'm in medium text
                    </p>
                    <h2 className="govuk-heading-m govuk-!-margin-top-9">
                        H2 Over here
                    </h2>
                </div>
            </div>
        </Layout>
    );
}