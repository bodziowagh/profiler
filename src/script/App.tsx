import React from "react";
import { Provider } from "react-redux";
import { IntlProvider } from "react-intl-redux";
import { store } from "../redux/store";
import { locales } from "../locale/index";
import { addLocaleData } from "react-intl";
import { Layout } from "./Layout";

// Locales
addLocaleData(locales);

export const App = () => (
    <Provider store={ store }>
        <IntlProvider>
            <Layout />
        </IntlProvider>
    </Provider>
);
