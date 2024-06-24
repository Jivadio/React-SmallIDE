import {configureStore} from "@reduxjs/toolkit";
import tabs from "./features/tabs.js";
import preview from "./features/preview.js";

export const store = configureStore({
    reducer: {
        tabs,
        preview
    }
});