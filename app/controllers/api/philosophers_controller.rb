class Api::PhilosophersController < ApplicationController
  def index
    @philosophers = Philosopher.all
    render json: @philosophers
  end

  def show
    @philosopher = Philosopher.find(params[:id])
    render json: @philosopher
  end

  def create
    @philosopher = Philosopher.new(phil_params)
    if @philosopher.save
      render json: @philosopher
    else
      render json: {error: {message: "Something went wrong."}}
    end
  end

  private
    def phil_params
      params.require(:philosopher).permit(:name, :age, :birthplace)
    end
end