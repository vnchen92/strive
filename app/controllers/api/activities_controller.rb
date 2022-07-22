class Api::ActivitiesController < ApplicationController
    def index
        @activities = Activity.all
        render :index
    end

    def show 
        @user = User.find_by(id: params[:id])

        @activity = @user.activities.order("posted_on DESC").limit(1)[0]
        render :show
    end

    def create
        @activity = Activity.new(activity_params)

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
        params.require(:activity).permit(:title, :body, :author_id, :distance, :pace, :hours, :minutes, :seconds, :time, :posted_on)
    end

end
