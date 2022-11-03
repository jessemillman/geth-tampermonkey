# geth-tampermonkey
Tampermonkey script to get Goerli Eth from faucet

## Prerequisites
This script assumes you have logged in to https://goerlifaucet.com/ 

## Installation

1. Install Tampermonkey via https://www.tampermonkey.net/ or Chrome extensions page
2. Navigate to: https://github.com/jessemillman/geth-tampermonkey/raw/main/goerli-faucet.user.js to install the script
3. Open the TamperMonkey extension, click dashboard, edit the newly added script (icon on far-right next to trash)
  3a. In Chrome, click extensions
  3b. Select more options by clicking the three little dots next to TamperMonkey
  3c. Select Options
  3d. Click + in the top right to add a new script
  ![TamperMoney options] (/tempermonkey_options.png)
4. Update your target wallet on line 19
5. Navigate to https://goerlifaucet.com/ 
6. Log into https://goerlifaucet.com/ with your wallet


## Automation setup
1. (If required) Setup bin and log directories
   - Create bin directory it by ```mkdir ~/.bin```
   - Create it by ```mkdir ~/.log```
2. Create automation script
   - Open Terminal
   - Type "vi automate_geth.sh". Press return
   - Press "i"
   - Copy and paste the script from https://github.com/jessemillman/geth-tampermonkey/raw/main/automate_geth.sh
   - Press ESC
   - Type ":wq". Press return
2. Setup cronjob (Note. this will run the automate_geth.sh script daily at 0:0:0 UTC. If you want a different time of day adjust to your preferred settings https://crontab.guru/ can help. Also if you store your scripts in a different directory you will need to modify the path that is referenced)
   - Open Terminal
   - Type "env editor=vi crontab -e". Press return
   - Press "i"
   - Copy and paste the script from https://github.com/jessemillman/geth-tampermonkey/raw/main/crontab.example
   - Press ESC
   - Type ":wq". Press return

##Common Issues
1. You may get an "Operation not permitted" error when trying to run the automate_geth.sh script via crontab. Read https://osxdaily.com/2018/10/09/fix-operation-not-permitted-terminal-error-macos/ to fix this on macos


## Usage
1. Opon Chrome Browser
2. Navigate to https://goerlifaucet.com/ 
