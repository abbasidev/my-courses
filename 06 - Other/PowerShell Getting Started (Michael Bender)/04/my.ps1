#Demo - Pipelining and Objects
get-service

Get-service | Get-Member

Get-service | select-object -Property Name,Status 

Get-Service | Select-Object -Property Name,Status | gm

// gm === get-member

get-service | where-object -Property status -eq "Stopped" | More 

get-service | where-object -Property status -eq "Stopped" | GM

get-service |
where-object status -eq "Stopped" |
Select-Object Name,Status | More

(get-service | where-object status -eq "Stopped" | Select-Object Name,Status).count

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

Get-Variable

Get-Variable -Name P*

$PSVersionTable

Get-ChildItem ENV:

$env:NUMBER_OF_PROCESSORS
$env:COMPUTERNAME

Write-Host "The name of the computer is $ENV:COMPUTERNAME"
Write-Host 'The name of the variable for the computer is $ENV:COMPUTERNAME'
Write-Host The name of the computer is $ENV:COMPUTERNAME | gm
Write-Output "The name of the compure is $ENV:COMPUTERNAME"
Write-Output "The name of the compure is $ENV:COMPUTERNAME" | gm
$Outputvar = Write-Output "The name of the compure is $ENV:COMPUTERNAME"
$Outputvar

$ServiceVar = Get-Service
$ServiceVar 

$serviceVar | Where-Object -Property Status -eq "Stopped" | Select-Object -Property DisplayName,Status

($servicevar).count
$OutputVar | GM

#Store Credential
$credential = Get-Credential

$credential | gm
$credential

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

#Demo - Formatting
Get-Service

Get-Service | Format-List

Get-Service | Format-List Name,Status

get-service | Format-Table

get-service | Format-Table -AutoSize

get-service | Format-Table -Wrap

get-service | Format-Table -Wrap name,DisplayName
