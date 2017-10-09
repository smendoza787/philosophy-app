class Api::QuotesController < ApplicationController
  def index
    @quotes = Quote.all
    render json: @quotes
  end

  def create
  end

  def show
    @quote = Quote.find(params[:id])
    if @quote
      render json: @quote
    else
      render json: {error: {message: "Something went wrong, quote not found."}}
    end
  end

  private
    def quote_params
      params.require(:quote).permit(:content, :philosopher_id)
    end
end
