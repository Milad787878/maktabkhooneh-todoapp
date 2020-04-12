import React from "react";
import store from "./TodoStore";

class Navar extends React.Component {
    render() {
        return (
            <div className="row d-flex justify-content-center">
                <button className="btn btn-danger m-3 btn-sm" onClick={store.clearAll}>
                    Clear All
                </button>
                <div className="ml-5 mr-1 bg-dark" style={{borderRadius: '10px'}}>
                    <button className="btn btn-warning m-3 btn-sm" onClick={store.showAll}>
                        All
                    </button>
                    <button className="btn btn-success m-3 btn-sm" onClick={store.complete}>
                        Completed
                    </button>
                    <button className="btn btn-primary m-3 btn-sm" onClick={store.showLefts}
                    >left
                    </button>
                </div>
                <button className="btn btn-primary m-3 btn-sm" disabled>
                    todos lefts : {store.lefts.length}
                </button>
            </div>
        )
    }
}

export default Navar;