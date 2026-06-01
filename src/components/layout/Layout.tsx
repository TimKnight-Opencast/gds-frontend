import React, { ReactNode } from 'react';
import Footer from '../footer/Footer';
import PhaseBanner from '../phase-banner/PhaseBanner';

type Props = {
  title: string;
  children?: ReactNode;
  autoSpaceMainContent?: boolean;
  showLoginInformation?: boolean;
  currentPage?: string;
  backURL?: string;
  showNavBar?: boolean;
};

const Layout: React.FC<Props> = ({
  title,
  children,
  showLoginInformation,
  autoSpaceMainContent = true,
  showNavBar = false,
  currentPage,
  backURL,
}) => {
  const title_suffix = 'Example GDS service - GOV.UK';
  const full_title = title + ' - ' + title_suffix;

  // Public version numbers to pass to the footer
  // - these are public variables as they are injected at build time, regardless of environment
  const tag = process.env.NEXT_PUBLIC_GIT_TAG || '0.0.0';
  const hash = process.env.NEXT_PUBLIC_GIT_HASH || '';

  return (
    <>
      <title>{full_title}</title>

      {/*{currentPage !== 'home' && (*/}
        <div
          className="phasebanner-tmp-bg"
          style={currentPage === 'home' ? { backgroundColor: '#d2e2f1' } : {}}
        >
          <div className="govuk-width-container">
            <PhaseBanner />
          </div>
        </div>
      {/*)}*/}
      <div className="govuk-width-container">
        {backURL && (
          <div className="backlink-wrapper">
            <a href={backURL} className="govuk-back-link">
              Back
            </a>
          </div>
        )}
        <main
          id="main-content"
          className={
            autoSpaceMainContent
              ? 'govuk-main-wrapper govuk-main-wrapper--auto-spacing'
              : 'govuk-main-wrapper'
          }
        >
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
