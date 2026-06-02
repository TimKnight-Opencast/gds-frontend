
import { StyleSheetManager } from 'styled-components';
import isValidProp from '@emotion/is-prop-valid';
import { Footer as GovUKFooter } from '@govuk-react/footer';

/**
 * Uses the Govuk-react package to create the footer
 * Unfortunately the styling is out of date v5 GDS standard so not relevant for modern GDS front ends.
 * @constructor
 */
export default function ReactFooter() {
  // https://govuk-react.github.io/govuk-react/?path=/docs/footer--docs
  return (
      // Filter out any invalid props coming through to avoid React errors - styled-components prefer transient props
      // but currently my next.js setup has a lot of props being passed around
      <StyleSheetManager shouldForwardProp={propName => isValidProp(propName)}>
          <GovUKFooter
              copyright={{
                image: {
                  height: 120,
                  src: 'static/media/govuk-crest.png',
                  width: 136
                },
                link: 'https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/',
                text: 'Crown copyright'
              }}
              meta={
                  <GovUKFooter.MetaLinks heading="Support links">
                      <GovUKFooter.Link href="/help">Help</GovUKFooter.Link>
                      <GovUKFooter.Link href="#">Cookies</GovUKFooter.Link>
                      <GovUKFooter.Link href="/contact">Contact</GovUKFooter.Link>
                      <GovUKFooter.Link href="/terms-and-conditions">Terms and conditions</GovUKFooter.Link>
                  </GovUKFooter.MetaLinks>
             }
          />
      </StyleSheetManager>
  )
}