require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  erb :index, layout: :main_layout
end

get '/poster_view' do
  title = params[:title]
  search_response = HTTParty.get("http://omdbapi.com/?t=#{title}")
  puts "*****************************************"
  puts search_response
  puts "*****************************************"
  @img_src = search_response["Poster"]
  erb :poster_view, layout: :main_layout
end
