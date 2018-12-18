coordinates = IO.read('input').strip.split("\n").map {|a| a.split(", ").map(&:to_i)}

puts coordinates.inspect

@left_most   = coordinates[0]
@right_most  = coordinates[0]
@top_most    = coordinates[0]
@bottom_most = coordinates[0]
@corners     = []
@inners      = []

def checkAndAssignForCorners(coord1)
  if @left_most[0] > coord1[0]
    @left_most = coord1
  end

  if @right_most[0] < coord1[0]
    @right_most = coord1
  end

  if @top_most[1] > coord1[1]
    @top_most = coord1
  end

  if @bottom_most[1] < coord1[1]
    @bottom_most = coord1
  end
end

def assignForCorners(coord1)
  if @left_most[0] >= coord1[0]
    @corners << coord1
  elsif @right_most[0] <= coord1[0]
    @corners << coord1
  elsif @top_most[1] >= coord1[1]
    @corners << coord1
  elsif @bottom_most[1] <= coord1[1]
    @corners << coord1
  else
    @inners << coord1
  end
end

coordinates.each do |coord|
  checkAndAssignForCorners(coord)
end

coordinates.each do |coord|
  assignForCorners(coord)
end

closest_hash = {}
resulting_hash = {}

for x in @left_most[0]..@right_most[0]
  for y in @top_most[1]..@bottom_most[1]
    closest_hash[[x,y]] = {}
    resulting_hash[[x,y]] = false
  end
end

for x in @left_most[0]..@right_most[0]
  for y in @top_most[1]..@bottom_most[1]
    coordinates.each do |coord|
      closest_hash[[x,y]].merge!({coord => ((coord[0] - x).abs + (coord[1] - y).abs)})
    end
  end
end


closest_hash.each do |co|
  resulting_hash[co[0]] = co[1].values.sum < 10000
end

count_hash = {}
closest_hash.each do |point|
  unless @corners.include?(point[1].keys[0])
    if count_hash[point[1].keys.flatten].nil?
      count_hash[point[1].keys.flatten] = 1
    else
      count_hash[point[1].keys.flatten] += 1
    end
  end
end

puts count_hash.inspect
puts resulting_hash.reject! {|k, v| v == false}
puts resulting_hash.count
