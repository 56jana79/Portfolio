import './style.scss';



var Pagecomponent =(props)=>{

    var {headerTest,icon} = props;
    return(
        <div className="wrapper">
            <h2>{headerTest}</h2>
            <span>{icon}</span>
        </div>
    )

}
export default Pagecomponent;
