# frozen_string_literal: true

unless Rails.env.production?
  require 'rspec/core/rake_task'
  require 'cucumber/rake/task'

  namespace :ci do
    desc 'Run all tests and generate a coverage report'
    task tests: [:spec, :cucumber]
  end
end
