import { Head } from "./Head.component";
import { Body } from "./Body.component";

export const Table = () => {
    return (
        <table id="example" className="table table-striped table-hover" style={{ width: "100%" }}>
            <Head 
                name={"name"}
                quantity={"quantity"}
                price={"price"}
            />
            <Body />
        </table>
    );
}
