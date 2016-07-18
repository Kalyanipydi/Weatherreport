var React = require('react');

var WeatherFirst=React.createClass({


  getInitialState: function() {
    //var url="http://api.openweathermap.org/data/2.5/weather/?q="+d+"&APPID=024a3fe095d531cd67343c76858be67e";
    var data1=[];
    var url="weatherAssign/findAll/";
    $.ajax({
        url:url,
        dataType: 'json',
        async:false,
        cache: false,
        success: function(data) {
      //  console.log(data[1]);
        data1=data;
      //  console.log(data1);

          //self.setState({data1: data});


        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });

    return ({


        data2:data1,
        dbdata:{}

    });
  },

  // componentDidMount: function() {
  //
  // },
  handleReport:function(d){
    var self=this;
    console.log(d);

    var url="http://api.openweathermap.org/data/2.5/weather/?q="+d.name+"&APPID=024a3fe095d531cd67343c76858be67e";
    $.ajax({
        url:url,
        dataType: 'json',
        cache: false,
        success: function(data) {
        console.log(data);
          self.setState({dbdata: data});
          console.log(self.state.dbdata);

        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
      $.ajax({
       url: "weatherAssign/Add",
       dataType: 'json',
       type: 'POST',
       data:self.state.dbdata,
       success: function(data) {
         this.setState({data: data});
       }.bind(this),
       error: function(xhr, status, err) {
         console.error(this.props.url, status, err.toString());
       }.bind(this)
     });

  },
      render:function() {
      var self=this;
    var count=0;
    //console.log(this.state.data2);
    return(<div>{

          this.state.data2.map(function(data){
          //  console.log(data);

            return(
            <div className="well row" key={count++}>
              <div className='col-lg-4' >
                  <li  className="listitems"><h2>{data.name}</h2></li>
                  <li className="listitems"><button className="btn btn-info "  onClick={(event)=>{self.handleReport(data)}}>refresh</button>                </li>
                </div>
                <div className='col-lg-8'  id="view">

                <h3>Temparature:    {data.main.temp}</h3>
                <h3>Pressure:    {data.main.pressure}</h3>
                <h3>Humidity:    {data.main.humidity}</h3>

                </div>


            </div>)
          })

    }</div>)

  }

});



module.exports=WeatherFirst;
