import React, { Component } from 'react';


class MinorButton extends Component {
  constructor(props){
    super(props);
    this.state ={
      keyword: '',
    }
  }
  componentWillReceiveProps(nextProps){
    console.log(nextProps);
  }
  onChange = (e) =>{
    const target = e.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    })
  }
  onSearch = () =>{
    
    this.props.onSearch(this.state.keyword);
    console.log(this.state.keyword);
  }
  onSort = (sortByName,sortByValue) => {
    this.props.onSort(sortByName,sortByValue)
  }
    render(){
      const {keyword} = this.state;
        return(
            <div>
             <button type="submit" className="btn btn-primary" onClick={this.props.toggleTask} ><span className="fas fa-plus fa-fw"></span><span>Add more task</span> </button>&nbsp;
             <button type="submit" className="btn btn-danger" onClick={this.props.generatorButton}><span className="fas fa-plus fa-fw"></span><span>Generator Data</span> </button>
             <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 mt-30">
                <div className="input-group ">
                  <input type="text" id="addInput" className="form-control" placeholder="Your input here..." name="keyword" value={keyword} onChange={this.onChange}/>
                  <div className="input-group-append">
                    <button type="submit" className="btn btn-primary" onClick={this.onSearch}><span className="fas fa-search fa-fw" ></span><span>Search</span></button>
                  </div>
                </div>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 mt-30">
                <div className="dropdown">
                  <button type="button" className="btn btn-info" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><span>Sort</span><span className="fas fa-sort fa-fw"></span></button>
                  <ul className="dropdown-menu text-center" aria-labelledby="dropdownMenu1">
                    <li>
                      <a role="button" className={(this.props.sortByName === "name" && this.props.sortByValue === 1 ? "sort_selected" : '')}   onClick={() => this.onSort("name",1)}>
                        <span className="fas fa-sort-alpha-down fa-fw "></span>A to Z
                      </a>
                    </li>
                    <li>
                      <a role="button" className={(this.props.sortByName === "name" && this.props.sortByValue === -1 ? "sort_selected" : '')}   onClick={() => this.onSort("name",-1)}>
                        <span className="fas fa-sort-alpha-up fa-fw "></span>Z to A
                      </a>
                    </li>
                    <hr/>
                    <li>
                      <a role="button" className={(this.props.sortByName === "status" && this.props.sortByValue === 1 ? "sort_selected" : '')}  onClick={() => this.onSort("status",1)}>
                        Active Mode
                      </a>
                    </li>
                    <li>
                      <a role="button" className={(this.props.sortByName === "status" && this.props.sortByValue === -1 ? "sort_selected" : '')}  onClick={() => this.onSort("status",-1)}>
                        Hide Mode
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            </div>
        )
    }
}
export default MinorButton;