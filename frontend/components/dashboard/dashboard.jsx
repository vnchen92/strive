import React from 'react';
import CurrentUser from './currentuser';
import ActivitiesContainer from '../activities/activities_container';

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
            </div>
        )
    }
}

export default Dashboard;