class Api::ActivitiesController < ApplicationController
    def index
        # if current_user #for profile
        #     @posts = current_user.posts
        # else #for dashboard
        #     @user = User.find_by(id: params[:id])

        #     @followings = @user.follows

        #     @posts = []
        #     @followings.each do |follow|
        #         @follwed_user = follow.
                
        #     @posts = @user.posts
        # end

        @activities = Activity.all
        render :index
    end

    def show 
        @activity = Activity.find_by(id: params[:id])
        render :show
    end

    def create
        @activity = Activity.new(post_params)

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
            render json: {}
        else
            render json: ['Activity does not exist']
        end
    end

    private

    def activity_params
        params.require(:activity).permit(:title, :body, :author_id)
    end

end
