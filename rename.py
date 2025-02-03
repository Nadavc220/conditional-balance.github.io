import os

dir = "static/interpolation_small/monalisa_series"

files = os.listdir(dir)
for file in files:

    os.rename(os.path.join(dir, file), os.path.join(dir, file.split(".")[0][:-4] + "." + file.split(".")[1]))