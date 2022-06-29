import React from 'react';
import { Link } from 'react-router-dom';
import CurrentUser from './currentuser';
import ActivitiesContainer from '../activities/activities_container';
import ProfilePageContainer from '../profile/profile_page_container';

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
        let activitiesComponent;
        if (this.props.firstActivity && this.props.firstFollow) {
            if (this.props.location.pathname === '/dashboard') {
                activitiesComponent = <ActivitiesContainer />
            } else {
                activitiesComponent = <ProfilePageContainer />
            }
        } else {
            activitiesComponent = null;
        }
        const {currentUser} = this.props;
        return (
            <div className='dashboard-ent-container'>
                <CurrentUser currentUser={currentUser} />
                <div className='dashboard-ent-mid-container'>
                    {
                    this.props.location.pathname === '/dashboard' ? (
                        <div className='dashboard-dropdown'>
                            <div className='dashboard-following'>Following  &or;</div>
                            <div className='dashbaord-dropdown-content'>
                                <p><Link to='/dashboard/my_activities'>Activities</Link></p>
                            </div>
                        </div>
                    ) : (
                        <div className='dashboard-dropdown'>
                            <div className='dashboard-following'>Activities  &or;</div>
                            <div className='dashboard-dropdown-content'>
                                <p><Link to='/dashboard'>Following</Link></p>
                            </div>
                        </div>
                    )
                    }
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