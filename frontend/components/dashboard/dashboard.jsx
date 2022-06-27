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
            <div className='dashboard-ent-container'>
                <CurrentUser currentUser={currentUser} />
                <div className='dashboard-ent-mid-container'>
                    <h1 className='dashboard-following'>Following  &or;</h1>
                    <div className='dashboard-img-container'>
                        <img className='dashboard-mid-img' src="https://dorado.strava.com/images/Explore-FreeEligible-D9-NatureWelcomes-Z11_en-US.jpg" alt="" />
                        <div className='dashboard-icon-and-text-container'>
                            <img className='dashboard-mid-icon' src="https://dorado.strava.com/images/z1_badge_strava.png" alt="" />
                            <div className='dashboard-header-text'>
                                <h1 className='dashboard-title'>Nature Welcomes Everyone</h1>
                                <p className='dashboard-text'>Hikers, gravel enthusiasts, runners, and view-seekers - feel free to explore.</p>
                            </div>
                        </div>
                    </div>
                    { activitiesComponent }
                </div>
            </div>
        )
    }
}

export default Dashboard;