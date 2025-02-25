///////////////////////////////////////////////////////////////////

for($i=0;$i -lt 10;$i++){ni file-000$i".html"};
for($i=10;$i -lt 100;$i++){ni file-00$i".html"};
for($i=100;$i -lt 1000;$i++){ni file-0$i".html"};
for($i=1000;$i -lt 10000;$i++){ni file-$i".html"};

///////////////////////////////////////////////////////////////////

for($i=0;$i -lt 10;$i++){md file-000$i};

///////////////////////////////////////////////////////////////////

for ($i = 0; $i -lt 10; $i++) {
    $folderName = "file-000$i"
    New-Item -Path $folderName -ItemType Directory
    New-Item -Path $folderName -Name "file.txt" -ItemType File
}

///////////////////////////////////////////////////////////////////

for ($i = 0; $i -lt 10; $i++) {
    $folderName = "Alireza-Sadeghiyan-00$i"
    New-Item -Path $folderName -ItemType Directory
    New-Item -Path $folderName -Name "file.txt" -ItemType File
}

for ($i = 10; $i -lt 100; $i++) {
    $folderName = "Alireza-Sadeghiyan-0$i"
    New-Item -Path $folderName -ItemType Directory
    New-Item -Path $folderName -Name "file.txt" -ItemType File
}

for ($i = 100; $i -lt 1000; $i++) {
    $folderName = "Alireza-Sadeghiyan-$i"
    New-Item -Path $folderName -ItemType Directory
    New-Item -Path $folderName -Name "file.txt" -ItemType File
}

///////////////////////////////////////////////////////////////////

for ($i = 0; $i -lt 10; $i++) {
    $folderName = "Alireza-00$i"
    New-Item -Path $folderName -ItemType Directory
    New-Item -Path $folderName -Name "Alireza-00$i.txt" -ItemType File
}

for ($i = 10; $i -lt 100; $i++) {
    $folderName = "Alireza-0$i"
    New-Item -Path $folderName -ItemType Directory
    New-Item -Path $folderName -Name "Alireza-0$i.txt" -ItemType File
}

for ($i = 100; $i -lt 1000; $i++) {
    $folderName = "Alireza-$i"
    New-Item -Path $folderName -ItemType Directory
    New-Item -Path $folderName -Name "Alireza-$i.txt" -ItemType File
}

///////////////////////////////////////////////////////////////////