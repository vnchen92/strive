class Api::CommentsController < ApplicationController
    def show
        @comment = Comment.find_by(id: params[:id])
        render :show
    end

    def create
        @comment = Comment.new(comment_params)

        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def update
        @comment = Comment.find_by(id: params[:id])

        if @comment.update(comment_params)
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def destroy
        @comment = Comment.find_by(id: params[:id])

        if @comment
            @comment.destroy!
            render json: {}
        else
            render json: ['Comment does not exist']
        end
    end

    private
    
    def comment_params
        params.require(:comment).permit(:body, :user_id, :activity_id)
    end
end
