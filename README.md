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
4. Update your target wallet on line 19
5. Navigate to https://goerlifaucet.com/ 

Usage
1. Opon Chrome Browser
2. Navigate to https://goerlifaucet.com/ 

Automation
1. Create script
  1a. Open Terminal
  1b. type "vi automate_geth.sh". Press return
  1b. press "i"
  1c. copy and paste ```open -a "Google Chrome" https://goerlifaucet.com```
  1d. press ESC
  1e. type ":wq". Press return
2. Setup cronjob (Note. this will run the automate_geth.sh script daily at 0:0:0 UTC. If you want a different time of day adjust to your preferred settings https://crontab.guru/ can help. Also if you store your scripts in a different directory you will need to modify the path that is referenced)
  2a. Open Terminal
  2b. type "env editor=vi crontab -e". Press return
  2c. press "i"
  2d. copy and paste ```0 0 * * * sh ~/automate_geth.sh```
  2e. press ESC
  2d. type ":wq". Press return

Common Issues
1. You may get an "Operation not permitted" error when trying to run the automate_geth.sh script via crontab. Read https://osxdaily.com/2018/10/09/fix-operation-not-permitted-terminal-error-macos/ to fix this on macos
