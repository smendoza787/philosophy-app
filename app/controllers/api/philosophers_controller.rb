class Api::PhilosophersController < ApplicationController
  def index
    @philosophers = Philosopher.all
    render json: @philosophers
  end

  def show
    @philosopher = Philosopher.find(params[:id])
    render json: @philosopher
  end
end