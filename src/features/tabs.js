import {css, html, js} from "../assets/index";
import {createSlice} from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        lang: 'html',
        imageUrl: html,
        buttonContent: 'index.html',
        code: `
        <div>
            <h1>Hello World</h1>
        </div>
`
    },
    {
        id: 2,
        lang: 'css',
        imageUrl: css,
        buttonContent: 'style.css',
        code: `
        h1 {
            color: red;
        }
        `
    },
    {
        id: 3,
        lang: 'javascript',
        imageUrl: js,
        buttonContent: 'script.js',
        code: `
        console.log('Hello World');
        `
    }
]

export const codeReducer = createSlice({
    name: 'code',
    initialState,
    reducers: {
        updateCode: (state, action) => {
            state.find(obj => obj.id === action.payload.id).code = action.payload.value;
        }
    }
});

export const {updateCode} = codeReducer.actions;
export default codeReducer.reducer;
