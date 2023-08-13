import {useContext} from "react";
import {LoadingContext} from "../hoc/LoadingProvider";

export const useLoading = () => {
    return useContext(LoadingContext);
};