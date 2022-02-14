import React, { Component } from "react";

class SearchBox extends Component {
    state = {  } 
    render({doStorageLookup}) { 
        return (
            <div className="row">
                Search network:
                <div className="col-1">
                    Contract Address
                    </div>
                <div className="col-3">
                <input
                  type="text"
                  name="contractAddress"
                  required
                  />
                  </div>
                <div className="col-1">
                    Memory cells
                    </div>
                <div className="col-3">
                <input
                  type="text"
                  name="memoryCells"
                  required
                  />
                  </div>
                  <div>
                      <button 
                  onClick={(event) => doStorageLookup(event.target.value)} />
                  </div>
                </div>
            </div>
        );
    }
}
 
export default SearchBox;