Get-ChildItem -path c:\windows\web
===
dir -path c:\windows\web
===
ls -path c:\windows\web

help Get-ChildItem -Examples

Get-ChildItem -path c:\windows\web

Get-ChildItem -Path c:\windows\web -name
    
Get-ChildItem -Path c:\windows\web -Recurse
    
Get-childitem -path c:\windows\web -name -recurse
    
dir -path c:\windows\web -recurse -name
    
ls -path c:\windows\web -Include *.jpg -name -recurse 

(ls -path c:\windows\web -Include *.jpg -recurse -name).count

# Create Files and folders
New-Item -ItemType File -Path .\NewFiles01\JustaFile.txt

New-Item -ItemType Directory .\NewFiles01
    
New-Item -ItemType File -Path .\NewFiles01\JustaFile.txt

notepad .\NewFiles01\JustaFile.txt
    
new-item -ItemType Directory -Path .\MovedFolder

mkdir -Path .\mkdir01

$Function:Mkdir
    
md -Path .\md01 
ls 
    
# Copying Files
Get-Command *copy*
    
copy-item -path c:\windows\web -Destination .\CopiedFolder -Recurse -Verbose
    
ls .\CopiedFolder
    
dir .\CopiedFolder -recurse
    
set-location .\CopiedFolder\4K
ls
cd ..
ls
    
get-location
    
# Moving files
move-item .\CopiedFolder -Destination .\MovedFolder -verbose
dir .\MovedFolder -Recurse
    
Rename-Item .\MovedFolder -NewName .\RenamedFolder
cd .\RenamedFolder
ls

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

help get-content -examples 

1..100 | ForEach-Object { Add-Content -Path .\LineNumbers.txt -Value "This is line $_." }

Get-Content -Path .\LineNumbers.txt

Get-Content -Path .\LineNumbers.txt -TotalCount 5

Get-Item -Path .\LineNumbers.txt | Get-Content -Tail 5

Get-Content -Path .\LineNumbers.txt | Set-Content -Path .\LineNumbersv2.txt
get-content -Path .\LineNumbersv2.txt

get-service | out-file demo.csv
get-content demo.csv

notepad demo.csv

get-service | export-csv demo2.csv
notepad demo2.csv

import-csv demo2.csv | where-object -property Name -like "*xbox*" | format-table Name,Description


/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

help Get-ComputerInfo -examples 

Get-ComputerInfo

Get-ComputerInfo | gm

Get-ComputerInfo -Property OS*

Get-ComputerInfo | Format-Table -Property OsBuildNumber,WindowsEditionId,CsNumberOfProcessors,CsNumberOfLogicalProcessors 

Get-ComputerInfo | Format-List -Property OsBuildNumber,WindowsEditionId,CsNumberOfProcessors,CsNumberOfLogicalProcessors
