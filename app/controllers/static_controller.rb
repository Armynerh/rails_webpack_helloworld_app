class StaticController < ApplicationController
  def index
    @random_greeting = Message.order('RANDOM()').first&.content
  end
end
