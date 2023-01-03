import { state } from "@angular/animations";
import { ActionReducer, createReducer, on } from "@ngrx/store";
import { increment, decrement, reset } from "./counter.actions";
import { initialState } from "./counter.state"

const _counterReducer = createReducer(initialState, on(increment,(state: typeof initialState)=>{
    return{
        ...state,
        counter: state.counter + 1,
    };
}), on(decrement,(state: typeof initialState)=>{
    return{
        ...state,
        counter: state.counter - 1,
    };
}), on(reset, (state: typeof initialState)=>{
    return{
        ...state,
        counter: 0,
    };
}),
);

export const counterReducer: ActionReducer<typeof initialState, any> = (state: typeof initialState, action: any) => {
    return _counterReducer(state,action)
};