#!/bin/bash

if [ $# -ne 2 ]; then
    echo "Usage: $0 <github-username> <repo-name>"
    exit 1
fi

github_username=$1
repo_name=$2

# Initialize the Git repository
git init

# Add all files and folders in the current directory to the staging area
git add .

# Commit the changes with a descriptive message
git commit -m "Initial commit"

# Create a new repository on GitHub
curl -u "$github_username" https://api.github.com/user/repos -d "{\"name\":\"$repo_name\"}"

# Add the remote repository URL
git remote add origin https://github.com/$github_username/$repo_name.git

# Push the changes to the remote repository
git push -u origin master

