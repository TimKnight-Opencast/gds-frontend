import '../src/styles/globals.scss';
import { Viewport } from 'next';
import type { Metadata } from 'next';

import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

export const viewport: Viewport = {
    themeColor: '#1d70b8',
};

export const metadata: Metadata = {
    robots: {
        index: false,
        follow: false,
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const ONELOGIN_HOME_URL = process.env.ONELOGIN_HOME_URL || '';

    return (
        <html lang="en" className="govuk-template app-html-class">
        <head>
            <meta charSet="utf-8"/>
            <title>GOV.UK - Example GDS site</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>
            <meta name="theme-color" content="blue"/>
        </head>
        <body className="govuk-template__body app-body-class js-enabled govuk-frontend-supported">
        <Header account_url={ONELOGIN_HOME_URL}/>
        {children}
        <Footer />
        </body>
        </html>
    );
}
