import {configureStore} from "@reduxjs/toolkit";
import tabs from "./features/tabs.js";

export const store = configureStore({
    reducer: {
        tabs
    }
});