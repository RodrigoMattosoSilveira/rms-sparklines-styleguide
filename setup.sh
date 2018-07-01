#!/usr/bin/env bash

# Usage
# - install packages: $ ./setup.sh
# - install packages and serve the app: $ ./setup.sh -s
# - install packages and link rms-sparklines: $ ./setup.sh -l
# - install packages, link rms-sparklines, and serve the app: $ ./setup.sh -ls

# Process script arguments and set control variables
#
link="no"
serve="no"
echo "Process script arguments and set control variables"
while getopts  "ls" flag
do
  echo "$flag" $OPTIND $OPTARG

  if [ $flag = "l" ];
    then
      link="yes"
  fi

  if [ $flag = "s" ];
    then
      serve="yes"
  fi
done

# echo "link is: $link"
# echo "serve is: $serve"

# Set up the Angular Application
#
echo "Reset Angular application packages"
rm -rf node_modules
npm install --ignore-scripts

if [ $link = "yes" ];
  then
    echo "Linking rms-sparkline"
    npm link ../rms-sparklines/
  else
    echo "We WILL NOT link rms-sparkline"
fi

if [ $serve = "yes" ];
  then
    echo "Serving rms-sparkline-styleguide"
    ng serve
  else
    echo "We WILL NOT serve rms-sparkline-styleguide"
fi
