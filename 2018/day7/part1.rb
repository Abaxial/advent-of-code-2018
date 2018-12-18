directions = IO.read('input').strip.split("\n")

tree = {}
@new_tree = {}

def find_tree_top(t)
  t.keys - t.values.flatten.uniq
end

def insert_branch(t, branch)
  if t[branch[0]]
    branch[1].each do |leaf|
      t[branch[0]][leaf] = {}
    end
  else
    @have_traversed.each do |key|
      if t[key][branch[0]]
        t[key][branch[1]].each do |leaf|
          t[branch[0]][leaf] = {}
        end
      else
        insert_branch(t, branch)
      end
    end
  end
end

directions.each do |line|
  match = /Step (\S) must be finished before step (\S)/.match(line)
  if tree[match[1]].nil?
    tree[match[1]] = []
  end
  tree[match[1]] += [match[2]]
end

top = find_tree_top(tree)[0]
@new_tree = {}

to_traverse = [tree.keys]
@have_traversed = []

place = [top]



while (true)
  place.each do |place|
    if @new_tree[place]
      if tree[place]
        tree[place].each do |key|
          @new_tree[place].merge!({key => {}})
        end

        tree.reject! {|k, v| k == place}
      else
        puts "No Match"
      end
    else
      @new_tree[place] = {}
    end
  end

  puts @new_tree
end
