class Api::PostsController < ApplicationController
    def index #get all posts when you go to a users profile, filtered by time created//have to be an array
        # @user = User.find_by(id: params[:id])

        # @posts = @user.posts

        @posts = Post.all

        render 'api/posts/index'
    end

    def show
        @post = Post.find_by(id: params[:id])
        render :show
    end

    def create
        @post = Post.new(post_params)

        if @post.save
            render :show
        else
            render json: @post.errors.full_messages
        end
    end

    def update
        @post = Post.find_by(id: params[:id])

        if @post.update(post_params)
            render :show
        else
            render json: @post.errors.full_messages
        end
    end

    def delete
        @post = Post.find_by(id: params[:id])
        @post.destroy
    end

    private

    def post_params
        params.require(:post).permit(:title, :body, :author_id)
    end

end
