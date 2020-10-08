@echo off
setlocal ENABLEDELAYEDEXPANSION
for %%d in (*.json) do (
	set from=%%d
	set to=!from:json=js!
	echo !from!
	echo !to!
	ren !from! !to!

)
