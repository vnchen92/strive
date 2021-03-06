class Api::SessionsController < ApplicationController
    def create
        # Find user by credentials
        @user = User.find_by_credentials(
            params[:user][:email], 
            params[:user][:password]
        )
        if @user.nil?
          render json: ['Wrong credentials'], status: 401
        else
          login!(@user)
          render 'api/users/show'
        end
      end
    
      def destroy
        @user = current_user
        if @user
            logout!
            render json: {}
        else
            render json: ['You are currently not logged in.'], status: 404
        end
      end
end
