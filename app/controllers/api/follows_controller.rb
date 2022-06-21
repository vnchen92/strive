class Api::FollowsController < ApplicationController
    def index
        if current_user #for profile
            @follows = current_user.follows
            @users = []
            @follows.each do |follow|
                @users << follow.follower
            end
            render :index
        else #for dashboard
            @user = User.find_by(id: params[:id])

            @follows = @user.follows
            @users = []
            @follows.each do |follow|
                @users << follow.follower
            end
            render :index
        end
    end

    def create
        @follow = Follow.new(follow_params)

        if @follow.save
            render json: 'Success'
        else
            render json: @follow.errors.full_messages, status: 401
        end
    end

    def destroy
        @follow = Follow.find_by(id: params[:id])

        if @follow
            @follow.destroy!
            render json: 'Success!'
        end
    end

    private
    def follow_params
        params.require(:follow).permit(:follower_id, :follows_id)
    end
end
