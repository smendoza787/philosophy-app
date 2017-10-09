class Api::PhilosophersController < ApplicationController
  def index
    @philosophers = Philosopher.all
    render json: @philosophers
  end
end