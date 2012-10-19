require 'sinatra'

get '/' do
  haml :index
end

get '/contact' do
  haml :contact
end

get '/about' do
  haml :about
end

get '/work' do
  haml :work
end
