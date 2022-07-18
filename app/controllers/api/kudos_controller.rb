class Api::KudosController < ApplicationController
    def index
        @activities = Activity.all
        @kudos = Kudo.all
        render :index
    end

    def create
        @kudo = Kudo.new(kudo_params)

        if @kudo.save
            #render json: 'success'
            render :show
        else
            render json: @kudo.errors.full_messages, status: 401
        end
    end

    def destroy
        @kudo = Kudo.find_by(id: params[:id])

        if @kudo
            @kudo.destroy!
            render json: 'Success!'
        end
    end

    private

    def kudo_params
        params.require(:kudo).permit(:user_id, :activity_id)
    end

end
