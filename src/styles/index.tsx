import { Fragment } from "react"
import CommonStyles from "./common";
import { VariableStyles } from "./variables";
import { TableStyles } from "./table";
import { SearchStyles } from "./search";

const GlobalStyles = () => {
    return (
        <Fragment>
            <CommonStyles />
            <VariableStyles/>
            <TableStyles/>
            <SearchStyles />
        </Fragment>
    )
}

export default GlobalStyles;