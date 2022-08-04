class Api::ActivitiesController < ApplicationController
    def index
        @activities = Activity.all
        render :index
    end

    def show 
        @user = User.find_by(id: params[:id])

        @activity = @user.activities.order("posted_on DESC").limit(1)[0]

        if @activity
            render :show
        else
            render json: {}
        end
    end

    def create
        @activity = Activity.new(activity_params)

        coord_array = []

        if @activity.points
            @activity.points["each_coord"].each do |k, v|
                coord_array << v
            end
            @activity.points["each_coord"] = coord_array
        end


        if @activity.save
            render :show
        else
            render json: @activity.errors.full_messages, status: 422
        end
    end

    def update
        @activity = Activity.find_by(id: params[:id])

        if @activity.update(activity_params)
            render :show
        else
            render json: @activity.errors.full_messages, status: 422
        end
    end

    def destroy
        @activity = Activity.find_by(id: params[:id])
        if @activity
            @activity.destroy!
            render :show
        else
            render json: ['Activity does not exist']
        end
    end

    private

    def activity_params
        params.require(:activity).permit(
            :title, 
            :body, 
            :author_id, 
            :distance, 
            :pace, 
            :hours, 
            :minutes, 
            :seconds, 
            :time, 
            :posted_on, 
            :static_map_url, 
            points: {}
        )
    end

end
