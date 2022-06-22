class Api::FollowsController < ApplicationController
    def index
        # @followers = current_user.followers #an array of all followers
        # @users = []
        # @follows.each do |follow| #follow is one person
        #         #if follower_id == id of user
        #     @users << User.find_by(id: params[:follow.follower_id])
        # end

        # @follows = 

        @follows = Follow.all
        render :index
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
        params.require(:follow).permit(:follower_id, :following_id)
    end
end
