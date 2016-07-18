var React = require('react'),
MovieList=require('./MovieList'),

dataOne=[],
dbVal='';
var Omdbserverapp=React.createClass({

  getInitialState: function() {

    return {
      list:[],
      data1: [],
      input:'',
      maintState:'Select DataBase'
    };
  },

  handleChange: function(e) {

   this.setState({input: e.target.value});
  },

  handleState:function(e) {
    this.setState({maintState:e.target.text});
        dbVal = e.target.text;

  },
    render: function() {
    return (<div>
      <div id="form1">
      <form   className="form-inline" >

        <div className="dropdown pull-left" id="drop">
            <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" >{this.state.maintState}
              <span className="caret"></span></button>
                <ul className="dropdown-menu">
                    <li><a href="#"  onClick={this.handleState}>OMDB</a></li>
                    <li><a href="#"   onClick={this.handleState}>MONGODB</a></li>

                </ul>
        </div>
        <input id="text" type="text" className="form-control"  placeholder="Enter Movie Name"  required={true} value={this.state.input} onChange={this.handleChange}   />

        <button  id="search" type="button" className="btn btn-success" onClick={this.handleClick}>Search Movies<span className='glyphicon glyphicon-search'></span></button>

      </form>
      </div>
    <MovieList  list={this.state.list} db={this.state.maintState}/>
      </div>

    );
  },
  handleClick: function() {
    console.log("seach clicked");

    var movie=this.state.input,
    dbstate=this.state.maintState,
     url;
     console.log("dbstate     "+dbstate);
    if(dbstate=="OMDB" && movie!=null)
    {
      url="http://www.omdbapi.com/?s="+movie+"&y=&plot=short&r=json";

    }else{
      if(movie!=undefined && movie!='' && dbstate=="MONGODB")
      {
        url="/MongoosAssign/findOne/"+movie;
      }
      else{
         url="/MongoosAssign/findAll";
      }
    }



    console.log("Movie: " + this.state.input);


    //


    $.ajax({
      url:url,
      dataType:'json',
      cache:false,
      success:function(data){

        //console.log(dataOne);
        if(dbstate=="OMDB"){
          data.Search.map(function(d){
            console.log(this+"this");
          //  var arr = this.state.list;
            var arr=[];
            arr.push(d);
            this.setState({list:arr});
          }.bind(this));
        }else {

        if(data.length==undefined && dbstate=="MONGODB"){
          console.log("Inside mongo db single object");
          dataOne.push(data);
          dataOne.map(function(d){
            var arr=[];
          //  var arr = this.state.list;
            arr.push(d);
            this.setState({list:arr});
       }.bind(this));
     }else{

      data.map(function(d){

        var arr = this.state.list;
        arr.push(d);
        this.setState({list:arr});
     })
}
}
        this.setState({data1:this.state.list,input:''});

        //console.log(a.Search);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });

},


});

module.exports=Omdbserverapp;
