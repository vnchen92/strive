import React from 'react';
import CurrentUser from './currentuser';
import ActivitiesContainer from '../activities/activities_container';
import Map from '../activity_show/map';

class Dashboard extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchAllUsers();
        this.props.fetchAllActivities();
        this.props.fetchAllFollows();
    }

    render() {
        //debugger
        let activitiesComponent;
        if (this.props.firstActivity && this.props.firstFollow) {
            //debugger
            activitiesComponent = <ActivitiesContainer />
        } else {
            //debugger
            activitiesComponent = null;
        }
        const {currentUser} = this.props;
        return (
            <div>
                <CurrentUser currentUser={currentUser} />
                { activitiesComponent }
                {/* <Map /> */}
                {/* <img src="https://maps.googleapis.com/maps/api/staticmap?size=500x250&path=color:0xf55142FF|enc:u`{vFx}rbMrGiMrBxBnBrBzA~ANVzA~ATNnBrB~EdF~EjFbEjEHHd@cAp@kArAkCzA_Db@y@d@_ARWrAsCt@{Av@_B|FuKjD}G|A{C^b@Xg@^u@\q@tAmC|A{CvAoCCDd@}@&key=MAPS_API_KEY" alt="" /> */}
            </div>
        )
    }
}

export default Dashboard;