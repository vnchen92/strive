import React from 'react';
import { fetchDashboardPosts } from '../selectors/fetch_dashboard_activities';

// const ActivitiesDashboard = ({filteredActivities, fetchAllActivities, fetchAllFollows}) => {
//     fetchAllActivities();
//     fetchAllFollows();
//     return (
//         <div>
//             {
//                 Object.entries(filteredActivities)[1].map(activity => {
//                     return <h1>{activity.title}</h1>
//                 })
//             }
//         </div>
//     )
// }

class ActivitiesDashboard extends React.Component{
    constructor(props){
        super(props)
    }

    // componentDidMount(){
    //     this.props.fetchAllFollows();
    //     this.props.fetchAllActivities();
    // }

    render () {
        
        const pot = Object.entries(this.props.filteredActivities).map(activity => {

            return <h1>{activity[1].title}</h1>
        })
            {/* {
                Object.entries(filteredActivities)[1].map(activity => {
                    return <h1>{activity.title}</h1>
                })
            } */}
            <div>
            {
            pot
            }
        </div>
    }
}

export default ActivitiesDashboard;