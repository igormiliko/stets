import sys

def up_version(x, old):
    buff = []
    conector= '.'
    for c in old.split('.'):
        buff.append(int(c))    

    buff[x] = buff[x] + 1
    
    for ix, blah in enumerate(buff):
        buff[ix] = str(blah)
    
    return conector.join(buff) 

version_mode = sys.argv[1]
new_version = ''
full_text = ''
temp = []

with open("package.json", 'r') as package:
    full_text = package.read()

with open("package.json", 'r') as package:
    text = package.readlines()
    lines = []
    old_version = ""
    new_version = ""

    for line in text:
        formatted_line = line.replace(" ","").replace(",", "").replace("{", "").replace("}", "").replace("\"", "").replace('\n', '').rsplit(':')
        lines.append(formatted_line)
    for line in lines:
        if(line[0] == "version"):
            old_version = line[1]
   
    for lines in text:
        formatted_line = lines.replace(" ","").replace(",", "").replace("{", "").replace("}", "").replace("\"", "").replace('\n', '')

        if(not formatted_line.find('version')):
            conector = ': '
            buff_line = lines.rsplit(conector)
            if(version_mode == '-p'):
                new_version = up_version(2, old_version)
            if(version_mode == '-m'):
                new_version = up_version(1, old_version)
            if(version_mode == '-M'):
                new_version = up_version(0, old_version)
            buff_line[1] = f"\"{str(new_version)}\",\n" 
            lines = conector.join(buff_line)
        temp.append(lines)

with open("package.json", "w") as pack:
    for line in temp:
        pack.write(line)

    