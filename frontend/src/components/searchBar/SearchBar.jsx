import React from 'react';
import './SearchBar.css'

function SearchBar (props) {
      return (
            <div className="searchBar">
                <form className="form-inline">
                    <div className= "row form-group">
                        <div className= "col">
                            <input type="text" className="form-control" id="search_field" onChange={props.handleSearch} placeholder="Search for friends..." rows="1"/>
                        </div>
                        <div className="col-sm-2">
                        </div>
                    </div>
                </form>
            </div>
      );
  }
export default SearchBar;