import { Head } from "./Head.component";
import { Body } from "./Body.component";

export const Table = () => {

    const style = { 
        fontSize: "1rem", 
        width: "100%"
    }

    return (
        <table id="example" className="table table-striped table-hover table-sm" style={style}>
            <Head 
                name={"name"}
                quantity={"quantity"}
                price={"price"}
            />
            <Body />
        </table>
    );
}
