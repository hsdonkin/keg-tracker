require 'faker'
require 'json'

keglist = {:kegs => []}




500.times do
  hash = {:name => Faker::Beer.name,
    :brand => Faker::Beer.brand,
    :price => rand(237..296),
    :abv => rand(3.2..7).round(2)
  }
  keglist[:kegs].push(hash)
end

json = keglist.to_json

File.open("kegs-sample.json", "w") do |f|
  f.write(json)
end
