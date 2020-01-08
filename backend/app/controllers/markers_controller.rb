class MarkersController < ApplicationController
  
  def index
    markers = Marker.all
    render json: markers
  end

  def create
    # binding.pry
    marker = Marker.new(name: params[:name], position: params[:position], address: params[:address], message: params[:message])
    marker.save!
    render json: marker
  end

end
