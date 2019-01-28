import React from "react";
import { Provider } from "react-redux";
import { IntlProvider } from "react-intl-redux";
import { store } from "../redux/store";
import { locales } from "../locale/index";
import { addLocaleData } from "react-intl";
import { Layout } from "./Layout";
import { BrowserRouter } from "react-router-dom";

// Locales
addLocaleData(locales);

export const App = () => (
    <Provider store={ store }>
        <BrowserRouter>
            <IntlProvider>
                <Layout />
            </IntlProvider>
        </BrowserRouter>
    </Provider>
);
